import React, { useState } from 'react';
import {  TextField, Button, Box } from '@material-ui/core';
import ContactList from './ContactList';

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

    const handleChange = (event)=> {
        setContactInfo({...contactInfo, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setArrayOfContacts([...arrayOfContacts, contactInfo]);
        setContactInfo({phoneNumber:'',name:''})
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
            </Box>
            <ContactList arrayOfContacts={arrayOfContacts}/>
        </>
    )
}


export default FormBox; 



