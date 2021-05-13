import React from 'react'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import{withRouter, Link} from 'react-router-dom'
const WebPage = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            여기는 웹프로젝트
        </div>
    )
}

export default withRouter(WebPage)
