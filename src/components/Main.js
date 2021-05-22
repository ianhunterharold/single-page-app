import React from 'react';
import FormBox from './FormBox';
import Title from './Title';
import { Container } from '@material-ui/core';

const Main = () => {
    const containerStyle = {
        display:'flex', 
        flexDirection:'column',
        // contentAlign: 'center',
        justifyContent: "center",
        alignItems: "center"
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