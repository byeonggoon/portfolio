import React from 'react'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Blockproject from '../component/Blockproject'
import{withRouter, Link} from 'react-router-dom'
const BlockPage = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Blockproject/>
        </div>
    )
}

export default withRouter(BlockPage)
