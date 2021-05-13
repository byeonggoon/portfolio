import React from 'react'
import './Myintro.css'
import MyImg from '../images/ERROR.jpg'
import Slide from 'react-reveal/Slide';


const Myintro = () => {

//     var tl = gsap.timeline(), 
// split = new SplitText("#slogan", {type:"words,chars"}), 
// words = split.words; //an array of all the divs that wrap each character
// gsap.set("#slogan", {perspective: 400});
// tl.to(words, {
//   duration: 1.5,
//   "--weight": "300",
//   ease: "none",
//   color: "hsl(+=0, +=70%, +=20%)",
//   stagger: {
//     each: 0.4,
//   }
// })

    return (
        <div>
            <div className="sloganbox">
                <div id="slogan">
                    maybe slow but <br />
                    never don't stop coding
                </div>
            </div>

                <Slide bottom>
            <div className="profileArea">
                    <div className="profileImg">
                        <img src={MyImg} alt="profileImg" className="profileImg-Img" />
                    </div>
                    <div className="detailcontent">
                    <div style={{fontSize:"25px"}}>임병군</div>
                    <div>네이버블로그</div>
                    <div>Email</div>
                    </div>
                    <div>사용할 수 있는 언어 들어가고</div>
            </div>
                </Slide>
        </div>
    );
}

export default Myintro
