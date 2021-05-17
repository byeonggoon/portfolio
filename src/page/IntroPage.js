import React from 'react'
import Button from '../component/Button'
import{withRouter, Link} from 'react-router-dom'
import "./introPage.css"


const IntroPage = () => {

    return (
        <Link to='/home' style={{textDecoration:'none'}}>
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
            backgroundColor: '#ece5da'
        }}>
        <h3><span>welcome to<br/> BYEONGGOON's<br/> portfolio</span></h3>
        </div>
        </Link>
    )
}



export default withRouter(IntroPage)
