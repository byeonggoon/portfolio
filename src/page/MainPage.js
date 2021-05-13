import React from 'react'
import Header from '../component/Header'
import Button from '../component/Button'
import{withRouter, Link} from 'react-router-dom'
import Myintro from '../component/Myintro'
import Navbar from '../component/Navbar'
const MainPage = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
              <Myintro/>
        </div>
    )
}

export default  withRouter(MainPage);
