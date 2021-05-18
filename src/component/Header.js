import React from 'react'

import{withRouter, Link} from 'react-router-dom'
import styled from 'styled-components'
import Bounce from 'react-reveal/Bounce';

const Head = styled.div`
    text-align:center;
    font-size:2rem;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration:none;
    font-family:'ROKABold';
`;


const Header = () => {
    return (
        <Head>
            <Link to='/portfolio'  style={{textDecoration:'none', color:'black'}}><Bounce>BYEONGGOON PORTFOLIO</Bounce></Link>  
        </Head>
    )
}

export default Header
