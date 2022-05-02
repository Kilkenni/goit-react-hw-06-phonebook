import { createAction, createReducer } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addContact = createAction("contacts/addContact", /*function prepare(contact) {
  return contact;
}*/ ); //payload: new contact

export const deleteContact = createAction("contacts/deleteContact"); //payload: ID


//made via "Map" notation
export const contactReducer = createReducer([], {
  [addContact]: (contacts, action) => {
    const { name: newName } = action.payload; //destruct new contact from payload
    const normalizedNewName = newName.toLowerCase(); //check if the person already exists in contacts
    if (contacts.items.some( (contact) => {
      return contact.name.toLowerCase() === normalizedNewName;
    }) ) {
      alert(`${newName} is already in contacts.`);
      return contacts;
    }

    const newContact = ({ id: nanoid(), ...action.payload });

    contacts.items = [...contacts.items, newContact]
    //return [...state.contacts.items, action.payload];
  }, 

  [deleteContact.type]: (contacts, action) => {
    contacts.items = contacts.items.filter((contact) => {
      return contact.id !== action.payload;
    });
    // return state.filter((contact) => {
    //   return contact.id !== action.payload;
    // });
  }, //action.type not really necessary as toString() for action created via createAction already returns type
});