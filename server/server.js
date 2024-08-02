// const express = require('express')
import express from "express"
const app = express()
// const cors = require('cors')
import cors from "cors"
// const { response, request } = require('express')
import {response, request } from 'express'
// const {MongoClient, ObjectId} = require('mongodb')
import { MongoClient, ObjectId } from 'mongodb'
// require('dotenv').config()
import dotenv from 'dotenv'
dotenv.config()


import civs from '../civs.js';




// const main = require("./public/main.js") removed to get main.js to work



let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'AOE4',
    collection,
    collection2

const PORT = process.env.PORT
    
    const mongoConnect = async() =>{
        try{
            const client = await MongoClient.connect(dbConnectionString, {useUnifiedTopology: true, useNewUrlParser: true})
            dbConnectionString.startsWith('X')
            db = await client.db(dbName)
            console.log(`Connected to Database`)
            collection = await db.collection('apostrophe test')
            collection2 = await db.collection('AOE43rdTechCollection')
            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`)
            })
            
        }
        catch(err){
            
            console.log("ERROR connecting to DB: ", err)
    
        }
    }
 mongoConnect()
    
// app.set('view engine', 'html')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))// in place of body-parser
app.use(express.json())// in place of body-parser
app.use(cors())

//renders the main page with the inputs

// app.get('/', async (request, response)=>{
//     try{
//         const listOfUnits2 = await collection.distinct('name',{civs: {$in:['ab']}})
//         const result = await listOfUnits2
//         // response.render('index.html', {info: result});
//         // console.log(response)
//         response.sendFile(path.join(__dirname + '/index.html'), {info: result})
//     }
//     catch(err){
//         console.log(err);
//     }
// })

app.post('/getUnits', async (request, response)=>{
    
    try{
        const units = await collection.distinct('baseId',{civs: {$in:[request.body.selectedCiv]}})


// const agg = [
//     {
//         '$match': {
//           'civs': request.body.selectedCiv
//         }
//       }, {
//         '$group': {
//           '_id': '$baseId', 
//           'pbgid': {
//             '$first': '$pbgid'
//           }
//         }
//       }
//   ];

//   const cursor = await collection.aggregate(agg)
//   const result = await cursor.toArray()

    // result.forEach((obj)=>
    //     obj._id.includes("-") 
    //         ? obj._id = obj._id.split('-').map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    //         : obj._id = obj._id.charAt(0).toUpperCase() + obj._id.slice(1))
    
    console.log('units', units)

    const unitsMod = await units.map((unit)=>
        unit.includes("-") 
            ? unit.split('-').map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
            : unit.charAt(0).toUpperCase() + unit.slice(1)) 
        
        // .split('-').map((word)=>word.charAt[0].toUpperCase() + slice(1)).join(' ')

    //     const arrayResult = result.map(obj => Object.values(obj))
    //     const arrayResultAlphabetized = arrayResult.sort((a,b)=>{
    //         if (a[0] > b[0]) return 1;
    //         if (a[0] < b [0]) return -1
    // })
        // console.log("arrayResultAlphabetized", arrayResultAlphabetized)
        // console.log(arrayResultAlphabetized)
        // response.json(arrayResultAlphabetized)
        console.log('unitsMod', unitsMod)
        response.json(unitsMod)
    }
    catch(err){
        console.log(err)
    }
})
//dont need ages since the data changed to include every unit in every age
app.post('/getSelectAge', async (request, response)=>{    
    try{
        function reverseFormat(unit) {
            return unit.includes(" ") 
                ? unit.split(' ').map(word => word.charAt(0).toLowerCase() + word.slice(1)).join('-') 
                : unit.charAt(0).toLowerCase() + unit.slice(1);
        }

        console.log('selectedText', request.body.selectText)
        console.log('reverse', reverseFormat(request.body.selectText))
        const reverseSelectedText = reverseFormat(request.body.selectText)
        const itemsAges = await collection.find({'baseId': reverseSelectedText,'civs':{$in: [request.body.selectCiv.toLowerCase()]}},{projection: {age: 1, _id: 0}}).sort({age: 1})
        // console.log('itemsAges', itemsAges)
        const result = await itemsAges.toArray();
        console.log('result', result)    
        await itemsAges.close();
        // const addMissingAges = (array) => {
        //     array.sort((a,b)=>a.age - b.age)
        //     for(i=array[0].age;i<=4;i++){
        //         if(!array.some(x=> x.age == i)){
        //             array.push({age: i})
        //     }}
        //    return array.sort((a,b)=>a.age - b.age)
        // }
        // const result2 = addMissingAges(result)
        // console.log(result2)
        // response.json(result2);
        let valuesOnly = result.map(x=>x.age)
        
        if(valuesOnly.includes(4)){valuesOnly = valuesOnly}
        else{let i= 1; while(!valuesOnly.includes(4)){
            valuesOnly.push(valuesOnly[0] + i)
            i++
        }}
        
        response.json(valuesOnly);
        
    }
    catch(err){
        console.log(err)
    }
})

app.post('/getSelectTechs', async (request, response)=>{
    try{       
        let test = await collection.findOne({'name': request.body.selectText.replace(' ', '-').toLowerCase(), 'civs': {$in: [request.body.selectCiv.toLowerCase()]}, 'age': Number(request.body.selectAge)})

        const filter2 = {civs:{ $in: [request.body.selectCiv]}, effectedUnitIds: {$in: [request.body.selectText.toLowerCase().replace(' ','-')]}, minAge: {$lte: Number(request.body.selectAge)}}

//         const client = await MongoClient.connect(
//         {mongoConnectionString},
//         { useNewUrlParser: true, useUnifiedTopology: true }
//   );
        // const coll = client.db('AOE4').collection('AOE42ndTechCollection');
        // const cursor = await coll.find(filter2);
        // let result = await cursor.toArray();
        // await client.close();
        const cursor = await collection2.find(filter2);
        let result = await cursor.toArray();
            
        if(result.length == 0){
            result = [{name: 'No Techs to Display'}]
        }
        
        response.json(result);
  }
    
    catch(err){
        console.log(err);
    }
})

//grab the values within the dropdown list and returns their stats to calculate which team wins and then renders the results page
app.post('/calculate', async (request, response)=>{
    try{
        console.log(request.body)
        let unitObject1 = await collection.findOne({'name': request.body.unit1, 'civs': {$in: [request.body.civ1]}, 'age': Number(request.body.age1)})
        let unitObject2 = await collection.findOne({'name': request.body.unit2, 'civs': {$in: [request.body.civ2]}, 'age': Number(request.body.age2)})
        
        console.log('unitObject1', unitObject1)
        console.log('request.body', request.body)

        unitObject1.civs = [request.body.civ1]
        console.log('unitObject1.civs', unitObject1.civs)

        unitObject2.civs = [request.body.civ2]
        console.log('unitObject2.civs', unitObject2.civs)

        unitObject1.fullNameOfCiv = ''
        unitObject2.fullNameOfCiv = ''

        
        let attackFullNameOfCivToObject = (unitObject) => {
            const selectedCiv = civs.find((element) => {
                return element.value === unitObject.civs[0];
            });
        
            console.log('selectedCiv', selectedCiv);
            return selectedCiv ? selectedCiv.name : undefined;
        };
        
        // let test = attackFullNameOfCivToObject({civs: ['ab']})
        // console.log('test', test)
        // let attackFullNameOfCivToObject = (object) => {
        //     if(object.civs == 'ab'){
        //          object.fullNameOfCiv = 'Abbasid'
        //     }
        //     else if(object.civs == 'ch'){
        //          object.fullNameOfCiv = 'Chinese'
        //     }
        //     else if(object.civs == 'hr'){
        //          object.fullNameOfCiv = 'Holy Roman Empire'
        //     }
        //     else if(object.civs == 'en'){
        //          object.fullNameOfCiv = 'English'
        //     }
        //     else if(object.civs == 'de'){
        //          object.fullNameOfCiv = 'Delhi Sultanate'
        //     }
        //     else if(object.civs == 'fr'){
        //          object.fullNameOfCiv = 'French'
        //     }
        //     else if(object.civs == 'mo'){
        //          object.fullNameOfCiv = 'Mongols'
        //     }
        //     else if(object.civs == 'ru'){
        //          object.fullNameOfCiv = 'Rus'
        //     }
        //     else if(object.civs == 'ot'){
        //          object.fullNameOfCiv = 'Ottoman'
        //     }
        //     else if(object.civs == ''){
        //          object.fullNameOfCiv = 'Malians'
        //     }
        //     else if(object.civs == 'ma'){
        //         object.fullNameOfCiv = 'Malians'
        //     }
        //     else if(object.civs == 'ma'){
        //         object.fullNameOfCiv = 'Malians'
        //     }
        //     else if(object.civs == 'ma'){
        //         object.fullNameOfCiv = 'Malians'
        //     }
        //     else if(object.civs == 'ma'){
        //         object.fullNameOfCiv = 'Malians'
        //     }
        //     else if(object.civs == 'ma'){
        //         object.fullNameOfCiv = 'Malians'
        //     }
        //     else if(object.civs == 'ma'){
        //         object.fullNameOfCiv = 'Malians'
        //     }
           
        // }
        attackFullNameOfCivToObject(unitObject1)
        attackFullNameOfCivToObject(unitObject2)

        let tech1Array = []
        if(request.body.techs1){
            for(let i=0;i<request.body.techs1.length;i++){
            let techObjects1 = await collection2.findOne({_id : new ObjectId(request.body.techs1[i])})
            let techObjectsResult1 = await techObjects1
            tech1Array.push(techObjectsResult1)
       }
    }
        
       let tech2Array = []
       if(request.body.techs2){
        console.log(request.body)
        console.log('techs2',request.body.techs2)
        console.log('length', request.body.techs2.length)
        for(let i=0;i<request.body.techs2.length;i++){
        let techObjects2 = await collection2.findOne({_id : new ObjectId(request.body.techs2[i])})
        let techObjectsResult2 = await techObjects2
        
        tech2Array.push(techObjectsResult2)
       }
    }
      

       if(unitObject1.armor.length == 0){//unit1 add armor values and type if object does not have any
        unitObject1.armor = []
        unitObject1.armor[0] = {}
        unitObject1.armor[0].type = "ranged"
        unitObject1.armor[0].value = 0
        unitObject1.armor[1] = {}
        unitObject1.armor[1].type = "melee"
        unitObject1.armor[1].value = 0
    }
    //add 
    else if(unitObject1.armor.findIndex(x=>x.type === 'ranged') > 0 && !unitObject1.armor.findIndex(x=>x.type === 'melee') < 0){
        unitObject1.armor = []
        unitObject1.armor[1] = {}
        unitObject1.armor[1].type = "melee"
        unitObject1.armor[1].value = 0
    }
    else if(unitObject1.armor.findIndex(x=>x.type === 'melee') > 0 && !unitObject1.armor.findIndex(x=>x.type === 'ranged') < 0){
        
        unitObject1.armor[1] = {}
        unitObject1.armor[1].type = "ranged"
        unitObject1.armor[1].value = 0
    }else{}
    //
       if(unitObject2.armor.length == 0){//unit2 add armor values and type if object does not have any
        unitObject2.armor = []
        unitObject2.armor[0] = {}
        unitObject2.armor[0].type = "ranged"
        unitObject2.armor[0].value = 0
        unitObject2.armor[1] = {}
        unitObject2.armor[1].type = "melee"
        unitObject2.armor[1].value = 0
    }
    else if(unitObject2.armor.findIndex(x=>x.type === 'ranged') > 0 && !unitObject2.armor.findIndex(x=>x.type === 'melee') < 0){
        unitObject2.armor = []
        unitObject2.armor[1] = {}
        unitObject2.armor[1].type = "melee"
        unitObject2.armor[1].value = 0
    }
    else if(unitObject2.armor.findIndex(x=>x.type === 'melee') > 0 && !unitObject2.armor.findIndex(x=>x.type === 'ranged') < 0){
        
        unitObject2.armor[1] = {}
        unitObject2.armor[1].type = "ranged"
        unitObject2.armor[1].value = 0
    }else{}

       function maths(operator, number1, number2){
            if(operator == "add"){
                return number1 + number2
            }
            if(operator == "change"){
                return number1 + number2
            }
            if(operator == "multiply"){
                return number1 * number2
            }
            else{
                return "unable to find operator"
            }
       }


       let object1IndexOfRangedArmor = unitObject1.armor.findIndex(x=>x.type === 'ranged')
       let object1IndexOfMeleeArmor = unitObject1.armor.findIndex(x=>x.type === 'melee')
       let object2IndexOfRangedArmor = unitObject2.armor.findIndex(x=>x.type === 'ranged')
       let object2IndexOfMeleeArmor = unitObject2.armor.findIndex(x=>x.type === 'melee')

       for(let eachTechObject of tech1Array){//iterates through each select tech
        for(let effectObject of eachTechObject.effects){//iterates through each tech effect
            
            if(effectObject.property == "rangedAttack" && unitObject1.weapons[0].type == "ranged"){//dont need to iterate through unitObject weapons because a unit only has one weapon type
                unitObject1.weapons[0].damage = maths(effectObject.effect, unitObject1.weapons[0].damage, effectObject.value)
            }
            else if(effectObject.property == "meleeAttack" && unitObject1.weapons[0].type == "melee"){
                unitObject1.weapons[0].damage = maths(effectObject.effect, unitObject1.weapons[0].damage, effectObject.value)
            }
            else if(effectObject.property == "rangedArmor" && unitObject1.armor[object1IndexOfRangedArmor].type === "ranged"){
                unitObject1.armor[object1IndexOfRangedArmor].value = maths(effectObject.effect, unitObject1.armor[object1IndexOfRangedArmor].value, effectObject.value)
            }
            else if(effectObject.property == "meleeArmor" && unitObject1.armor[object1IndexOfMeleeArmor].type == "melee"){
                unitObject1.armor[object1IndexOfMeleeArmor].value = maths(effectObject.effect, unitObject1.armor[object1IndexOfMeleeArmor].value, effectObject.value)
            }
            else if(effectObject.property == "hitpoints"){
              unitObject1.hitpoints = maths(effectObject.effect, unitObject1.hitpoints, effectObject.value)
            }
           else if(effectObject.property == "attackSpeed"){
                unitObject1.weapons[0].speed = maths(effectObject.effect, unitObject1.weapons[0].speed, effectObject.value)
            }
           else if(effectObject.property == "siegeAttack"){
                unitObject1.weapons[0].damage = maths(effectObject.effect, unitObject1.weapons[0].damage, effectObject.value)
            }
            
        }
        //unit 2
       }
       for(let eachTechObject of tech2Array){//iterates through each select tech
        for(let effectObject of eachTechObject.effects){//iterates through each tech effect
            
            
            if(effectObject.property == "rangedAttack" && unitObject2.weapons[0].type == "ranged"){//dont need to iterate through unitObject weapons because a unit only has one weapon type
                unitObject2.weapons[0].damage = maths(effectObject.effect, unitObject2.weapons[0].damage, effectObject.value)
            }
            else if(effectObject.property == "meleeAttack" && unitObject2.weapons[0].type == "melee"){
                unitObject2.weapons[0].damage = maths(effectObject.effect, unitObject2.weapons[0].damage, effectObject.value)
            }
           else if(effectObject.property == "rangedArmor" && unitObject2.armor[object2IndexOfRangedArmor].type === "ranged"){
                unitObject2.armor[object2IndexOfRangedArmor].value = maths(effectObject.effect, unitObject2.armor[object2IndexOfRangedArmor].value, effectObject.value)
            }
           else if(effectObject.property == "meleeArmor" && unitObject2.armor[object2IndexOfMeleeArmor].type == "melee"){
                unitObject2.armor[object2IndexOfMeleeArmor].value = maths(effectObject.effect, unitObject2.armor[object2IndexOfMeleeArmor].value, effectObject.value)
            }
           else if(effectObject.property == "hitpoints"){
              unitObject2.hitpoints = maths(effectObject.effect, unitObject2.hitpoints, effectObject.value)
            }
           else if(effectObject.property == "attackSpeed"){
                unitObject2.weapons[0].speed = maths(effectObject.effect, unitObject2.weapons[0].speed, effectObject.value)
            }
           else if(effectObject.property == "siegeAttack"){
                unitObject2.weapons[0].damage = maths(effectObject.effect, unitObject2.weapons[0].damage, effectObject.value)
            }
            
        }
        
       }
   
       const numberOfUnits1 = request.body.numberOfUnits1 ? request.body.numberOfUnits1 : 1
       const teamOneHitpoints = unitObject1.hitpoints * numberOfUnits1
       const teamOneDamage = unitObject1.weapons[0] ? unitObject1.weapons[0].damage : 0
       const teamOneAttackSpeed = unitObject1.weapons[0] ? unitObject1.weapons[0].speed : 0
       //const teamOneMeleeArmor = unitObject1.armor[object1IndexOfMeleeArmor].value
       const teamOneRangedArmor = unitObject1.armor[object1IndexOfRangedArmor].value
       let teamOneWeaponModifier = 0
       let teamOneRelevantArmor = 0
       
       const numberOfUnits2 = request.body.numberOfUnits2 ? request.body.numberOfUnits2 : 1
       const teamTwoHitpoints = unitObject2.hitpoints * numberOfUnits2
       const teamTwoDamage = unitObject2.weapons[0] ? unitObject2.weapons[0].damage : 0
       const teamTwoAttackSpeed = unitObject2.weapons[0] ? unitObject2.weapons[0].speed : 0
       //const teamTwoMeleeArmor = unitObject2.armor[object2IndexOfMeleeArmor].value
       const teamTwoRangedArmor = unitObject2.armor[object2IndexOfRangedArmor].value
       let teamTwoWeaponModifier = 0
       let teamTwoRelevantArmor = 0
       

       console.log('modifiers', unitObject1.weapons[0].modifiers.length)
       //check if weapon modifier should be used
       if(unitObject1.weapons.length !== 0 && unitObject1.weapons[0].modifiers.length !==0 && unitObject1.weapons[0].modifiers[0].target.class[0].every((unitClass)=>unitObject2.displayClasses[0].toLowerCase().includes(unitClass))){
        teamOneWeaponModifier = unitObject1.weapons[0].modifiers[0].value
       }
       else{
        teamOneWeaponModifier = 0
       }
       if(unitObject2.weapons.length !== 0 && unitObject2.weapons[0].modifiers.length !== 0 && unitObject2.weapons[0].modifiers[0].target.class[0].every((unitClass)=>unitObject1.displayClasses[0].toLowerCase().includes(unitClass))){
        teamTwoWeaponModifier = unitObject2.weapons[0].modifiers[0].value
       }
       else{
        teamTwoWeaponModifier = 0
       }
       //find relevant armor unit 1
       if(unitObject1.weapons.length !== 0 && unitObject1.weapons[0].type == 'ranged' && unitObject2.armor[0].value > 0 && object2IndexOfRangedArmor > -1){
        teamTwoRelevantArmor = unitObject2.armor[object2IndexOfRangedArmor].value
        unitObject2.relevantArmorType = 'ranged'
       }
       else if(unitObject1.weapons.length !== 0 && unitObject1.weapons[0].type == 'melee' && unitObject2.armor[0].value > 0 && object2IndexOfMeleeArmor > -1){
        teamTwoRelevantArmor = unitObject2.armor[object2IndexOfMeleeArmor].value
        unitObject2.relevantArmorType = 'melee'
       }else{
        teamTwoRelevantArmor = 0
        unitObject2.relevantArmorType = 'none'
       }
       // unit 2
       if(unitObject2.weapons.length !== 0 && unitObject2.weapons[0].type == 'ranged' && unitObject1.armor[0].value > 0 && object1IndexOfRangedArmor > -1){
        teamOneRelevantArmor = unitObject1.armor[object1IndexOfRangedArmor].value
        unitObject1.relevantArmorType = 'ranged'
       }
       else if(unitObject2.weapons.length !== 0 && unitObject2.weapons[0].type == 'melee' && unitObject1.armor[0].value > 0 && object1IndexOfMeleeArmor > -1){
        teamOneRelevantArmor = unitObject1.armor[object1IndexOfMeleeArmor].value 
        unitObject1.relevantArmorType = 'melee'
       }else{
        teamOneRelevantArmor = 0
        unitObject1.relevantArmorType = 'none'
        
       }
    
       //final calculation
       let teamOneTrueDamage = Math.round((((teamOneDamage + teamOneWeaponModifier - teamTwoRelevantArmor) * numberOfUnits1) / teamOneAttackSpeed) * 100)/100
       if(teamOneTrueDamage < 1){
        teamOneTrueDamage = 1
       }
       let teamTwoTrueDamage = Math.round((((teamTwoDamage + teamTwoWeaponModifier - teamOneRelevantArmor) * numberOfUnits2) / teamTwoAttackSpeed) * 100)/100
       if(teamTwoTrueDamage < 1){
        teamTwoTrueDamage = 1
       }

       const teamOneTimeToKillTeamTwo = Math.round((teamTwoHitpoints / teamOneTrueDamage)*100)/100
       const teamTwoTimeToKillTeamOne = Math.round((teamOneHitpoints / teamTwoTrueDamage)*100)/100
    
       let result

       

       if(teamOneTimeToKillTeamTwo < teamTwoTimeToKillTeamOne){
         result = {
        winningUnit : unitObject1,
        losingUnit : unitObject2,
        winningTechArray : tech1Array,
        losingTechArray : tech2Array,
        winningTeam : {
            team: 'Team One',
            numberOfUnits: numberOfUnits1,
            hitpoints: teamOneHitpoints,
            damage: teamOneDamage,
            speed: teamOneAttackSpeed,
            weaponModifier: teamOneWeaponModifier,
            relevantArmor: teamOneRelevantArmor,
            trueDamage: teamOneTrueDamage,
            timeToKillOtherTeam: teamOneTimeToKillTeamTwo
           },
           losingTeam : {
            team: 'Team Two',
            numberOfUnits: numberOfUnits2,
            hitpoints: teamTwoHitpoints,
            damage: teamTwoDamage,
            speed: teamTwoAttackSpeed,
            weaponModifier: teamTwoWeaponModifier,
            relevantArmor: teamTwoRelevantArmor,
            trueDamage: teamTwoTrueDamage,
            timeToKillOtherTeam : teamTwoTimeToKillTeamOne,
            
           }
        
        }
   
       }
        
       else if(teamOneTimeToKillTeamTwo > teamTwoTimeToKillTeamOne){
         result = {
        winningUnit : unitObject2,
        losingUnit : unitObject1,
        winningTechArray : tech2Array,
        losingTechArray : tech1Array,
        winningTeam : {
            team: 'Team Two',
            numberOfUnits: numberOfUnits2,
            hitpoints: teamTwoHitpoints,
            damage: teamTwoDamage,
            speed: teamTwoAttackSpeed,
            weaponModifier: teamTwoWeaponModifier,
            relevantArmor: teamTwoRelevantArmor,
            trueDamage: teamTwoTrueDamage,
            timeToKillOtherTeam : teamTwoTimeToKillTeamOne,
           },
        losingTeam : {
            team: 'Team One',
            numberOfUnits: numberOfUnits1,
            hitpoints: teamOneHitpoints,
            damage: teamOneDamage,
            speed: teamOneAttackSpeed,
            weaponModifier: teamOneWeaponModifier,
            relevantArmor: teamOneRelevantArmor,
            trueDamage: teamOneTrueDamage,
            timeToKillOtherTeam: teamOneTimeToKillTeamTwo
           }
        }
        console.log("unitObject1", result.winningTeam)
console.log("unitObject2", result.losingTeam)
       }
       else{
         result = {
            tieStatement : 'No blood was shed on this day as there is a tie. Please try another combination.'
        }
        console.log('no blood shit')
       }
       
       response.json(result)
    }     
    catch(err){
        console.log(err)
    }   
    })