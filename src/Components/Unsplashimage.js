import React from 'react'
import styled from 'styled-components';

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

`;


export const Unsplashimage = ({ index, url, key, setCurr, setModal }) => {
    return <Img src={url} key={key} alt="" onClick={() => {
        setCurr(index);
        setModal(true);
      }} />
}
