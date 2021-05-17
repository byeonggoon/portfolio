import React from 'react'
import './Myintro.css'
import MyImg from '../images/photoprofile.jpg'
import Slide from 'react-reveal/Slide';
import NaverBlog from '../images/naverblog.png'
import Gamil from '../images/gmailicon.png'
import HTML from '../images/html.png'
import CSS from '../images/css.png'
import JS from '../images/JS.png'
import NODEJS from '../images/nodejs.png'
import REACT from '../images/react.png'
import MONGODB from '../images/mogodb.png'
import MYSQL from '../images/mysql.png'

const Myintro = () => {


    return (
        <div>
            {/*============================= 슬로건===========================*/}
            {/* <div className="sloganbox">
                <div id="slogan">
                    maybe slow but <br />
                    never don't stop coding
                </div>
            </div> */}

            {/*==============================자기소개============================*/}
            <Slide bottom>
                <div className="profileArea" style={{ textAlign: 'center', justifyContent: 'center', paddingBottom:'3rem', paddingTop:'3rem'}}>
                    <div className="profileImg" style={{ marginRight: '15px' }}>
                        <img src={MyImg} alt="profileImg" className="profileImg-Img" />
                    </div>
                    <div className="detailcontent">
                        <div style={{ fontSize: '35px', fontFamily: 'ROKABold' }}>임병군</div>
                        <a href="https://blog.naver.com/qudrnsektzja" target='_blank'>
                            <img src={NaverBlog} style={{ height: '40px', width: '40px', marginBottom: '25px' }} />
                        </a>
                        <a href="mailto:dla6762@gamil.com" >
                            <img src={Gamil} style={{ height: '40px', width: '40px', marginBottom: '25px' }} />
                        </a>
                    </div>
                    <div style={{fontSize:'1.5rem', fontFamily: 'ROKABold'}}>동국대학교 졸업(2012.3~2019.2)</div>
                    <div style={{fontSize:'1.5rem', fontFamily: 'ROKABold'}}>경일게임아카데미 블록체인기반 응용SW개발 수료(2020.12~2021.10) </div>
                    <div style={{marginTop:'1rem',fontFamily:'Cafe24Oneprettynight', fontSize:'1.5rem'}} >배움을 끊임 없이. <br/> 멈추지 않는 개발자가 되겠습니다. </div>
                </div>
            </Slide>

            {/*==============================사용언어============================*/}
            <div style={{textAlign:'center',fontSize: '35px', fontFamily: 'ROKABold', marginBottom:'25px' }}>사용 언어 </div>

            <div className="langbox1" style={{display:'flex',justifyContent:'space-around',padding:'1rem 200px'}}>
                <div style={{  textAlign: 'center' }}>
                    <img src={HTML} style={{ height: '100px', width: '100px',verticalAlign:'middle'}} /> 
                </div>

                <div style={{ textAlign: 'center' }}>
                    <img src={CSS} style={{ height: '100px', width: '100px',verticalAlign:'middle' }} />
                </div>

                <div style={{  textAlign: 'center' }}>
                    <img src={JS} style={{ height: '100px', width: '100px',verticalAlign:'middle' }} /> 
                </div>

                <div style={{  textAlign: 'center' }}>
                    <img src={NODEJS} style={{ height: '100px', width: '100px',verticalAlign:'middle' }} />
                </div>
            </div>

            <div className="langbox2" style={{display:'flex',justifyContent:'space-around',padding:'2rem 250px'}}>
            <div style={{  textAlign: 'center' }}>
                    <img src={REACT} style={{ height: '100px', width: '100px',verticalAlign:'middle' }} />
                </div>

                <div style={{  textAlign: 'center' }}>
                    <img src={MONGODB} style={{ height: '100px', width: '100px',verticalAlign:'middle' }} />
                </div>

                <div style={{  textAlign: 'center' }}>
                    <img src={MYSQL} style={{ height: '100px', width: '100px',verticalAlign:'middle' }} />
                </div>
            </div>


        </div>
    );
}

export default Myintro
