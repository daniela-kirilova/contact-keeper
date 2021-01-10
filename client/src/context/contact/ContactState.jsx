import React, { useReducer } from "react";
import uuid from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Sara",
        email: "vmvm@cc.com",
        phone: "252",
        type: "personal",
      },
      {
        id: 2,
        name: "Sara1",
        email: "vmvm@cc.com",
        phone: "25222",
        type: "personal",
      },
      {
        id: 3,
        name: "Sara2",
        email: "vmvm@cc.com",
        phone: "25222",
        type: "personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);
  return (
    <ContactContext.Provider vlaue={{ contacts: state.conacts }}>       
      {props.children} 
    </ContactContext.Provider>
  );
};
export default ContactState;
