"https://github.com/aoe4world/data/blob/main/units/all-optimized.json"
"units need to be in an array"
"https://github.com/aoe4world/data/blob/main/technologies/all-optimized.json"
const units = require('./newUnitsAllOptimized')
const techs = require('./newTechAllOptimized')
const fs = require('fs')
const updatedTechs = []
/*
take the effected ids as a starting point, if there are any
search the units for units that contain all classes of the tech 
*/

// console.log('test1', techs.test1)
// console.log('test2', techs.test2)
// console.log(units)
// console.log(techs)
const arrayContainsAll = (techClasses, unitClasses) => {
  for (let x = 0; x < techClasses.length; x++) {
    if (!unitClasses.includes(techClasses[x])) return false
  }
  return true
}
const dedupeArray = (array) => {
  const newArray = []
  array.forEach((item) => {
    if (!newArray.includes(item)) newArray.push(item)
  })
  return newArray
}

for (let x = 0; x < techs.length; x++) {
  let effectedIds = []
  const tech = techs[x]
  if (tech.effects) {
    for (let y = 0; y < tech.effects.length; y++) {
      const effect = tech.effects[y]
      if (effect.select.id) {
        effect.select.id.forEach((id) => {
          if (units.filter((unit) => unit.id === id).length > 0)
            effectedIds.push(unit.pbgid)//
        })
      }
      if (effect.select.class) {
        for (let z = 0; z < effect.select.class.length; z++) {
          let selectedClasses = effect.select.class[z]
          let filteredUnits = units.filter((unit) => {
            return arrayContainsAll(selectedClasses, unit.classes)
          })
          filteredUnits.forEach((unit) => {
            effectedIds.push(unit.pgbid)
          })
        }
      }
    }
    if (effectedIds.length !== 0) {
      updatedTechs.push({ ...tech, effectedUnitIds: dedupeArray(effectedIds) })
    }
    //   console.log(`ID: ${tech.id}`, `EffectedIds: ${dedupeArray(effectedIds)}`)
  }
}

fs.writeFile(
  'updatedTechs.json',
  JSON.stringify(updatedTechs, null, 2),
  () => {},
)