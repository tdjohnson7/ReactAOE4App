 //import setUnits1 from "./Form"
//works
// async function getUnits1(selection){
//     try{
//         const requestFromMainJS = await fetch("http://localhost:8001/getUnits",{
//             method: 'POST',
//             headers: {'Content-type' : 'application/json'},
//             body: JSON.stringify({
//                 'selectedCiv' : document.querySelector('#selectCivNumberOne').selectedOptions[0].getAttribute('value')
//             })
//         })
//         console.log(requestFromMainJS)
//         let itemObject = await requestFromMainJS.json()
//         console.log('item object', itemObject)
//         console.log('hello')
//         setUnits1([...itemObject])
        
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// export default async function getUnits1(selection){
//     try{
//         const requestFromMainJS = await fetch("http://localhost:8001/getUnits",{
//             method: 'POST',
//             headers: {'Content-type' : 'application/json'},
//             body: JSON.stringify({
//                 'selectedCiv' : document.querySelector('#selectCivNumberOne').selectedOptions[0].getAttribute('value')
//             })
//         })
//         console.log(requestFromMainJS)
//         let itemObject = 'tot'
//         itemObject = await requestFromMainJS.json()
//         console.log('itemObject', itemObject)
//         console.log('hello from getUnits1')
//         setUnits1(itemObject)
        
//     }
//     catch(err){
//         console.log(err)
//     }
// }

export default getUnits1
// //export {itemObject}