import React, { Fragment } from 'react';
import FormBox from './FormBox';
import Title from './Title';
import { Container } from '@material-ui/core';

const Main = () => {
    const containerStyle = {
        display:'flex', 
        flexDirection:'column',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#a0c5c4',
    }
    
    return(
        <>
        <Container style={containerStyle}>
            <Title/>
            <FormBox/>
        </Container>
        </>
    )

}

export default Main; 