import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const Title = () => {

    const titleStyle = {
        paddingTop: '20px',
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    }

    return(
        <>
        <div style={titleStyle}>
        <MailOutlineIcon style={{fontSize: 25, paddingRight: '5px'}}/>
        <span style={{fontSize:25}}>
            My UT Phone Book
        </span>
        </div>
        </>
    )
}


export default Title;