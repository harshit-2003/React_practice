// import React, { Component } from 'react';  
// import ReactTable from "react-table";  
// import {useTable} from 'react-table';
// import "react-table/react-table.css";  
  
// class Table extends Component {  
//   render() {  
//      const data = [{  
//         name: 'Ayaan',  
//         age: 26  
//         },{  
//          name: 'Ahana',  
//          age: 22  
//          },{  
//          name: 'Peter',  
//          age: 40      
//          },{  
//          name: 'Virat',  
//          age: 30  
//          },{  
//          name: 'Rohit',  
//          age: 32  
//          },{  
//          name: 'Dhoni',  
//          age: 37  
//          }]  
//      const columns = [{  
//        Header: 'Name',  
//        accessor: 'name'  
//        },{  
//        Header: 'Age',  
//        accessor: 'age'  
//        }]  
//     return (  
//           <div>  
//               <ReactTable  
//                   data={data}  
//                   columns={columns}  
//                   defaultPageSize = {2}  
//                   pageSizeOptions = {[2,4, 6]}  
//               />  
//           </div>        
//     )  
//   }  



import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
//import ReadOnlyRow from "./components/ReadOnlyRow";
//import EditableRow from "./components/EditableRow";

  const App = () => {
//   const [contacts, setContacts] = useState(data);
//   const [addFormData, setAddFormData] = useState({
//     fullName: "",
//     address: "",
//     phoneNumber: "",
//     email: "",
//   });

//   const [editFormData, setEditFormData] = useState({
//     fullName: "",
//     address: "",
//     phoneNumber: "",
//     email: "",
//   });

//   const [editContactId, setEditContactId] = useState(null);

//   const handleAddFormChange = (event) => {
//     event.preventDefault();

//     const fieldName = event.target.getAttribute("name");
//     const fieldValue = event.target.value;

//     const newFormData = { ...addFormData };
//     newFormData[fieldName] = fieldValue;

//     setAddFormData(newFormData);
//   };

//   const handleEditFormChange = (event) => {
//     event.preventDefault();

//     const fieldName = event.target.getAttribute("name");
//     const fieldValue = event.target.value;

//     const newFormData = { ...editFormData };
//     newFormData[fieldName] = fieldValue;

//     setEditFormData(newFormData);
//   };

//   const handleAddFormSubmit = (event) => {
//     event.preventDefault();

//     const newContact = {
//       id: nanoid(),
//       fullName: addFormData.fullName,
//       address: addFormData.address,
//       phoneNumber: addFormData.phoneNumber,
//       email: addFormData.email,
//     };

//     const newContacts = [...contacts, newContact];
//     setContacts(newContacts);
//   };

//   const handleEditFormSubmit = (event) => {
//     event.preventDefault();

//     const editedContact = {
//       id: editContactId,
//       fullName: editFormData.fullName,
//       address: editFormData.address,
//       phoneNumber: editFormData.phoneNumber,
//       email: editFormData.email,
//     };

//     const newContacts = [...contacts];

//     const index = contacts.findIndex((contact) => contact.id === editContactId);

//     newContacts[index] = editedContact;

//     setContacts(newContacts);
//     setEditContactId(null);
//   };

//   const handleEditClick = (event, contact) => {
//     event.preventDefault();
//     setEditContactId(contact.id);

//     const formValues = {
//       fullName: contact.fullName,
//       address: contact.address,
//       phoneNumber: contact.phoneNumber,
//       email: contact.email,
//     };

//     setEditFormData(formValues);
//   };

//   const handleCancelClick = () => {
//     setEditContactId(null);
//   };

//   const handleDeleteClick = (contactId) => {
//     const newContacts = [...contacts];

//     const index = contacts.findIndex((contact) => contact.id === contactId);

//     newContacts.splice(index, 1);

//     setContacts(newContacts);
//   };

  return (
    <div className="app-container">
      {/* <form onSubmit={handleEditFormSubmit}> */}
      <form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>

            <tr>
                <td> 1</td>
                <td> SITE</td>
                <td> 2020</td>
                <td> Fall</td>
                <td> Btech</td>
            </tr>
          </thead>
           <tbody>
            {/* {contacts.map((contact) => (
              <Fragment>
              </Fragment>
            ))} */}
          </tbody> 
                {/* {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>  */}
        </table>
        </form>
      {/* </form> */}

      {/* <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form> */}
    </div>
  );
};

export default App;