import React, { useState } from "react"
//import getUnits1 from "./Functions"


function Form(){

    const [civ1, setCiv1] = useState('Abbasid')
    const [units1, setUnits1] = useState([])
    const [age1, setAge1] = useState('')
    const [techs1, setTechs1] = useState('')

    async function getUnits1(selection){
        try{
            const requestFromMainJS = await fetch("http://localhost:8001/getUnits",{
                method: 'POST',
                headers: {'Content-type' : 'application/json'},
                body: JSON.stringify({
                    'selectedCiv' : document.querySelector('#selectCivNumberOne').selectedOptions[0].getAttribute('value')
                })
            })
            console.log(requestFromMainJS)
            let itemObject = 'tot'
            itemObject = await requestFromMainJS.json()
            console.log('item object', itemObject)
            console.log('hello')
            setUnits1(itemObject)
            
        }
        catch(err){
            console.log(err)
        }
    }

    function handleCivChange(){
        setUnits1(itemObject)
    }

    function handleSubmit(e){
        e.preventDefault()
        const submitObject = {
            civ1, units1, age1, techs1
        }
        console.log(submitObject)
    }

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
              onChange={(e)=>{setCiv1(e.target.value);getUnits1()}}
            >
              <option value="ab">Abbasid</option>
              <option value="ch">Chinese</option>
              <option value="hr">Holy Roman Empire</option>
              <option value="en">English</option>
              <option value="de">Delhi Sultanate</option>
              <option value="fr">French</option>
              <option value="mo">Mongols</option>
              <option value="ru">Rus</option>
              <option value="ot">Ottomans</option>
              <option value="ma">Malians</option>
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
              onchange="agesThenTechs1()"
            >
              {/* {units1.map(x=>)} */}
              <option id="selectedUnit1" value={setUnits1}>
                
              </option>
              {/* <option id="selectedUnit1" value="<%= info[i]._id  %>"> <%= info[i].name %> (Age <%= info[i].age %>) Civs: <%= info[i].civs %></option> */}
              &lt;% {"}"} %&gt;
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
              onchange="getTechs1()"
            ></select>
          </section>
          <br />
          <section>
            <label htmlFor="numberOne">Select a number of Units</label>
            <input
              id="numberOne"
              type="number"
              name="numberOne"
              placeholder={1}
              defaultValue={1}
              min={1}
            />
          </section>
          <br />
          <section>
            <label htmlFor="techSelectOne">Select a Tech</label>
            <select id="techSelectOne" multiple=""></select>
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
              onchange="getUnits2(this), getAges2(this), getTechs2()"
            >
              <option value="ab">Abbasid</option>
              <option value="ch">Chinese</option>
              <option value="hr">Holy Roman Empire</option>
              <option value="en">English</option>
              <option value="de">Delhi Sultanate</option>
              <option value="fr">French</option>
              <option value="mo">Mongols</option>
              <option value="ru">Rus</option>
              {/* <option value="ot">Ottomans</option>
                      <option value="ma">Malians</option> */}
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
              onchange="agesThenTechs2()"
            >
              &lt;% for(let i=0; i &lt; info.length; i++) {"{"}%&gt;
              <option id="selectedUnit1" value="<%= info[i]._id  %>">
                {" "}
                &lt;%= info[i] %&gt;
              </option>
              &lt;% {"}"} %&gt;
            </select>
          </section>
          {/* to select civ */}
          <br />
          <section>
            <label htmlFor="selectAgeNumberTwo">Choose an Age</label>
            <select
              id="selectAgeNumberTwo"
              name="selectAgeNumberTwo"
              title="agesForSelection2"
              className="selectNumberOne"
              onchange="getTechs2(this)"
            ></select>
          </section>
          <br />
          <section>
            <label htmlFor="numberTwo">Select a number of Units</label>
            <input
              id="numberTwo"
              type="number"
              name="numberTwo"
              placeholder={1}
              defaultValue={1}
              min={1}
            />
          </section>
          <br />
          <section>
            <label htmlFor="techSelectTwo">Select a Tech</label>
            <select
              id="techSelectTwo"
              name="techSelectTwo"
              multiple=""
            ></select>
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
export {}