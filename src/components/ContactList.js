import React from 'react';
import {List, ListItem,ListItemAvatar, Avatar, ListItemText, ListItemIcon, Divider,Button, RootRef } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import DeleteIcon from '@material-ui/icons/Delete';

const ContactList = (props) => {
    
    const contactList = {
        display:'flex', 
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',        
        flexWrap:"wrap",
    }

    const handleRemoveContact = () => {
        console.log('I am here')
        
    }



    return(
        <>
        <List style={{width: '50%'}}>
            {props && props.arrayOfContacts.length > 0 && props.arrayOfContacts.map((contact)=> {
                const labelId = `secondary-label-${contact}`
                return(
                    <>
                    <ListItem key={`${contact}-${contact.name}`} style={contactList}>
                        {/* ask about key  */}
                        <ListItemAvatar>
                            <Avatar/>
                        </ListItemAvatar>
                        <ListItemText id={labelId} primary={contact.name} style={{paddingRight: '70px'}} />
                        <ListItemIcon>
                            <PhoneIcon fontSize='large'/>
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={contact.phoneNumber} componet='div' style={{paddingRight: '70px'}} />
                        <ListItemIcon>
                            <Button onClick={handleRemoveContact}>
                                <DeleteIcon/>
                            </Button>
                        </ListItemIcon>
                        <Divider variant='inset' component="div"/>
                    </ListItem>
                    <hr/> 
                    {/* Divider if you need it */}
                    </>
                )
            })}
        </List>
        </>
    )
}

export default ContactList;