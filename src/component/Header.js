import React from 'react'

import{withRouter, Link} from 'react-router-dom'
import styled from 'styled-components'

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
            <Link to='/main'  style={{textDecoration:'none', color:'black'}}>BYEONGGOON PORTFOLIO</Link>  
        </Head>
    )
}

export default Header
