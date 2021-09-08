import React from 'react'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Home from '../component/Home'
import{withRouter, Link} from 'react-router-dom'
const HomePage = () => {
    return (
        <div style={{width:"100vw", height:"100vh", overflow:"hidden"}}>
            <Header/>
            <Navbar/>
            <Home/>
        </div>
    )
}

export default withRouter(HomePage)


