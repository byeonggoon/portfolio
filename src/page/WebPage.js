import React from 'react'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Webproject from '../component/Webproject'
import{withRouter, Link} from 'react-router-dom'
const WebPage = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Webproject/>
        </div>
    )
}

export default withRouter(WebPage)
