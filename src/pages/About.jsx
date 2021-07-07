import React, {useRef, useEffect} from 'react'
import Container from '../components/utils/Container'
import imaneImg from '../assets/img/imaneImg.jpeg'

import {TweenMax, TimelineLite, Power3} from 'gsap';

function About() {

    let aboutRef = useRef(null);
    let aboutmeRef = useRef(null);
    let imgRef = useRef(null)
    let linksRef = useRef(null)



    let tl = new TimelineLite();

    useEffect(() => {
        const title = aboutRef.firstElementChild;
        const info = aboutRef.lastElementChild;

        const hireMe = linksRef.firstElementChild;
        const downloadCv = linksRef.lastElementChild;

        tl.from(aboutmeRef, 2, {x:-300, opacity:0, ease:Power3.easeOut})
            .from(imgRef, 2, {opacity:0, ease: Power3.easeOut},.4)
            .from(imgRef.firstElementChild, 2, {scale:1.2, ease: Power3.easeInOut},.4)
            .from(title, 2, {y:300, opacity:0, ease:Power3.easeOut}, 1)
            .from(info, 2, {opacity:0, ease:Power3.easeOut}, 1.5)
            .from(linksRef, 2, {y:200, opacity:0, ease:Power3.easeOut}, 1)
    }) 

    return (
        <section className="about_page" id="about" data-scroll-section>
            <Container>
                <div className="infos">
                    <div className="aboutme" ref={el => aboutmeRef = el}>
                        <h1>
                            About me
                        </h1>
                    </div>
                    <div className="about_title" ref ={el => aboutRef = el}>
                        <h1 className="title">Salam, as we say here!</h1>
                        <p className="about_text">My name is Imane Sihi, I’m a 21 years old graphic designer and interior design student based in Morocco, Casablanca (but worldwide working). <br /> I'm open for projects, collaborations and experiments.</p>
                    </div>

                    <div className="links" ref= {el => linksRef = el}>
                        <a href="" className="hire-me">Hire me</a>
                        <a href="" className="download-cv">Download CV</a>
                    </div>

                </div>
                <div className="image_container" ref={el => imgRef = el}>
                    <img src={imaneImg} alt="" className="image" />
                </div>
            </Container>
        </section>
    )
}

export default About
