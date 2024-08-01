import React, { useState } from 'react'
// import "../src/winningLosingUnitResponse.css"
import "../src/winningLosingUnitReponse.css" 
// C:\Users\tdjoh\OneDrive\Desktop\AOE4ReactApp\AOE4 Unit Counter Calculator\client\src\winningLosingUnitReponse.css
import { Modal, Table, Button } from 'react-bootstrap'



function winningLosingUnitResponse(props) {

    const [showSection, setShowSection] = useState(false)

function handleShowSection(){
    setShowSection(!showSection)
}

  return (
    <div>
        <Modal.Dialog>
        <Modal.Header className="justify-content-center" ><Modal.Title>{props.response.winningUnit.team} Age {props.response.winningUnit.age} {props.response.winningUnit.fullNameOfCiv} {props.response.winningUnit.name} Won!</Modal.Title></Modal.Header>
        {!showSection && <Button size="lg" variant="outline-light" onClick={handleShowSection}>Show Details</Button>}
        {showSection && <Button variant="outline-light" onClick={handleShowSection}>Hide Details</Button>}
        <Modal.Body>
            {showSection && <section id="sectionToHide1" className="hiddenElement">
            <Table striped bordered hover variant='dark'>
                <tbody>
            <tr>
                <td></td>
                <td>Winning Unit: {props.response.winningTeam.team}</td>
                <td>Losing Unit: {props.response.losingTeam.team}</td>
            </tr>
            <tr>
                <td>Age/Civ/Unit Name</td>
                <td>Age {props.response.winningUnit.age} {props.response.winningUnit.fullNameOfCiv} {props.response.winningUnit.name}</td>
                <td>Age {props.response.losingUnit.age} {props.response.losingUnit.fullNameOfCiv} {props.response.losingUnit.name}</td>
            </tr>
            <tr>
                <td>Hitpoints/Total Team Hitpoints</td>
                <td>{props.response.winningUnit.hitpoints}/{props.response.winningTeam.hitpoints}</td>
                <td>{props.response.losingUnit.hitpoints}/{props.response.losingTeam.hitpoints}</td>
            </tr>
            <tr>
                <td>Number of Units</td>
                <td>{props.response.winningTeam.numberOfUnits}</td>
                <td>{props.response.losingTeam.numberOfUnits}</td>
            </tr>
            <tr>
                <td>Attack Damage/Type/Speed/Modifiers</td>
                <td>{props.response.winningUnit.weapons[0].damage}/{props.response.winningUnit.weapons[0].type}/{props.response.winningUnit.weapons[0].speed}/{props.response.winningTeam.weaponModifier}</td>
                <td>{props.response.losingUnit.weapons[0].damage}/{props.response.losingUnit.weapons[0].type}/{props.response.losingUnit.weapons[0].speed}/{props.response.losingTeam.weaponModifier}</td>
            </tr>
            <tr>
                <td>Armor/Type</td>
                <td>{props.response.winningTeam.relevantArmor}/{props.response.winningUnit.relevantArmorType}</td>
                <td>{props.response.losingTeam.relevantArmor}/{props.response.losingUnit.relevantArmorType}</td>
            </tr>
            <tr>
                <td title = "((unit's attack damage + any weapon modifiers - opponent's relevant armor) * number of units) / divided by a unit's attack speed">True Damage</td>
                <td>{props.response.winningTeam.trueDamage}</td>
                <td>{props.response.losingTeam.trueDamage}</td>
            </tr>
            <tr>
                <td title = "Opponent's total team hitpoints / true damage">Time To Kill The Other Team</td>
                <td>{props.response.winningTeam.timeToKillOtherTeam} seconds</td>
                <td>{props.response.losingTeam.timeToKillOtherTeam} seconds</td>
            </tr>
            </tbody>
        </Table>
            </section>}
        </Modal.Body>     
        </Modal.Dialog>

    </div>
  )
}

export default winningLosingUnitResponse