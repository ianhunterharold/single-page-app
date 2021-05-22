import React from 'react';
import {List, ListItem,ListItemAvatar, Avatar, ListItemText, ListItemIcon, Divider,Button } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import DeleteIcon from '@material-ui/icons/Delete';

const ContactList = (props) => {
    
    return(
        <>
        <List>
            {props && props.arrayOfContacts.length > 0 && props.arrayOfContacts.map((contact)=> {
                const labelId = `secondary-label-${contact}`
                return(
                    <>
                    <ListItem key={contact}>
                        <ListItemAvatar>
                            <Avatar/>
                        </ListItemAvatar>
                        <ListItemText id={labelId} primary={contact.name} />
                        <ListItemIcon>
                            <PhoneIcon fontSize='large'/>
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={contact.phoneNumber} />
                        <ListItemIcon>
                            <Button>
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