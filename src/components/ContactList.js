import React from 'react';
import {List, ListItem,ListItemAvatar, Avatar, ListItemText, ListItemIcon, Divider,Button } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const ContactList = (props) => {
    
    const contactList = {
        display:'flex', 
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',        
        flexWrap:"wrap",
    }

    const handleRemoveContact = (number) => {
        props.removeContact(number);
    }
    const handleFavoriteStatus = (number) => {
        props.changeFavoriteStatus(number)
    }


    return(
        <>
        <List style={{width: '50%'}}>
            {props && props.arrayOfContacts.length > 0 && props.arrayOfContacts.map((contact, index)=> {
                const labelId = `secondary-label-${contact}`
                return(
                    <React.Fragment key={contact.phoneNumber}>
                        <ListItem style={contactList}>
                            <ListItemAvatar>
                                <Avatar/>
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={contact.name} style={{ flex: 4, display:'flex', flexWrap: 'wrap', paddingRight: '70px',}} />
                            <ListItemIcon>
                                <PhoneIcon fontSize='large'/>
                            </ListItemIcon>
                            <ListItemText id={`${contact.phoneNumber}`} primary={contact.phoneNumber} componet='div' style={{paddingRight: '70px'}} />
                            <ListItemIcon>
                                <Button onClick={()=>handleFavoriteStatus(contact.phoneNumber)}>
                                    <FavoriteBorderIcon/>
                                </Button>
                            </ListItemIcon>
                            <ListItemIcon>
                                <Button onClick={()=> handleRemoveContact(contact.phoneNumber )}>
                                    <DeleteIcon/>
                                </Button>
                            </ListItemIcon>
                            <Divider variant='inset' component="div"/>
                        </ListItem>
                        <hr/> 
                    </React.Fragment>
                )
            })}
        </List>
        </>
    )
}

export default ContactList;