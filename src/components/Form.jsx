import React, { useEffect, useState } from "react"
// import getUnits1 from "./Functions"

const civs = [
  {
    name: "Abbasid",
    value: 'ab'
  },
  {
    name: "Chinese",
    value: 'ch'
  },
  {
    name: "Holy Roman Empire",
    value: "hr"
  },
  {
    name: "English",
    value: "en"
  },
  {
    name: "Delhi Sultanate",
    value: "de"
  },
  {
    name: "French",
    value: 'fr'
  },
  {
    name: "Mongols",
    value: 'mo'
  },
  {
    name: "Rus",
    value: 'ru'
  },
  {
    name: "Ottomans",
    value: "ot"
  },
  {
    name: "Malians",
    value: "ma"
  }
]



function Form(){
    
  const [civ1, setCiv1] = useState('ab')
  const [civList1, setCivList1] = useState(civs)
  const [civ2, setCiv2] = useState('ab')
  const [civList2, setCivList2] = useState(civs)
  
    const [selectedUnit1, setSelectedUnit1] = useState('Archer')
    const [units1, setUnits1] = useState([])
    const [selectedUnit2, setSelectedUnit2] = useState('Archer')
    const [units2, setUnits2] = useState([])

    const [age1, setAge1] = useState(2)
    const [age1List, setAge1List] = useState([])
    const [age2, setAge2] = useState(2)
    const [age2List, setAge2List] = useState([])

    const [numberOfUnits1, setNumberOfUnits1] = useState(1)
    const [numberOfUnits2, setNumberOfUnits2] = useState(1)

    const [selectedTechs1, setSelectedTechs1] = useState()
    const [techs1List, setTechs1List] = useState([])
    const [selectedTechs2, setSelectedTechs2] = useState()
    const [techs2List, setTechs2List] = useState([])

    async function getUnits(selectedCiv, setUnitsFunction){//e.target.value,setUnits1
    try{
      console.log('getUnits1 ran')
      // console.log('civ1', civ1)
        const requestFromMainJS = await fetch("http://localhost:8001/getUnits",{
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({
                'selectedCiv' : selectedCiv
            })
        })
        // console.log(requestFromMainJS)
        let itemObject = await requestFromMainJS.json()
        // console.log('item object', itemObject)
        setUnitsFunction([...itemObject])
        setSelectedUnit1(itemObject[0])
        
    }
    catch(err){
        console.log(err)
    }
}

async function getAges(selectedUnit, selectedCiv, setAgeFunction, setAgeListFunction){//selection, civ, setAgeList
    // setSelectedUnit1()
    try{ 
      console.log('getAges ran')
        const requestFromMainJS = await fetch("http://localhost:8001/getSelectAge",{
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({
                'selectText': selectedUnit,
                'selectCiv': selectedCiv
            })
        })
        // console.log(requestFromMainJS)
        // console.log('selectedUnit1',selectedUnit1)
        // console.log('cvi1', civ1)
        const itemObject = await requestFromMainJS.json()
        // console.log('getAges1 itemObject', itemObject)
        let array = Object.values(itemObject)
        // console.log('array',array)
        let valuesOnly = array.map(x=>x.age)
        // console.log('getAges1 valuesOnly', valuesOnly)
        await setAgeListFunction(valuesOnly)
        // console.log('valuesonly',valuesOnly)
        await setAgeFunction(valuesOnly[0])
        
    }catch(err){
        console.log(err)
    }
}

async function getTechs(selectedAge, selectedCiv, selectedUnit, setTechsList){
  try{     
          console.log('getTechs ran') 
          const requestFromMainJS = await fetch('http://localhost:8001/getSelectTechs', {
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
              'selectCiv': selectedCiv,
              'selectText': selectedUnit,
              'selectAge': selectedAge
          })
      })
      
      const techArray = await requestFromMainJS.json()
      // console.log('getTechs1',techArray)
      // console.log('2222',Object.values(techArray).map(x=>x.id))
      await setTechsList(techArray)
      }
     
  catch(err){
      console.log(err)
  }
}


    async function handleCivChange(e, setCivFunction, setUnitsFunction, selectedUnit, civ, setAgeFunction, setAgeListFunction, age, setTechsList) {
      console.log("handleCivChange ran")
      await setCivFunction(e.target.value)
      await getUnits(e.target.value, setUnitsFunction)
      await getAges(selectedUnit, civ, setAgeFunction, setAgeListFunction)
      await getTechs(age, civ, selectedUnit, setTechsList)
    }
  
   
    
    async function handleUnitChange(e, setUnitFunction, selectedCiv, setAgeFunction, setAgeListFunction, selectedAge, setTechsList){
      console.log("handleUnitChange ran")
      await setUnitFunction(e.target.value)
      await getAges(e.target.value, selectedCiv, setAgeFunction, setAgeListFunction)
      await getTechs(selectedAge, selectedCiv, e.target.value, setTechsList)
      // selectedUnit = document.querySelector("#selectUnitNumberOne").value
      // selectedAge = await document.querySelector('#selectAgeNumberOne').value
      // console.log('handleUnitChange', e.target.value) 
      // console.log(setUnitFunction)
      // console.log( selectedCiv) 
      // console.log(setAgesFunction)
      // console.log(selectedAge)
      
      // console.log( selectedUnit)
      // console.log( {setTechsList})
     
    }

    
      //   useEffect(()=>{
      //       // getAges(selectedUnit1, civ1, setAge1, setAge1List)
      //       getTechs(age1, civ1, selectedUnit1, setTechs1List)
      //       console.log("useEffect1 ran")
          
      // },[age1])

      
      // useEffect(()=>{
      //      getTechs(age2, civ2, selectedUnit2, setTechs2List)

        
      // },[age2])
    
  

    async function handleAgeChange(e, setAgeFunction, selectedCiv, selectedUnit, setTechsList){
      console.log("handleAgeChange ran")
      await setAgeFunction(e.target.value)
      await getTechs(e.target.value, selectedCiv, selectedUnit, setTechsList)
    }

    function handleTechChange(e, setSelectedTechsFunction){
      console.log("handleTechChange ran")
      const value = Array.from(e.target.selectedOptions, (option) => option.value)
      console.log('value', value)
      setSelectedTechsFunction(e.target.values)
    }

    function handleSubmit(e){
        e.preventDefault()
        const submitObject = {
            civ1, units1, age1, techs1
        }
        console.log(submitObject)
    }

    useEffect(()=>{
    async function test(){
      console.log('intitial useEffect ran')
        await getUnits(civ1, setUnits1)
        await getAges(selectedUnit1, civ1, setAge1, setAge1List)
        await getTechs(age1, civ1, selectedUnit1, setTechs1List)
        await getUnits(civ2, setUnits2)
        await getAges(selectedUnit2, civ2, setAge2, setAge2List)
        await getTechs(age2, civ2, selectedUnit2, setTechs2List)
      }
      test()
    }, [])
    // useEffect(()=>{
    // async function test(){
    //     await getUnits(civ1, setUnits1)
    //     await getAges(selectedUnit1, civ1, setAge1, setAge1List)
    //     await getTechs(age1, civ1, selectedUnit1, setTechs1List)
    //   }
    //   test()
    // }, [civ1])
    // useEffect(()=>{
    // async function test(){
    //     await getUnits(civ2, setUnits2)
    //     await getAges(selectedUnit2, civ2, setAge2, setAge2List)
    //     await getTechs(age2, civ2, selectedUnit2, setTechs2List)
    //   }
    //   test()
    // }, [civ2, selectedUnit2, age2])


    return(
        <>
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>App Template</title>
  <link rel="stylesheet" href="/style.css" />
  {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> */}
  <div className="divThree">
    <h1 id="focus">AOE4 Unit Counter Calculator</h1>
  </div>
  <div className="divThree">
    <h2>
      Choose two units or two teams of units to compare then click submit to see
      which won!
    </h2>
  </div>
  <div id="finalResult" />
  <form action="/calculate" method="POST" name="form" id="form">
    <div id="divTwo">
      <div id="divOne">
        <label htmlFor="sectionOne">Team One</label>
        <section className="sectionOne" id="sectionOne" name="sectionOne">
          <section>
            <label htmlFor="selectCivNumberOne">Select a Civ</label>
            <select
              id="selectCivNumberOne"
              name="selectCivNumberOne"
              value={civ1}
              onChange={(e)=> handleCivChange(e, setCiv1, setUnits1, selectedUnit1, civ1, setAge2, setAge1List, age1, setTechs1List)}
            >
              {civs.map((x,i)=>
                <option key={i} value={x.value}>{x.name}</option>
              )
              }
            </select>
          </section>
          <br />
          <section>
            <label htmlFor="selectUnitNumberOne">Select a Unit</label>
            <select
              id="selectUnitNumberOne"
              name="selectUnitNumberOne"
              title="optionForSelection1"
              className="selectNumberOne"
              value={selectedUnit1}
              onChange={(e)=>handleUnitChange(e, setSelectedUnit1, civ1, setAge1, setAge1List, age1, setTechs1List)}
            >
               {units1.map(x=><option key={x} value={x}>
            {x}
                </option>)
        }
             
              
            </select>
          </section>
          {/* to select civ */}
          <br />
          <section>
            <label htmlFor="selectAgeNumberOne">Choose an Age</label>
            <select
              id="selectAgeNumberOne"
              name="selectAgeNumberOne"
              title="agesForSelection1"
              className="selectNumberOne"
              value={age1}
              onChange={(e)=>handleAgeChange(e, setAge1, civ1, selectedUnit1, setTechs1List)}
            >{age1List.map((x,i)=>
              <option key={i}>{x}</option>
            )}</select>
          </section>
          <br />
          <section>
            <label htmlFor="numberOne">Select a number of Units</label>
            <input
              id="numberOne"
              type="number"
              name="numberOne"
              // placeholder={1}
              // defaultValue={1}
              value={numberOfUnits1}
              onChange={(e)=>setNumberOfUnits1(e.target.value)}
              min={1}
            />
          </section>
          <br />
          <section>
            <label htmlFor="techSelectOne">Select a Tech</label>
            <select id="techSelectOne" multiple onChange={(e)=>handleTechChange(e, setSelectedTechs1)}>
            {
              //console.log('111',Object.values(techs1))
              Object.values(techs1List).map(x=>
               <option title={x.description} value={x._id} key={x._id}>{x.name}</option> )
               }
            </select>
          </section>
        </section>
      </div>
      <div id="divOne">
        <label htmlFor="sectionTwo">Team Two</label>
        <section className="sectionTwo" id="sectionTwo" name="sectionTwo">
          <section>
            <label htmlFor="selectCivNumberTwo">Select a Civ</label>
            <select
              id="selectCivNumberTwo"
              name="selectCivNumberTwo"
              value={civ2}
              onChange={(e)=> handleCivChange(e, setCiv2, setUnits2, selectedUnit2, civ2, setAge2, setAge2List, age2, setTechs2List)}
            >
              {civs.map((x,i)=>
                <option key={i} value={x.value}>{x.name}</option>
              )
              }
            </select>
          </section>
          <br />
          <section>
            <label htmlFor="selectUnitNumberTwo">Select a Unit</label>
            <select
              id="selectUnitNumberTwo"
              name="selectUnitNumberTwo"
              title="optionForSelection2"
              className="selectNumberTwo"
              //value={selectedUnit1}
              onChange={(e)=>handleUnitChange(e, setSelectedUnit2, civ2, setAge2, setAge2List, age2, setTechs2List)}
            >
               {units2.map(x=><option key={x} value={x}>
            {x}
                </option>)
        }
             
              
            </select>
          </section>
          {/* to select civ */}
          <br />
          <section>
            <label htmlFor="selectAgeNumberTwo">Choose an Age</label>
            <select
              id="selectAgeNumberTwo"
              name="selectAgeNumberTwo"
              title="agesForSelectionTwo"
              className="selectNumberTwo"
              onChange={(e)=>handleAgeChange(e, setAge2, civ2, selectedUnit2, setTechs2List)}
            >{age2List.map((x,i)=>
              <option key={i}>{x}</option>
            )}</select>
          </section>
          <br />
          <section>
            <label htmlFor="numberTwo">Select a number of Units</label>
            <input
              id="numberTwo"
              type="number"
              name="numberTwo"
              // placeholder={1}
              // defaultValue={1}
              value={numberOfUnits2}
              onChange={(e)=>setNumberOfUnits2(e.target.value)}
              min={1}
            />
          </section>
          <br />
          <section>
            <label htmlFor="techSelectTwo">Select a Tech</label>
            <select id="techSelectTwo" multiple onChange={(e)=>handleTechChange(e, setSelectedTechs2)}>
            {
              //console.log('111',Object.values(techs1))
              Object.values(techs2List).map(x=>
               <option title={x.description} value={x._id} key={x._id}>{x.name}</option> )
               }
            </select>
          </section>
        </section>
      </div>
      <br />
    </div>
    <div id="divFour">
      <button id="submit" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  </form>
</>

        
      </>
      
    )
}


export default Form
// export {}