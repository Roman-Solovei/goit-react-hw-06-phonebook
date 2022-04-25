import React from 'react';
import { useSelector } from 'react-redux';
import ContactListItem from "../ContactListItem";
import s from "./contactlist.module.css";


export default function ContactList() {
    const filter = useSelector(state => state.contacts.filter);

    const filterContacts = useSelector(state => {
        const initialState = state.contacts.items;
        const toLowerCase = filter.toLocaleLowerCase();;
        const filterContact = initialState.filter(contact =>
            contact.name.toLocaleLowerCase().includes(toLowerCase));
        return filterContact;
    })
    
     return <ul className={s.list}>
        {filterContacts.map(contact =>(         
         <ContactListItem 
         key = {contact.id}
         id={contact.id}
         name= {contact.name}
         number={contact.number}      
         /> 
      ))}
    </ul>
};