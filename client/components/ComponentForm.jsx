import React, { useEffect, useState } from "react";
import ServerResponseModal from "./ServerResponseModal.jsx";
import civs from "../../civs.js";
import { Button, Form, Card, Dropdown } from "react-bootstrap";
// import '../src/index.css'
import { render } from "react-dom";
import IconSelect from "./iconSelect.jsx";

// import test from Functions.jsx

// import getUnits1 from "./Functions"

function ComponentForm() {
  const [civ1, setCiv1] = useState("ab");
  const [civList1, setCivList1] = useState(civs);
  const [civ2, setCiv2] = useState("ab");
  const [civList2, setCivList2] = useState(civs);

  const [selectedUnit1, setSelectedUnit1] = useState("Archer");
  const [units1, setUnits1] = useState([]);
  const [selectedUnit2, setSelectedUnit2] = useState("Archer");
  const [units2, setUnits2] = useState([]);

  const [age1, setAge1] = useState(2);
  const [age1List, setAge1List] = useState([]);
  const [age2, setAge2] = useState(2);
  const [age2List, setAge2List] = useState([]);

  const [numberOfUnits1, setNumberOfUnits1] = useState(1);
  const [numberOfUnits2, setNumberOfUnits2] = useState(1);

  const [selectedTechs1, setSelectedTechs1] = useState();
  const [techs1List, setTechs1List] = useState([]);
  const [selectedTechs2, setSelectedTechs2] = useState();
  const [techs2List, setTechs2List] = useState([]);

  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // const renderBackend = "https://reactaoe4app.onrender.com";
  const renderBackend = "http://localhost:8001";

  function seeShowModal() {
    console.log("see Show Modal", showModal);
  }

  async function getUnits(selectedCiv, setUnitsFunction) {
    //e.target.value,setUnits1
    try {
      console.log("getUnits ran");
      // console.log('civ1', civ1)
      const requestFromMainJS = await fetch(`${renderBackend}/api/getUnits`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          selectedCiv: selectedCiv,
        }),
      });

      let itemObject = await requestFromMainJS.json();
      setUnitsFunction(itemObject);
    } catch (err) {
      console.log(err);
    }
  }

  async function getAges(
    selectedUnit,
    selectedCiv,
    setAgeFunction,
    setAgeListFunction
  ) {
    //selection, civ, setAgeList
    // setSelectedUnit1()
    try {
      console.log("getAges ran");
      const requestFromMainJS = await fetch(
        `${renderBackend}/api/getSelectAge`,
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            selectText: selectedUnit,
            selectCiv: selectedCiv,
          }),
        }
      );
      const itemObject = await requestFromMainJS.json();
      let array = Object.values(itemObject);

      await setAgeListFunction(array);
      await setAgeFunction(array[0]);
    } catch (err) {
      console.log(err);
    }
  }

  async function getTechs(
    selectedAge,
    selectedCiv,
    selectedUnit,
    setTechsList
  ) {
    try {
      console.log("getTechs ran");
      const requestFromMainJS = await fetch(
        `${renderBackend}/api/getSelectTechs`,
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            selectCiv: selectedCiv,
            selectText: selectedUnit,
            selectAge: selectedAge,
          }),
        }
      );

      const techArray = await requestFromMainJS.json();
      // console.log('getTechs1',techArray)
      // console.log('2222',Object.values(techArray).map(x=>x.id))
      await setTechsList(techArray);
    } catch (err) {
      console.log(err);
    }
  }

  //handle events civ 1
  function handleCivChange1(e) {
    setCiv1(e.target.value);
  }

  function handleUnitChange1(e) {
    setSelectedUnit1(e.target.value);
  }

  function handleAgeChange1(e) {
    setAge1(e.target.value);
  }

  function handleTechChange1(e) {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    console.log("value", value);
    setSelectedTechs1(value);
  }

  //handle events civ2
  function handleCivChange2(e) {
    setCiv2(e.target.value);
  }

  function handleUnitChange2(e) {
    setSelectedUnit2(e.target.value);
  }

  function handleAgeChange2(e) {
    setAge2(e.target.value);
  }

  function handleTechChange2(e) {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    console.log("value", value);
    setSelectedTechs2(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(
      "nuke",
      selectedUnit1,
      civ1,
      age1,
      selectedTechs1,
      selectedUnit2,
      civ2,
      age2,
      selectedTechs2
    );
    try {
      const requestFromMainJS = await fetch(`${renderBackend}/api/calculate`, {
        //api
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          unit1: selectedUnit1,
          civ1: civ1,
          age1: age1,
          techs1: selectedTechs1,
          numberOfUnits1: numberOfUnits1,
          unit2: selectedUnit2,
          civ2: civ2,
          age2: age2,
          techs2: selectedTechs2,
          numberOfUnits2: numberOfUnits2,
        }),
      });
      console.log("requestFromMainJs", requestFromMainJS);
      const result = await requestFromMainJS.json();
      console.log("result", result);
      setResult(result);
      setShowModal(true);
      seeShowModal();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function intitialUseEffect() {
      console.log("intitial useEffect ran");
      await getUnits(civ1, setUnits1);
      await getAges(selectedUnit1, civ1, setAge1, setAge1List);
      await getTechs(age1, civ1, selectedUnit1, setTechs1List);
      await getUnits(civ2, setUnits2);
      await getAges(selectedUnit2, civ2, setAge2, setAge2List);
      await getTechs(age2, civ2, selectedUnit2, setTechs2List);
    }
    intitialUseEffect();
  }, []);

  //civ1 useffects
  useEffect(() => {
    async function getUnits1(selectedCiv, setUnitsFunction) {
      //e.target.value,setUnits1
      try {
        console.log("getUnits1 ran");
        // console.log('civ1', civ1)
        const requestFromMainJS = await fetch(`${renderBackend}/api/getUnits`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            selectedCiv: civ1,
          }),
        });
        let itemObject = await requestFromMainJS.json();
        console.log("itemObject", itemObject);
        console.log("item object", itemObject);
        setUnits1(itemObject);
        setSelectedUnit1(itemObject[0].baseId);
        console.log("selectedUnit1", selectedUnit1);
      } catch (err) {
        console.log(err);
      }
    }
    getUnits1();
  }, [civ1]);

  useEffect(() => {
    async function getAges1(
      selectedUnit,
      selectedCiv,
      setAgeFunction,
      setAgeListFunction
    ) {
      //selection, civ, setAgeList
      // setSelectedUnit1()
      try {
        console.log("getAges ran");
        const requestFromMainJS = await fetch(
          `${renderBackend}/api/getSelectAge`,
          {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              selectText: selectedUnit1,
              selectCiv: civ1,
            }),
          }
        );
        // console.log(requestFromMainJS)
        // console.log('selectedUnit1',selectedUnit1)
        // console.log('cvi1', civ1)
        const itemObject = await requestFromMainJS.json();
        // console.log('getAges1 itemObject', itemObject)
        let array = Object.values(itemObject);
        // console.log('array',array)
        let valuesOnly = array.map((x) => x.age);
        // console.log('getAges1 valuesOnly', valuesOnly)
        await setAge1List(array);
        // console.log('valuesonly',valuesOnly)
        await setAge1(array[0]);
      } catch (err) {
        console.log(err);
      }
    }
    getAges1();
  }, [selectedUnit1]);

  useEffect(() => {
    async function getTechs1(
      selectedAge,
      selectedCiv,
      selectedUnit,
      setTechsList
    ) {
      try {
        console.log("getTechs ran");
        const requestFromMainJS = await fetch(
          `${renderBackend}/api/getSelectTechs`,
          {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              selectCiv: civ1,
              selectText: selectedUnit1,
              selectAge: age1,
            }),
          }
        );

        const techArray = await requestFromMainJS.json();
        // console.log('getTechs1',techArray)
        // console.log('2222',Object.values(techArray).map(x=>x.id))
        setTechs1List(techArray);
      } catch (err) {
        console.log(err);
      }
    }
    getTechs1();
  }, [age1]);

  //civ2 useeffects
  useEffect(() => {
    async function getUnits2(selectedCiv, setUnitsFunction) {
      try {
        console.log("getUnits2 ran");
        const requestFromMainJS = await fetch(`${renderBackend}/api/getUnits`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            selectedCiv: civ2,
          }),
        });

        let itemObject = await requestFromMainJS.json();
        setUnits2(itemObject);
        setSelectedUnit2(itemObject[0].baseId);
        console.log("selectedUnit2", selectedUnit2);
      } catch (err) {
        console.log(err);
      }
    }
    getUnits2();
  }, [civ2]);

  useEffect(() => {
    async function getAges2(
      selectedUnit,
      selectedCiv,
      setAgeFunction,
      setAgeListFunction
    ) {
      //selection, civ, setAgeList
      // setSelectedUnit1()
      try {
        console.log("getAges2 ran");
        const requestFromMainJS = await fetch(
          `${renderBackend}/api/getSelectAge`,
          {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              selectText: selectedUnit2,
              selectCiv: civ2,
            }),
          }
        );
        // console.log(requestFromMainJS)
        // console.log('selectedUnit1',selectedUnit1)
        // console.log('cvi1', civ1)
        const itemObject = await requestFromMainJS.json();
        // console.log('getAges1 itemObject', itemObject)
        let array = Object.values(itemObject);
        // console.log('array',array)
        // let valuesOnly = array.map(x=>x.age)
        // console.log('getAges1 valuesOnly', valuesOnly)
        await setAge2List(array);
        // console.log('valuesonly',valuesOnly)
        await setAge2(array[0]);
      } catch (err) {
        console.log(err);
      }
    }
    getAges2();
  }, [selectedUnit2]);

  useEffect(() => {
    async function getTechs2(
      selectedAge,
      selectedCiv,
      selectedUnit,
      setTechsList
    ) {
      try {
        console.log("getTechs ran");
        const requestFromMainJS = await fetch(
          `${renderBackend}/api/getSelectTechs`,
          {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              selectCiv: civ2,
              selectText: selectedUnit2,
              selectAge: age2,
            }),
          }
        );

        const techArray = await requestFromMainJS.json();
        // console.log('getTechs1',techArray)
        // console.log('2222',Object.values(techArray).map(x=>x.id))
        setTechs2List(techArray);
      } catch (err) {
        console.log(err);
      }
    }
    getTechs2();
  }, [age2]);

  return (
    <div className="mainDiv">
      <Form>
        <h1>Unit Counter Calculator</h1>
        <div className="container">
          <div className="divOne">
            <h2>Team One</h2>

            <h3>Select a Civ</h3>
            <Form.Select value={civ1} onChange={handleCivChange1}>
              {civs.map((x, i) => (
                <option key={i} value={x.value}>
                  {x.name}
                </option>
              ))}
            </Form.Select>

            <h3>Select a Unit</h3>
            {/* <Form.Select
              id="selectUnitNumberOne"
              name="selectUnitNumberOne"
              title="optionForSelection1"
              className="selectNumberOne"
              value={selectedUnit1}
              // value={selectedUnit1}
              // onChange={(e)=>handleUnitChange(e, setSelectedUnit1, civ1, setAge1, setAge1List, age1, setTechs1List)}
              onChange={handleUnitChange1}
            >
              {units1.map((x, i) => (
                <option key={i} value={x.baseId}>
                  {x.baseId}
                </option>
              ))}
            </Form.Select> */}

            <IconSelect unitObjects={result} />

            <Dropdown
              id="selectUnitNumberOne"
              name="selectUnitNumberOne"
              title="optionForSelection1"
              className="selectNumberOne"
              value={selectedUnit1}
              // value={selectedUnit1}
              // onChange={(e)=>handleUnitChange(e, setSelectedUnit1, civ1, setAge1, setAge1List, age1, setTechs1List)}
              onChange={handleUnitChange1}
            >
              <Dropdown.Menu>
                {units1.map((x, i) => (
                  <Dropdown.Item key={i} value={x.baseId}>
                    {x.baseId}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

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
            >
              {age1List.map((x, i) => (
                <option key={i}>{x}</option>
              ))}
            </Form.Select>

            <h3 htmlFor="numberOne">Select a number of Units</h3>
            <Form.Control
              id="numberOne"
              type="number"
              name="numberOne"
              // placeholder={1}
              // defaultValue={1}
              value={numberOfUnits1}
              onChange={(e) => setNumberOfUnits1(e.target.value)}
              min={1}
            />
            <h3 htmlFor="techSelectOne">Select a Tech</h3>
            {/* <select id="techSelectOne" multiple onChange={(e)=>handleTechChange(e, setSelectedTechs1)}> */}
            <Form.Select
              id="techSelectOne"
              multiple
              onChange={handleTechChange1}
            >
              {
                //console.log('111',Object.values(techs1))
                Object.values(techs1List).map((x) => (
                  <option title={x.description} value={x._id} key={x._id || 1}>
                    {x.name}
                  </option>
                ))
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
              {civs.map((x, i) => (
                <option key={i} value={x.value}>
                  {x.name}
                </option>
              ))}
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
              {units2.map((x, i) => (
                <option key={i} value={x.baseId}>
                  {x.baseId}
                </option>
              ))}
            </Form.Select>
            <h3 htmlFor="selectAgeNumberTwo">Choose an Age</h3>
            <Form.Select
              id="selectAgeNumberTwo"
              name="selectAgeNumberTwo"
              title="agesForSelectionTwo"
              className="selectNumberTwo"
              // onChange={(e)=>handleAgeChange(e, setAge2, civ2, selectedUnit2, setTechs2List)}
              onChange={handleAgeChange2}
            >
              {age2List.map((x, i) => (
                <option key={i}>{x}</option>
              ))}
            </Form.Select>
            <h3 htmlFor="numberTwo">Select a number of Units</h3>
            <Form.Control
              id="numberTwo"
              type="number"
              name="numberTwo"
              // placeholder={1}
              // defaultValue={1}
              value={numberOfUnits2}
              onChange={(e) => setNumberOfUnits2(e.target.value)}
              min={1}
            />
            <h3 htmlFor="techSelectTwo">Select a Tech</h3>
            <Form.Select
              id="techSelectTwo"
              multiple
              onChange={handleTechChange2}
            >
              {
                //console.log('111',Object.values(techs1))
                Object.values(techs2List).map((x) => (
                  <option title={x.description} value={x._id} key={x._id}>
                    {x.name}
                  </option>
                ))
              }
            </Form.Select>
          </div>
        </div>
        <div id="divFour">
          <Button
            variant="outline-light"
            id="submit"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
        {showModal && (
          <ServerResponseModal
            response={result}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}

        <script type="module" src="http://localhost:5173/@vite/client"></script>
        <script type="module" src="http://localhost:5173/main.js"></script>
      </Form>
    </div>
  );
}
export default ComponentForm;
