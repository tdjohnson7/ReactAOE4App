// import React from 'react'

// export default function ServerResponseModal(props) {
//   // console.log("response", response)
//   return ( 
//       props.response ? 
//         <div>
//            {/* <h1 className="text-3xl font-bold  underline">ServerResponseModal</h1> */}
//           <h2>{props.response.winningUnit.name}</h2>
//         </div>
//         :
//         <div>
//           <h2>no response</h2>
//         </div>
//        )
//     // ) : (
//     //   <div>
//     //     <h1>Test</h1>
//     //   </div>
//     // ))
//     }

import React, { useState, useEffect } from "react";
import winningLosingUnitResponse from "./winningLosingUnitResponse";
import { Modal, Button } from "react-bootstrap";

const ServerResponseModal = (props) => {
  // Create a state variable to control the modal visibility
  let response = props.response
  console.log('response from modal', props.response)
  console.log('props',props)

  // const [showModal, setShowModal] = useState(true)

  // const [showModal, setShowModal] = useState(false);

  // Toggle the modal visibility when the response prop changes
  // useEffect(() => {
  //   setShowModal(true);
  // }, [response]);

  // Render the modal using the <dialog> element
  // const renderModal = (props) => {
    
    return (  
      <div>        
        {props.showModal && <Modal.Dialog >
            {props.response.winningUnit ? winningLosingUnitResponse(response= {response}) : <p>{props.response.tieStatement}</p>}  

            <Button size="sm" type="button" variant="outline-light" onClick={() => {props.setShowModal(false), console.log('showModal', props.showModal)}}>Close</Button>
        </Modal.Dialog>}
        </div>
      

    ); 
  // };
}

  // Return the modal element
  // return <div>{renderModal()}</div>;


export default ServerResponseModal;