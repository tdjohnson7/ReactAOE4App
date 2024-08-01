// import { useEffect } from "react"

// export const team1UseEffects = () => {

//     const [civ1, setCiv1] = useState('ab')
//   const [civList1, setCivList1] = useState(civs)
  
//     const [selectedUnit1, setSelectedUnit1] = useState('Archer')
//     const [units1, setUnits1] = useState([])

//     const [age1, setAge1] = useState(2)
//     const [age1List, setAge1List] = useState([])

//     const [numberOfUnits1, setNumberOfUnits1] = useState(1)

//     const [selectedTechs1, setSelectedTechs1] = useState()
//     const [techs1List, setTechs1List] = useState([])
    
//     useEffect(()=>{
//     async function getUnits1(selectedCiv, setUnitsFunction){//e.target.value,setUnits1
//       try{
//         console.log('getUnits1 ran')
//         // console.log('civ1', civ1)
//           const requestFromMainJS = await fetch("http://localhost:8001/getUnits",{
//               method: 'POST',
//               headers: {'Content-type' : 'application/json'},
//               body: JSON.stringify({
//                   'selectedCiv' : civ1
//               })
//           })
//           console.log('getUnits requestFrom MainJS',requestFromMainJS)
  
//           let itemObject = await requestFromMainJS.json()
//           // console.log('item object', itemObject)
//           setUnits1([...itemObject])
//           setSelectedUnit1(itemObject[0])
          
//       }
//       catch(err){
//           console.log(err)
//       }
//   }
//   getUnits1()
//   },[civ1])
  
//   useEffect(()=>{
//     async function getAges1(selectedUnit, selectedCiv, setAgeFunction, setAgeListFunction){//selection, civ, setAgeList
//       // setSelectedUnit1()
//       try{ 
//         console.log('getAges ran')
//           const requestFromMainJS = await fetch("http://localhost:8001/getSelectAge",{
//               method: 'POST',
//               headers: {'Content-type' : 'application/json'},
//               body: JSON.stringify({
//                   'selectText': selectedUnit1,
//                   'selectCiv': civ1
//               })
//           })
//           // console.log(requestFromMainJS)
//           // console.log('selectedUnit1',selectedUnit1)
//           // console.log('cvi1', civ1)
//           const itemObject = await requestFromMainJS.json()
//           // console.log('getAges1 itemObject', itemObject)
//           let array = Object.values(itemObject)
//           // console.log('array',array)
//           let valuesOnly = array.map(x=>x.age)
//           // console.log('getAges1 valuesOnly', valuesOnly)
//           await setAge1List(valuesOnly)
//           // console.log('valuesonly',valuesOnly)
//           await setAge1(valuesOnly[0])
          
//       }catch(err){
//           console.log(err)
//       }
//   }
//   getAges1()
//   },[selectedUnit1])
  
//   useEffect(()=>{
//     async function getTechs1(selectedAge, selectedCiv, selectedUnit, setTechsList){
//       try{     
//               console.log('getTechs ran') 
//               const requestFromMainJS = await fetch('http://localhost:8001/getSelectTechs', {
//               method: 'POST',
//               headers: {'Content-type': 'application/json'},
//               body: JSON.stringify({
//                   'selectCiv': civ1,
//                   'selectText': selectedUnit1,
//                   'selectAge': age1
//               })
//           })
          
//           const techArray = await requestFromMainJS.json()
//           // console.log('getTechs1',techArray)
//           // console.log('2222',Object.values(techArray).map(x=>x.id))
//           await setTechs1List(techArray)
//           }
         
//       catch(err){
//           console.log(err)
//       }
//     }
//   getTechs1()  
//   },[age1])

//   useEffect(()=>{
//     async function test(){
//       console.log('intitial useEffect ran')
//         await getUnits(civ1, setUnits1)
//         await getAges(selectedUnit1, civ1, setAge1, setAge1List)
//         await getTechs(age1, civ1, selectedUnit1, setTechs1List)
//       }
//       test()
//     }, [])


  
//   export default team1UseEffects