import React, { useEffect, useState } from "react"
import ServerResponseModal from "./ServerResponseModal.jsx"
import civs from "../../civs.js"
import {Button, Form} from "react-bootstrap"

// import test from Functions.jsx

// import getUnits1 from "./Functions"

function ComponentForm(){

  const localhost = 'http://localhost:8001'
    
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

    const [result, setResult] = useState(null)
    const [showModal, setShowModal] = useState(false);


    function seeShowModal(){
      console.log("see Show Modal",showModal)
    }


    async function getUnits(selectedCiv, setUnitsFunction){//e.target.value,setUnits1
    try{
      console.log('getUnits ran')
      // console.log('civ1', civ1)
        const requestFromMainJS = await fetch("/getUnits",{
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({
                'selectedCiv' : selectedCiv
            })
        })
        console.log('getUnits requestFrom MainJS',requestFromMainJS)

        let itemObject = await requestFromMainJS.json()
        // console.log('item object', itemObject)
        setUnitsFunction([...itemObject])
        // setSelectedUnit1(itemObject[0])
        
    }
    catch(err){
        console.log(err)
    }
}

async function getAges(selectedUnit, selectedCiv, setAgeFunction, setAgeListFunction){//selection, civ, setAgeList
    // setSelectedUnit1()
    try{ 
      console.log('getAges ran')
        const requestFromMainJS = await fetch("/getSelectAge",{
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
        // let valuesOnly = array.map(x=>x.age)
        // console.log('getAges1 valuesOnly', valuesOnly)
        await setAgeListFunction(array)
        // console.log('valuesonly',valuesOnly)
        await setAgeFunction(array[0])
        
    }catch(err){
        console.log(err)
    }
}

async function getTechs(selectedAge, selectedCiv, selectedUnit, setTechsList){
  try{     
          console.log('getTechs ran') 
          const requestFromMainJS = await fetch('/getSelectTechs', {
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


//     async function handleCivChange(e, setCivFunction, setUnitsFunction, selectedUnit, civ, setAgeFunction, setAgeListFunction, age, setTechsList) {
//       console.log("handleCivChange ran")
//       await setCivFunction(e.target.value)
//       await getUnits(e.target.value, setUnitsFunction)
//       await getAges(selectedUnit, civ, setAgeFunction, setAgeListFunction)
//       await getTechs(age, civ, selectedUnit, setTechsList)
//     }

//handle events civ 1
    function handleCivChange1(e){
      setCiv1(e.target.value)
    }

    function handleUnitChange1(e){
      setSelectedUnit1(e.target.value)
    }

    function handleAgeChange1(e){
      setAge1(e.target.value)
    }

    function handleTechChange1(e){
      const value = Array.from(e.target.selectedOptions, (option) => option.value)
      console.log('value', value)
      setSelectedTechs1(value)
    }
  
//handle events civ2
function handleCivChange2(e){
  setCiv2(e.target.value)
}

function handleUnitChange2(e){
  setSelectedUnit2(e.target.value)
}

function handleAgeChange2(e){
  setAge2(e.target.value)
}

function handleTechChange2(e){
  const value = Array.from(e.target.selectedOptions, (option) => option.value)
  console.log('value', value)
  setSelectedTechs2(value)
}
    
    // async function handleUnitChange(e, setUnitFunction, selectedCiv, setAgeFunction, setAgeListFunction, selectedAge, setTechsList){
    //   console.log("handleUnitChange ran")
    //   await setUnitFunction(e.target.value)
    //   await getAges(e.target.value, selectedCiv, setAgeFunction, setAgeListFunction)
    //   console.log('info before getTechs', civ1, selectedUnit1, age1)
    //   await getTechs(selectedAge, selectedCiv, e.target.value, setTechsList)
    //   // selectedUnit = document.querySelector("#selectUnitNumberOne").value
    //   // selectedAge = await document.querySelector('#selectAgeNumberOne').value
    //   // console.log('handleUnitChange', e.target.value) 
    //   // console.log(setUnitFunction)
    //   // console.log( selectedCiv) 
    //   // console.log(setAgesFunction)
    //   // console.log(selectedAge)
      
    //   // console.log( selectedUnit)
    //   // console.log( {setTechsList})
     
    // }

    
    //   //   useEffect(()=>{
    //   //       // getAges(selectedUnit1, civ1, setAge1, setAge1List)
    //   //       getTechs(age1, civ1, selectedUnit1, setTechs1List)
    //   //       console.log("useEffect1 ran")
          
    //   // },[age1])

      
    //   // useEffect(()=>{
    //   //      getTechs(age2, civ2, selectedUnit2, setTechs2List)

        
    //   // },[age2])
    
  

    // async function handleAgeChange(e, setAgeFunction, selectedCiv, selectedUnit, setTechsList){
    //   console.log("handleAgeChange ran")
    //   await setAgeFunction(e.target.value)
    //   await getTechs(e.target.value, selectedCiv, selectedUnit, setTechsList)
    // }

    // function handleTechChange(e, setSelectedTechsFunction){
    //   console.log("handleTechChange ran")
    //   const value = Array.from(e.target.selectedOptions, (option) => option.value)
    //   console.log('value', value)
    //   setSelectedTechsFunction(e.target.values)
    // }

    async function handleSubmit(e){
        e.preventDefault()
        console.log('nuke',selectedUnit1, civ1, age1, selectedTechs1, selectedUnit2, civ2, age2, selectedTechs2)
        try{
          const requestFromMainJS = await fetch("/calculate",{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
              'unit1': selectedUnit1,
              'civ1': civ1,
              'age1' : age1,
              'techs1' : selectedTechs1,
              'numberOfUnits1' : numberOfUnits1,
              'unit2': selectedUnit2,
              'civ2': civ2,
              'age2': age2,
              'techs2' : selectedTechs2,
              'numberOfUnits2' : numberOfUnits2
            })

          })
          console.log('requestFromMainJs', requestFromMainJS)
          const result = await requestFromMainJS.json()
          console.log('result', result)
          setResult(result)
          setShowModal(true)
          seeShowModal()
        }
        catch(err){
          console.log(err)
        }
    }

    useEffect(()=>{ 
      async function intitialUseEffect(){
      console.log('intitial useEffect ran')
      await getUnits(civ1, setUnits1)
      await getAges(selectedUnit1, civ1, setAge1, setAge1List)
      await getTechs(age1, civ1, selectedUnit1, setTechs1List)
      await getUnits(civ2, setUnits2)
      await getAges(selectedUnit2, civ2, setAge2, setAge2List)
      await getTechs(age2, civ2, selectedUnit2, setTechs2List)
     }
      intitialUseEffect() 
     }, [])

    //civ1 useffects
useEffect(()=>{
  async function getUnits1(selectedCiv, setUnitsFunction){//e.target.value,setUnits1
    try{
      console.log('getUnits1 ran')
      // console.log('civ1', civ1)
        const requestFromMainJS = await fetch("/getUnits",{
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({
                'selectedCiv' : civ1
            })
        })
        console.log('civ1', civ1)

        let itemObject = await requestFromMainJS.json()
        console.log('itemObject', itemObject)
        // console.log('item object', itemObject)
        setUnits1([...itemObject])
        console.log('units',units1)
        setSelectedUnit1(itemObject[0])
        console.log('selectedUnit1', selectedUnit1)
        
    }
    catch(err){
        console.log(err)
    }
}
getUnits1()
},[civ1])

useEffect(()=>{
  async function getAges1(selectedUnit, selectedCiv, setAgeFunction, setAgeListFunction){//selection, civ, setAgeList
    // setSelectedUnit1()
    try{ 
      console.log('getAges ran')
        const requestFromMainJS = await fetch("/getSelectAge",{
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({
                'selectText': selectedUnit1,
                'selectCiv': civ1
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
        await setAge1List(array)
        // console.log('valuesonly',valuesOnly)
        await setAge1(array[0])
        
    }catch(err){
        console.log(err)
    }
}
getAges1()
},[selectedUnit1])

useEffect(()=>{
  async function getTechs1(selectedAge, selectedCiv, selectedUnit, setTechsList){
    try{     
            console.log('getTechs ran') 
            const requestFromMainJS = await fetch('/getSelectTechs', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'selectCiv': civ1,
                'selectText': selectedUnit1,
                'selectAge': age1
            })
        })
        
        const techArray = await requestFromMainJS.json()
        // console.log('getTechs1',techArray)
        // console.log('2222',Object.values(techArray).map(x=>x.id))
        setTechs1List(techArray)
        }
       
    catch(err){
        console.log(err)
    }
  }
getTechs1()  
},[age1])

//civ2 useeffects
useEffect(()=>{
  async function getUnits2(selectedCiv, setUnitsFunction){//e.target.value,setUnits1
    try{
      console.log('getUnits2 ran')
      // console.log('civ1', civ1)
        const requestFromMainJS = await fetch("/getUnits",{
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({
                'selectedCiv' : civ2
            })
        })
        console.log('getUnits requestFrom MainJS',requestFromMainJS)

        let itemObject = await requestFromMainJS.json()
        // console.log('item object', itemObject)
        setUnits2([...itemObject])
        setSelectedUnit2(itemObject[0])
        
    }
    catch(err){
        console.log(err)
    }
}
getUnits2()
},[civ2])

useEffect(()=>{
  async function getAges2(selectedUnit, selectedCiv, setAgeFunction, setAgeListFunction){//selection, civ, setAgeList
    // setSelectedUnit1()
    try{ 
      console.log('getAges2 ran')
        const requestFromMainJS = await fetch("/getSelectAge",{
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({
                'selectText': selectedUnit2,
                'selectCiv': civ2
            })
        })
        // console.log(requestFromMainJS)
        // console.log('selectedUnit1',selectedUnit1)
        // console.log('cvi1', civ1)
        const itemObject = await requestFromMainJS.json()
        // console.log('getAges1 itemObject', itemObject)
        let array = Object.values(itemObject)
        // console.log('array',array)
        // let valuesOnly = array.map(x=>x.age)
        // console.log('getAges1 valuesOnly', valuesOnly)
        await setAge2List(array)
        // console.log('valuesonly',valuesOnly)
        await setAge2(array[0])
        
    }catch(err){
        console.log(err)
    }
}
getAges2()
},[selectedUnit2])

useEffect(()=>{
  async function getTechs2(selectedAge, selectedCiv, selectedUnit, setTechsList){
    try{     
            console.log('getTechs ran') 
            const requestFromMainJS = await fetch('/getSelectTechs', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'selectCiv': civ2,
                'selectText': selectedUnit2,
                'selectAge': age2
            })
        })
        
        const techArray = await requestFromMainJS.json()
        // console.log('getTechs1',techArray)
        // console.log('2222',Object.values(techArray).map(x=>x.id))
        setTechs2List(techArray)
        }
       
    catch(err){
        console.log(err)
    }
  }
getTechs2()  
},[age2])

  // useEffect(()=>{ 
  //    async function intitialUseEffect(){
  //    console.log('intitial useEffect ran')
  //    await getUnits(civ1, setUnits1)
  //    await getAges(selectedUnit1, civ1, setAge1, setAge1List)
  //    await getTechs(age1, civ1, selectedUnit1, setTechs1List)
  //    await getUnits(civ2, setUnits2)
  //    await getAges(selectedUnit2, civ2, setAge2, setAge2List)
  //    await getTechs(age2, civ2, selectedUnit2, setTechs2List)
  //   }
  //    intitialUseEffect() 
  //   }, [])

   
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
      <div className="mainDiv">
        <Form>
        <h1>Unit Counter Calculator</h1>
        <div className="container">
          <div className="divOne">  
            <h2>Team One</h2>
              
                <h3>Select a Civ</h3>
                <Form.Select
                  value={civ1}
                  onChange={handleCivChange1}
                >
                  {civs.map((x,i)=>
                  <option key={i} value={x.value}>{x.name}</option>
                  )
                  }
                </Form.Select>
          
      
                <h3>Select a Unit</h3>
                <Form.Select
                  id="selectUnitNumberOne"
                  name="selectUnitNumberOne"
                  title="optionForSelection1"
                  className="selectNumberOne"
                  value={selectedUnit1}
                  // value={selectedUnit1}
              // onChange={(e)=>handleUnitChange(e, setSelectedUnit1, civ1, setAge1, setAge1List, age1, setTechs1List)}
              onChange={handleUnitChange1}
            >
               {units1.map((x,i)=><option key={i}>
            {x}
                </option>)
        }
            </Form.Select>
          
          {/* to select civ */}
          
            <h3 htmlFor="selectAgeNumberOne">Choose an Age</h3>
            <Form.Select
              id="selectAgeNumberOne"
              name="selectAgeNumberOne"
              title="agesForSelection1"
              className="selectNumberOne"
              value={age1}
              // onChange={(e)=>handleAgeChange(e, setAge1, civ1, selectedUnit1, setTechs1List)}
              onChange={handleAgeChange1}
            >{age1List.map((x,i)=>
              <option key={i}>{x}</option>
            )}</Form.Select>
          
    
            <h3 htmlFor="numberOne">Select a number of Units</h3>
            <Form.Control
              id="numberOne"
              type="number"
              name="numberOne"
              // placeholder={1}
              // defaultValue={1}
              value={numberOfUnits1}
              onChange={(e)=>setNumberOfUnits1(e.target.value)}
              min={1}
            />
            <h3 htmlFor="techSelectOne">Select a Tech</h3>
            {/* <select id="techSelectOne" multiple onChange={(e)=>handleTechChange(e, setSelectedTechs1)}> */}
            <Form.Select id="techSelectOne" multiple onChange={handleTechChange1}>
            {
              //console.log('111',Object.values(techs1))
              Object.values(techs1List).map(x=>
               <option title={x.description} value={x._id} key={x._id || 1}>{x.name}</option> )
               }
            </Form.Select>
          </div>
      <div className="divOne">
        <h2 htmlFor="sectionTwo">Team Two</h2>
          
            <h3 htmlFor="selectCivNumberTwo">Select a Civ</h3>
            <Form.Select
              id="selectCivNumberTwo"
              name="selectCivNumberTwo"
              value={civ2}
              onChange={handleCivChange2}
            >
              {civs.map((x,i)=>
                <option key={i} value={x.value}>{x.name}</option>)}
            </Form.Select>
          

            <h3 htmlFor="selectUnitNumberTwo">Select a Unit</h3>
            <Form.Select
              id="selectUnitNumberTwo"
              name="selectUnitNumberTwo"
              title="optionForSelection2"
              className="selectNumberTwo"
              value={selectedUnit2}
              onChange={handleUnitChange2}
            >
               {units2.map((x,i)=><option key={i} value={x}>
            {x}
                </option>)
        }
            </Form.Select>
            <h3 htmlFor="selectAgeNumberTwo">Choose an Age</h3>
            <Form.Select
              id="selectAgeNumberTwo"
              name="selectAgeNumberTwo"
              title="agesForSelectionTwo"
              className="selectNumberTwo"
              // onChange={(e)=>handleAgeChange(e, setAge2, civ2, selectedUnit2, setTechs2List)}
              onChange={handleAgeChange2}
            >{age2List.map((x,i)=>
              <option key={i}>{x}</option>
            )}</Form.Select>
            <h3 htmlFor="numberTwo">Select a number of Units</h3>
            <Form.Control
              id="numberTwo"
              type="number"
              name="numberTwo"
              // placeholder={1}
              // defaultValue={1}
              value={numberOfUnits2}
              onChange={(e)=>setNumberOfUnits2(e.target.value)}
              min={1}
            />
            <h3 htmlFor="techSelectTwo">Select a Tech</h3>
            <Form.Select id="techSelectTwo" multiple onChange={handleTechChange2}>
            {
              //console.log('111',Object.values(techs1))
              Object.values(techs2List).map(x=>
               <option title={x.description} value={x._id} key={x._id}>{x.name}</option> )
               }
            </Form.Select>
        
      </div>
    </div>
    <div id="divFour">
      <Button variant="outline-light" id="submit" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  {showModal && <ServerResponseModal response={result} showModal={showModal} setShowModal={setShowModal}  />}

  <script type="module" src="http://localhost:5173/@vite/client"></script>
<script type="module" src="http://localhost:5173/main.js"></script>
</Form>
</div>
)
              }
export default ComponentForm
              