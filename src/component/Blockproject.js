import React from 'react'


import blockproject3 from '../images/blockproject3.jpg'
import blockprojectgif from '../images/stellargif.gif'
import blockproject2gif from '../images/U1Lgif.gif'
import './Webproject.css'
import './slider2.css'
import Slide from 'react-reveal/Slide';

const Webproject = () => {
    return (
        <div>
            <div className="container" style={{ paddingTop: '30px' }}>
                {/* 블록체인 팀프로젝트1 */}
                <Slide bottom>
                <div className="item" style={{margin:'auto' }}>
                    <img src={blockprojectgif} style={{ height: '300px', width: '500px', border: '2px solid black', borderRadius: '15px' }} />
                </div>
                </Slide>

                <Slide bottom>
                <div className="item" style={{ margin: 'auto 20rem auto 0' }}>
                    <div className="title">🌳StellaForest</div>

                    <div className="upcon">
                        <div className="upcondetail">제작인원: 4명</div>
                        <div className="upcondetail">제작기간: 2021.06.08~2021.07.09(32일)</div>
                        <div className="upcondetail">프로젝트 설명: 알트코인을 제작하고 그것을 활용할 수 있는 방안으로 쇼핑몰을 제작하여 일정한 포인트가 적립되면 나무를 심는 프로젝트를 진행하는 컨셉을 잡고 제작</div>
                        <div className="upcondetail">사용언어: C++,nodejs, javascript, mariaDB</div>
                    </div>

                    <div className="ido">🌳나의 구현사항</div>

                    <div className="idocon">
                        <div className="titlecon">✔hashroot코인</div>
                        <div className="subcon">◾Litecoin을 기반으로 한 알트코인 hashroot코인을 제작.</div>
                        <div className="titlecon">✔별숲 마이페이지 </div>
                        <div className="subcon">◾ 마이페이지에 자신이 보유한 나무 표시</div>
                        <div className="subcon">◾ 자신의 지분이 있는 나무의 위치를 카카오맵API를 통해 출력</div>
                    </div>

                    <a href="https://github.com/byeonggoon/blockteam1-1"   target="_blank"style={{ textDecoration: 'none', color: 'black' }}>
                        <div style={{ fontWeight: 'bold', border: '2px solid black', borderRadius: '5px', padding: '10px', margin: '10px', width: '140px', textAlign: 'center', float: 'left' }}>
                            GITHUB1
                        </div>
                    </a>
                    <a href="https://github.com/byeonggoon/blockteam1-2"  target="_blank"  style={{ textDecoration: 'none', color: 'black' }}>
                        <div style={{ fontWeight: 'bold', border: '2px solid black', borderRadius: '5px', padding: '10px', margin: '10px', width: '140px', textAlign: 'center', float: 'left' }}>
                            GITHUB2
                        </div>
                    </a>
                    <a href="https://blog.naver.com/qudrnsektzja/222390655694" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                        <div style={{ fontWeight: 'bold', border: '2px solid black', borderRadius: '5px', padding: '10px', margin: '10px', width: '70px', textAlign: 'center', float: 'left' }}>
                            BLOG
                        </div>
                    </a>
                </div>
                </Slide>

                {/* 블록체인 팀프로젝트2 */}
                <Slide bottom>
                <div className="item" style={{ margin:'auto' }}>
                    <img src={blockproject2gif} style={{ height: '300px', width: '500px', border: '2px solid black', borderRadius: '15px' }} />
                </div>
                </Slide>

                <Slide bottom>
                <div className="item" style={{ margin: 'auto 20rem auto 0' }}>
                    <div className="title">🌳U1L</div>

                    <div className="upcon">
                        <div className="upcondetail">제작인원: 4명</div>
                        <div className="upcondetail">제작기간: 2021.08.15~2021.08.31(16일)</div>
                        <div className="upcondetail">프로젝트 설명: 세상에 하나뿐인 NFT를 거래하는 거래소 U1L을  컨셉으로 제작</div>
                        <div className="upcondetail">사용언어: Solidity, React</div>
                    </div>

                    <div className="ido">🌳나의 구현사항</div>

                    <div className="idocon">
                        <div className="titlecon">✔NFT</div>
                        <div className="subcon">◾NFT 발행하기 </div>
                        <div className="subcon">◾발행한 NFT 삭제하기</div>
                        <div className="subcon">◾NFT 구매하기</div>
                    </div>

                    <a href="https://github.com/byeonggoon/blockteam2" target="_blank"   style={{ textDecoration: 'none', color: 'black' }}>
                        <div style={{ fontWeight: 'bold', border: '2px solid black', borderRadius: '5px', padding: '10px', margin: '10px', width: '140px', textAlign: 'center', float: 'left' }}>
                            GITHUB
                        </div>
                    </a>
                    <a href="https://blog.naver.com/qudrnsektzja/222475459955" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
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
