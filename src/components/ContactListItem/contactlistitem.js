import React from 'react';
import { useDispatch } from 'react-redux';
import { delContact } from '../../redux/actions'
import PropTypes from "prop-types";
import s from './contactlistitem.module.css';



export default function ContactListItem({ name, number, id }) {
    const dispatch = useDispatch();

    return (<li className={s.listItem} key={id}>
        {name}:   {number} 
        <button className={s.listButton} onClick={()=> dispatch(delContact(id))}>
            Delete
        </button>
    </li>)
}

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,    
}
