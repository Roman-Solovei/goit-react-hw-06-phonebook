import React from 'react';
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/actions';
import s from "./contactform.module.css"


export default function ContactForm() {
  
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
 
  const handleChange = (event) => {  
    // console.log(event.target)
    const { name, value } = event.target;

    switch (name) {

      case "name": setName(value);
        break;
      
      case "number": setNumber(value);
        break;
      
      default:
        break;
    }
  };

  const reset = () => {     
    setName("");
    setNumber("");   
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    // const contactName = contactList.map(contact => contact.name)
 
    if(findContact){
      alert(`${event.target.name.value} is alredy in contacts`)
      return
    }    
    dispatch(addContact({ id: nanoid(), name, number }));      
    reset();
    };

    
  const findContact = contacts.find(contact => contact.name === name);

    return (
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input className={s.input}
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required        
          />
        </label>
        <label className={s.label}>
          Number
          <input className={s.input}
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required 
          />
        </label>
        <button type="submit" className={s.formButton}>Add contact</button>
      </form>
    );  
};



// export default class ContactForm extends Component {

//  state = {
//     name: "",
//     number: "",
//   };

//   handleChange = event => {    
//     this.setState({
//       [event.target.name]: event.target.value,
//     })
//   };

     
//   handleSubmit = event => {
//     event.preventDefault();

//     const contactName = this.props.contactList.map(contact => contact.name)
 
//     if(contactName.includes(event.target.name.value)){
//       alert(`${event.target.name.value} is alredy in contacts`)
//       return
//     }
    
//     this.props.addContact(this.state.name, this.state.number);      
//     this.reset();
//     };

//   reset = () => {
//       this.setState({
//         name: '',
//         number: '',
//       });
//   };
    
    
// render() {
//     return (
//       <form onSubmit={this.handleSubmit} className={s.form}>
//         <label className={s.label}>
//           Name
//           <input className={s.input}
//             value={this.state.name}
//             onChange={this.handleChange}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required        
//           />
//         </label>
//         <label className={s.label}>
//           Number
//           <input className={s.input}
//             value={this.state.number}
//             onChange={this.handleChange}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required 
//           />
//         </label>
//         <button type="submit" className={s.formButton}>Add contact</button>
//       </form>
//     );
//   }
// }

// ContactForm.propTypes={
//   addContact: PropTypes.func.isRequired,
//   contactList: PropTypes.array.isRequired,
// }