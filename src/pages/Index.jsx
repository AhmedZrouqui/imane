import React, { useEffect, useState, useRef } from 'react'
import Container from '../components/utils/Container'
import Dropdown from '../components/utils/Dropdown'
import Nav from '../components/utils/navigation/Nav'
import NavItem from '../components/utils/navigation/NavItem'
import SocialItem from '../components/utils/social/SocialItem'
import SocialNav from '../components/utils/social/SocialNav'
import { navigation } from '../data/navigation'
import { socialmedia } from '../data/socialmedia'
import Header from './partials/Header'

import {TweenMax, TimelineLite, Power3} from 'gsap';

function Index({props}) {

    let indexRef = useRef(null)
    let paragraphs = useRef(null)
    let socialRef = useRef(null)
    let nameRef = useRef(null)
    let tl = new TimelineLite();

    const {isOpen, setIsOpen} = props

    const scrollRef = React.useRef(null)



    useEffect(() => {
            document.addEventListener('mousemove', (e) => {

                const { clientX } = e
    
                const X = clientX - scrollRef.current.clientWidth / 2;
    
                scrollRef.current.style.transform =
                    `translate3d(${X}px,0,0)`
            })
        //paragraphs
        const location = paragraphs.firstElementChild;
        const welcome = paragraphs.lastElementChild;
        
 
        
        tl.from(nameRef, 3, {y:-300 ,opacity: 0, ease:Power3.easeOut})
          .from(location, 2.5, {y:200, opacity:0, ease: Power3.easeOut},.8)
          .from(welcome, 2, {y:200, opacity:0, ease:Power3.easeOut},1)
          .from(socialRef, 1, {opacity:0, ease:Power3.easeOut},.5)


    }, [])


    const displaySocial = () => {
        return socialmedia.map(item => {
            return (
                <SocialItem href={item.link} key={item.social} id={item.social} props={props}>
                    {item.icon}
                </SocialItem>
            )
        })
    }


    return (
        <section className="index_page" ref={el => indexRef = el}>


            <div className="rotating-shape"></div>


            <Container>
                <div className="welcome">
                    <h1 ref={el => nameRef = el}>Hey there, I'm Imane!</h1>
                    <div className="paragraphs" ref={el => paragraphs = el}>
                    <span className="location">Interior Designer based in Morocco.</span>
                    <span className="to-my-website">Welcome to my Portfolio, Have fun!</span>
                    </div>
                    <span className="scroll" ref={scrollRef}>scroll to see more</span>
                </div>
            </Container>

            <div className="index_social" ref={el => socialRef = el}>
                <SocialNav>
                    {displaySocial()}
                </SocialNav>
            </div>

        </section>
    )
}

export default Index
