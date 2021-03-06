import React from 'react'
import soloproject1 from '../images/soloproject1.jpg'
import soloproject2 from '../images/soloproject2.jpg'
import teamproject1 from '../images/teamproject1.jpg'
import teamproject2 from '../images/teamproject2.jpg'
import './Webproject.css'
import Slide from 'react-reveal/Slide';

const Webproject = () => {
    return (
        <div>
            <div className="container" style={{ paddingTop: '30px' }}>
                {/* Reactํ๋ก์ ํธ */}

                <Slide bottom>
                <div className="item" style={{ margin: 'auto' }}>
                    <img src={teamproject2} style={{ height: '300px', width: '500px', border: '2px solid black', borderRadius: '15px' }} />
                </div>
                </Slide>

                <Slide bottom>
                <div className="item" style={{ margin: 'auto 20rem auto 0' }}>
                    <div className="title">๐ณํฌ์(HealthK)</div>

                    <div className="upcon">
                        <div className="upcondetail">์ ์์ธ์: 3๋ช</div>
                        <div className="upcondetail">์ ์๊ธฐ๊ฐ: 2021.04.22~2021.05.06(15์ผ)</div>
                        <div className="upcondetail">ํ๋ก์ ํธ ์ค๋ช: ํ์๊ฐ์์ ํค์ ๋ชธ๋ฌด๊ฒ๋ฅผ ์๋ ฅํ๋ฉด ๋ง์ถค ์๋จ๊ณผ ์ด๋์์์ ์ถ์ฒํด์ฃผ๋ ๊ฑด๊ฐ์ปค๋ฎค๋ํฐ ์ฌ์ดํธ</div>
                        <div className="upcondetail">์ฌ์ฉ์ธ์ด: React, nodejs, javascript, Mysql, MongoDB</div>
                    </div>

                    <div className="ido">๐ณ๋์ ๊ตฌํ์ฌํญ</div>

                    <div className="idocon">
                        <div className="titlecon">โํ์๊ฐ์, ๋ก๊ทธ์ธ</div>
                        <div className="subcon">โพ Formik&yup๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ํตํ ๊ฒ์ฆ</div>
                        <div className="titlecon">โ์ด๋์ธ์ฆ๊ฒ์ํ </div>
                        <div className="subcon">โพ react-file-base64์ฌ์ฉ ์ฌ์ง์๋ก๋</div>
                        <div className="subcon">โพ REST API, MongoDB, MySql์ ์ด์ฉํ์ฌ ๊ธ ์์ฑ, ์์ , ์ญ์  ๋ฐ ์ข์์ ๊ตฌํ</div>
                        <div className="titlecon">โ๋ฉ์ธํ์ด์ง</div>
                        <div className="subcon">โพ ํค์ ๋ชธ๋ฌด๊ฒ๋ฅผ ํ์ฉํ์ฌ BMI๋ฅผ ๊ณ์ฐํ๊ณ  ๊ทธ์ ๋ฐ๋ฅธ ์ด๋์์์ ์ถ์ฒ</div>
                        <div className="subcon">โพ ์๊ฐ๋์ ๋ฐ๋ผ์ ์กฐ๊ฑด์ ์ค์ ํ์ฌ ์์นจ, ์ ์ฌ, ์ ๋๋ฉ๋ด ์ถ์ฒ</div>
                    </div>

                    <a href="https://github.com/byeonggoon/teamproject2" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                        <div style={{ fontWeight: 'bold', border: '2px solid black', borderRadius: '5px', padding: '10px', margin: '10px', width: '70px', textAlign: 'center', float: 'left' }}>
                            GITHUB
                        </div>
                    </a>
                    <a href="https://blog.naver.com/qudrnsektzja/222318432633" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                        <div style={{ fontWeight: 'bold', border: '2px solid black', borderRadius: '5px', padding: '10px', margin: '10px', width: '70px', textAlign: 'center', float: 'left' }}>
                            BLOG
                        </div>
                    </a>
                </div>
                </Slide>

                {/* nodejs๊ฐ์ธํ๋ก์ ํธ */}
                <Slide bottom>
                <div className="item" style={{ margin: 'auto' }}>
                    <img src={soloproject2} style={{ height: '300px', width: '500px', border: '2px solid black', borderRadius: '15px' }} />
                </div>
                </Slide>

                <Slide bottom>
                <div className="item" style={{ margin: 'auto 20rem auto 0' }}>
                    <div className="title">๐ณBGfinance</div>

                    <div className="upcon">
                        <div className="upcondetail"><strong>์ ์์ธ์</strong>: 1๋ช</div>
                        <div className="upcondetail"><strong>์ ์๊ธฐ๊ฐ</strong>: 2021.03.08~2021.03.24(17์ผ)</div>
                        <div className="upcondetail">ํ๋ก์ ํธ ์ค๋ช: BGfinance๋ผ๋ ๊ฐ์์ ํฌ์์๋ฌธ์์ฒด๋ฅผ ๋ง๋ค๊ณ  ๊ทธ๊ณณ์์ ์ด์ํ๋ ์ปค๋ฎค๋ํฐ ์ฌ์ดํธ๋ฅผ ์์ฑ</div>
                        <div className="upcondetail">์ฌ์ฉ์ธ์ด: html, css, javascript, jquery ,nodejs</div>
                    </div>

                    <div className="ido">๐ณ๋์ ๊ตฌํ์ฌํญ</div>

                    <div className="idocon">
                        <div className="titlecon">โํ์๊ฐ์, ๋ก๊ทธ์ธ</div>
                        <div className="subcon">โพ ajax๋ฅผ ํตํ์ฌ ์์ด๋ ์ค๋ณต์ฒดํฌ, sha512์ฌ์ฉ ๋น๋ฐ๋ฒํธ ์ํธํ</div>
                        <div className="titlecon">โํฌ๋กค๋ง</div>
                        <div className="subcon">โพ ๋ค์ด๋ฒ๊ธ์ต ํฌ๋กค๋ง๋ฅผ ํตํ ์์ธ์ ๋ณด ์ ๊ณต, ์๋นํธAPI์ด์ฉ ์์ธ์ ๋ณด ์ ๊ณต</div>
                        <div className="titlecon">โ์กฐํ์ ์์ 5๊ฐ ์ธ๊ธฐ๊ธ ๋ชฉ๋ก ์์ฑ</div>
                        <div className="titlecon">โ๊ฒ์ํ</div>
                        <div className="subcon">โพ ๊ธ ์์ฑ, ์์ ํ๊ธฐ, ์ญ์ ํ๊ธฐ, ๊ฒ์ํ๊ธฐ, ํ์ด์ง ๊ธฐ๋ฅ</div>
                        <div className="subcon">โพ summernote ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ฌ์ฉ</div>
                        <div className="titlecon">โํ์ ๋ง์ดํ์ด์ง</div>
                        <div className="subcon">โพ ์์ ์ด ์์ฑํ ๊ธ๋ณด๊ธฐ, ํ์ ๋ฑ๊ธ(ํฌ์ธํธ์ ๋ฐ๋ผ ์ฐจ๋ฑ)</div>
                        <div className="subcon">โพ ๊ธ์ฐ๊ธฐ(๊ธ, ์ฌ์ง), ๋๊ธ๋ฌ๊ธฐ ์คํํ๋ฉด ํฌ์ธํธ ์ง๊ธ</div>
                    </div>

                    <a href="https://github.com/byeonggoon/soloproject2" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                        <div style={{ fontWeight: 'bold', border: '2px solid black', borderRadius: '5px', padding: '10px', margin: '10px', width: '70px', textAlign: 'center', float: 'left' }}>
                            GITHUB
                        </div>
                    </a>
                    <a href="https://blog.naver.com/qudrnsektzja/222268105771" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                        <div style={{ fontWeight: 'bold', border: '2px solid black', borderRadius: '5px', padding: '10px', margin: '10px', width: '70px', textAlign: 'center', float: 'left' }}>
                            BLOG
                        </div>
                    </a>
                    <a href="http://byeonggoon.cafe24app.com/" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                        <div style={{ fontWeight: 'bold', border: '2px solid black', borderRadius: '5px', padding: '10px', margin: '10px', width: '80px', textAlign: 'center', float: 'left' }}>
                            BGfinance
                        </div>
                    </a>
                </div>
                </Slide>

                {/* nodejsํํ๋ก์ ํธ */}
                <Slide bottom>
                <div className="item" style={{ margin: 'auto' }}>
                    <img src={teamproject1} style={{ height: '300px', width: '500px', border: '2px solid black', borderRadius: '15px' }} />
                </div>
                </Slide>

                <Slide bottom>
                <div className="item" style={{ margin: 'auto 20rem auto 0' }}>
                    <div className="title">๐ณCDKPL</div>

                    <div className="upcon">
                        <div className="upcondetail">์ ์์ธ์: 3๋ช(ํ์ฅ)</div>
                        <div className="upcondetail">์ ์๊ธฐ๊ฐ: 2021.01.27~2021.02.09(14์ผ)</div>
                        <div className="upcondetail">ํ๋ก์ ํธ ์ค๋ช: CDKPL์ด๋ผ๋ ๊ฐ์์ ๋ธ๋๋๊ทธ๋ฃน์ ๋ง๋ค๊ณ  ๊ทธ๋ฃน์ฌ์ดํธ๋ฅผ ๋ง๋ฌ</div>
                        <div className="upcondetail">์ฌ์ฉ์ธ์ด: html, css, nodejs, javascript</div>
                    </div>

                    <div className="ido">๐ณ๋์ ๊ตฌํ์ฌํญ</div>
                    <div className="idocon">
                        <div className="titlecon">โhtml,css,javascript,jquery๋ฅผ ์ด์ฉํ์ฌ ์ ์ ํ์ด์ง ์์ฑ</div>
                        <div className="titlecon">โ๊ฒ์ํ์ ๊ธ ์์ฑ, ์์ ํ๊ธฐ, ์ญ์ ํ๊ธฐ, ๊ฒ์ํ๊ธฐ ๊ธฐ๋ฅ</div>
                        <div className="titlecon">โ์นด์นด์ค๋งต API์ฐ๋</div>
                        <div className="titlecon">โ๋ฉ์ธํ์ด์ง</div>
                    </div>

                    <div>
                        <a href="https://github.com/byeonggoon/teamproject1" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                            <div style={{ fontWeight: 'bold', border: '2px solid black', borderRadius: '5px', padding: '10px', margin: '10px', width: '70px', textAlign: 'center', float: 'left' }}>
                                GITHUB
                            </div>
                        </a>
                        <a href="https://blog.naver.com/qudrnsektzja/222222701531" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                            <div style={{ fontWeight: 'bold', border: '2px solid black', borderRadius: '5px', padding: '10px', margin: '10px', width: '70px', textAlign: 'center', float: 'left' }}>
                                BLOG
                            </div>
                        </a>
                        <a href="http://dbcon.cafe24app.com/index.html" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                            <div style={{ fontWeight: 'bold', border: '2px solid black', borderRadius: '5px', padding: '10px', margin: '10px', width: '70px', textAlign: 'center', float: 'left' }}>
                                CDKPL
                            </div>
                        </a>
                    </div>
                </div>
                </Slide>

                {/* html๊ฐ์ธ ํ๋ก์ ํธ */}
                <Slide bottom>
                <div className="item" style={{ margin: 'auto' }}>
                    <img src={soloproject1} style={{ height: '300px', width: '500px', border: '2px solid black', borderRadius: '15px' }} />
                </div>
                </Slide>

                <Slide bottom>
                <div className="item" style={{ margin: 'auto 20rem auto 0' }}>
                    <div className="title">๐ณairbnbํด๋ก </div>

                    <div className="upcon">
                        <div className="upcondetail">์ ์์ธ์: 1๋ช</div>
                        <div className="upcondetail">์ ์๊ธฐ๊ฐ: 2021.01.13~2021.01.19(7์ผ)</div>
                        <div className="upcondetail">ํ๋ก์ ํธ ์ค๋ช: airbnbํด๋ก  ์ฌ์ดํธ ๋ง๋ค๊ธฐ</div>
                        <div className="upcondetail">์ฌ์ฉ์ธ์ด: html, css, javascript</div>
                    </div>

                    <div className="ido">๐ณ๋์ ๊ตฌํ์ฌํญ</div>
                    <div className="idocon">
                        <div className="titlecon">โhtml,css,JS,JQuery๋ฅผ ์ด์ฉํ์ฌ ํ์ด์ง ์ ์</div>
                        <div className="titlecon">โ์นด์นด์ค ๋งต API์ฐ๋</div>
                        <div className="titlecon">โ์ด๋ฏธ์ง ์ฌ๋ผ์ด๋ ์์ฑ</div>
                    </div>

                    <a href="https://github.com/byeonggoon/soloproject1" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                        <div style={{ fontWeight: 'bold', border: '2px solid black', borderRadius: '5px', padding: '10px', margin: '10px', width: '70px', textAlign: 'center', float: 'left' }}>
                            GITHUB
                        </div>
                    </a>
                    <a href="https://blog.naver.com/qudrnsektzja/222205275719" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                        <div style={{ fontWeight: 'bold', border: '2px solid black', borderRadius: '5px', padding: '10px', margin: '10px', width: '70px', textAlign: 'center', float: 'left' }}>
                            BLOG
                        </div>
                    </a>
                </div>
                </Slide>
            </div>
        </div>
    );
}

export default Webproject
