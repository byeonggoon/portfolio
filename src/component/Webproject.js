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
                {/* React프로젝트 */}

                <Slide bottom>
                <div className="item" style={{ margin: 'auto' }}>
                    <img src={teamproject2} style={{ height: '300px', width: '500px', border: '2px solid black', borderRadius: '15px' }} />
                </div>
                </Slide>

                <Slide bottom>
                <div className="item" style={{ margin: 'auto 20rem auto 0' }}>
                    <div className="title">🌳헬씈(HealthK)</div>

                    <div className="upcon">
                        <div className="upcondetail">제작인원: 3명</div>
                        <div className="upcondetail">제작기간: 2021.04.22~2021.05.06(15일)</div>
                        <div className="upcondetail">프로젝트 설명: 회원가입시 키와 몸무게를 입력하면 맞춤 식단과 운동영상을 추천해주는 건강커뮤니티 사이트</div>
                        <div className="upcondetail">사용언어: React, nodejs, javascript, Mysql, MongoDB</div>
                    </div>

                    <div className="ido">🌳나의 구현사항</div>

                    <div className="idocon">
                        <div className="titlecon">✔회원가입, 로그인</div>
                        <div className="subcon">◾ Formik&yup라이브러리를 통한 검증</div>
                        <div className="titlecon">✔운동인증게시판 </div>
                        <div className="subcon">◾ react-file-base64사용 사진업로드</div>
                        <div className="subcon">◾ REST API, MongoDB, MySql을 이용하여 글 작성, 수정, 삭제 및 좋아요 구현</div>
                        <div className="titlecon">✔메인페이지</div>
                        <div className="subcon">◾ 키와 몸무게를 활용하여 BMI를 계산하고 그에 따른 운동영상을 추천</div>
                        <div className="subcon">◾ 시간대에 따라서 조건을 설정하여 아침, 점심, 저녁메뉴 추천</div>
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

                {/* nodejs개인프로젝트 */}
                <Slide bottom>
                <div className="item" style={{ margin: 'auto' }}>
                    <img src={soloproject2} style={{ height: '300px', width: '500px', border: '2px solid black', borderRadius: '15px' }} />
                </div>
                </Slide>

                <Slide bottom>
                <div className="item" style={{ margin: 'auto 20rem auto 0' }}>
                    <div className="title">🌳BGfinance</div>

                    <div className="upcon">
                        <div className="upcondetail"><strong>제작인원</strong>: 1명</div>
                        <div className="upcondetail"><strong>제작기간</strong>: 2021.03.08~2021.03.24(17일)</div>
                        <div className="upcondetail">프로젝트 설명: BGfinance라는 가상의 투자자문업체를 만들고 그곳에서 운영하는 커뮤니티 사이트를 생성</div>
                        <div className="upcondetail">사용언어: html, css, javascript, jquery ,nodejs</div>
                    </div>

                    <div className="ido">🌳나의 구현사항</div>

                    <div className="idocon">
                        <div className="titlecon">✔회원가입, 로그인</div>
                        <div className="subcon">◾ ajax를 통하여 아이디 중복체크, sha512사용 비밀번호 암호화</div>
                        <div className="titlecon">✔크롤링</div>
                        <div className="subcon">◾ 네이버금융 크롤링를 통한 시세정보 제공, 업비트API이용 시세정보 제공</div>
                        <div className="titlecon">✔조회수 상위 5개 인기글 목록 생성</div>
                        <div className="titlecon">✔게시판</div>
                        <div className="subcon">◾ 글 작성, 수정하기, 삭제하기, 검색하기, 페이징 기능</div>
                        <div className="subcon">◾ summernote 라이브러리 사용</div>
                        <div className="titlecon">✔회원 마이페이지</div>
                        <div className="subcon">◾ 자신이 작성한 글보기, 회원 등급(포인트에 따라 차등)</div>
                        <div className="subcon">◾ 글쓰기(글, 사진), 댓글달기 실행하면 포인트 지급</div>
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

                {/* nodejs팀프로젝트 */}
                <Slide bottom>
                <div className="item" style={{ margin: 'auto' }}>
                    <img src={teamproject1} style={{ height: '300px', width: '500px', border: '2px solid black', borderRadius: '15px' }} />
                </div>
                </Slide>

                <Slide bottom>
                <div className="item" style={{ margin: 'auto 20rem auto 0' }}>
                    <div className="title">🌳CDKPL</div>

                    <div className="upcon">
                        <div className="upcondetail">제작인원: 3명(팀장)</div>
                        <div className="upcondetail">제작기간: 2021.01.27~2021.02.09(14일)</div>
                        <div className="upcondetail">프로젝트 설명: CDKPL이라는 가상의 브랜드그룹을 만들고 그룹사이트를 만듬</div>
                        <div className="upcondetail">사용언어: html, css, nodejs, javascript</div>
                    </div>

                    <div className="ido">🌳나의 구현사항</div>
                    <div className="idocon">
                        <div className="titlecon">✔html,css,javascript,jquery를 이용하여 정적페이지 생성</div>
                        <div className="titlecon">✔게시판의 글 작성, 수정하기, 삭제하기, 검색하기 기능</div>
                        <div className="titlecon">✔카카오맵 API연동</div>
                        <div className="titlecon">✔메인페이지</div>
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

                {/* html개인 프로젝트 */}
                <Slide bottom>
                <div className="item" style={{ margin: 'auto' }}>
                    <img src={soloproject1} style={{ height: '300px', width: '500px', border: '2px solid black', borderRadius: '15px' }} />
                </div>
                </Slide>

                <Slide bottom>
                <div className="item" style={{ margin: 'auto 20rem auto 0' }}>
                    <div className="title">🌳airbnb클론</div>

                    <div className="upcon">
                        <div className="upcondetail">제작인원: 1명</div>
                        <div className="upcondetail">제작기간: 2021.01.13~2021.01.19(7일)</div>
                        <div className="upcondetail">프로젝트 설명: airbnb클론 사이트 만들기</div>
                        <div className="upcondetail">사용언어: html, css, javascript</div>
                    </div>

                    <div className="ido">🌳나의 구현사항</div>
                    <div className="idocon">
                        <div className="titlecon">✔html,css,JS,JQuery를 이용하여 페이지 제작</div>
                        <div className="titlecon">✔카카오 맵 API연동</div>
                        <div className="titlecon">✔이미지 슬라이드 생성</div>
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
