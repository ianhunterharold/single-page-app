import React, { useEffect, useState } from 'react';
import {  TextField, Button, Box } from '@material-ui/core';
import ContactList from './ContactList';
import PhoneNumber from 'awesome-phonenumber'; 
import { Alert } from '@material-ui/lab';

const boxFormStyle = {
    backgroundColor: 'white',    
    padding: '15px',
}
const boxTitleStyle = {
    backgroundColor: 'gray',    
    marginTop: '30px',
    padding: '15px',
}
const formInputStyle = {
    margin: 10,
    padding: 10,
}

const formButton = {
    margin:'10px',
    marginTop:'30px',
}

const FormBox = () => {
    const [contactInfo, setContactInfo] = useState([{ phoneNumber: '', name:'' }]);
    const [arrayOfContacts, setArrayOfContacts] = useState([])
    const [err,SetErr]=useState(false);
    const [uniqueNumErr, setUniqueNumErr]=useState(false);

    const isValid = (contactInfo) => {
        const pn = new PhoneNumber(contactInfo.phoneNumber, 'US');
        return pn.isValid();
    }
        
    const handleChange = (event)=> {
        setContactInfo({...contactInfo, [event.target.name]: event.target.value})
        SetErr(false);
        setUniqueNumErr(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        isValid(contactInfo);

        if (!isValid(contactInfo)){
            return SetErr(true); 
        }
        
        const notUnique = arrayOfContacts.find((contact) => contact.phoneNumber === contactInfo.phoneNumber); 

        if(notUnique){
            return setUniqueNumErr(true);
        };

        setArrayOfContacts([...arrayOfContacts, contactInfo]);
        setContactInfo({phoneNumber:'',name:''})
    }

    const removeContact =(number) => {
        const newArrayofContacts = arrayOfContacts.filter((contact) => contact.phoneNumber !== number);
        setArrayOfContacts(newArrayofContacts);
    }
    

    return(
        <>
            <Box
                width="50%" 
                height="20%" 
                boxShadow={3} 
                justifyContent='space-around'
                style={boxTitleStyle}>
                Add New Contact
            </Box>
            <Box 
                width="50%" 
                height="20%" 
                boxShadow={3} 
                style={boxFormStyle}>
                <form onSubmit={handleSubmit}> 
                    <TextField 
                        id='outlined-basic' 
                        label='Name' 
                        varient='outlined' 
                        size='medium'
                        style={formInputStyle}
                        value={contactInfo.name}
                        onChange={handleChange}
                        name='name'
                        required
                    />
                    <TextField 
                        id='outlined-basic' 
                        label='Phone Number' 
                        varient='outlined' 
                        size='medium' 
                        style={formInputStyle}
                        value={contactInfo.phoneNumber}
                        onChange={handleChange}
                        name='phoneNumber'
                        required
                    />
                    <Button 
                        variant='contained'
                        color='primary'
                        type='submit'
                        style={formButton}
                    >
                        + Add
                    </Button>
                </form>
                { err ?
                    <Alert severity="error">Please enter a valid USA phone number</Alert>
                    : 
                    null
                }
                { uniqueNumErr ?
                    <Alert severity="error">Looks like that number has already been added. Please use a different phone number</Alert>
                    : 
                    null
                }
                
            </Box>
            <ContactList arrayOfContacts={arrayOfContacts} removeContact={removeContact}/>
        </>
    )
}


export default FormBox; 



