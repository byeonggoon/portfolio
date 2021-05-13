import React from 'react'
import Button from '../component/Button'
import{withRouter, Link} from 'react-router-dom'
import "./introPage.css"


const IntroPage = () => {

    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
            backgroundColor: '#ece5da'
        }}>
         <Link to='/main' style={{textDecoration:'none'}}><h3><span>welcome to<br/> BYEONGGOON's<br/> portfolio</span></h3></Link>
        </div>
    )
}



export default withRouter(IntroPage)
