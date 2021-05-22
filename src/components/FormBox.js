import React from 'react';
import {  TextField, Button, Box } from '@material-ui/core';


const boxFormStyle = {
    backgroundColor: 'white',    
    padding: '15px',
}
const boxTitleStyle = {
    backgroundColor: 'gray',    
    marginTop: '30px',
    padding: '15px',
    // marginLeft: '40px',
    // marginRight: '100px',
    // contentAlign: 'center',
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

    return(
            <>
            <Box
                width="50%" 
                height="20%" 
                boxShadow={3} 
                // flexDirection="row" 
                justifyContent='space-around'
                // mx="auto" 
                style={boxTitleStyle}>
                Add New Contact
            </Box>
            <Box 
                // m={1}
                width="50%" 
                height="20%" 
                boxShadow={3} 
                // flexDirection="row" 
                // mx="auto" 
                style={boxFormStyle}>
                <form>
                    <TextField 
                        id='outlined-basic' 
                        label='Name' 
                        varient='outlined' 
                        // required 
                        size='large'
                        style={formInputStyle}
                    />
                    <TextField 
                        id='outlined-basic' 
                        label='Phone Number' 
                        varient='outlined' 
                        // required  
                        size='large' 
                        style={formInputStyle}
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
            </>
    )
}


export default FormBox; 



