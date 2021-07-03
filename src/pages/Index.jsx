import React, { useEffect, useState } from 'react'
import Container from '../components/utils/Container'
import Dropdown from '../components/utils/Dropdown'
import Nav from '../components/utils/navigation/Nav'
import NavItem from '../components/utils/navigation/NavItem'
import SocialItem from '../components/utils/social/SocialItem'
import SocialNav from '../components/utils/social/SocialNav'
import { navigation } from '../data/navigation'
import { socialmedia } from '../data/socialmedia'
import Header from './partials/Header'

function Index() {

    const [isOpen, setIsOpen] = useState(false);
    const header_props = { isOpen, setIsOpen };

    const scrollRef = React.useRef(null)

    useEffect(() => {
        document.addEventListener('mousemove', (e) => {

            const { clientX } = e

            const X = clientX - scrollRef.current.clientWidth / 2;

            console.log(clientX)
            scrollRef.current.style.transform =
                `translate3d(${X}px,0,0)`
        })
    }, [])


    const displayNav = () => {
        return navigation.map(item => {
            return (
                <NavItem href={item.link} key={item.title} id={item.title} props={header_props}>
                    {item.title}
                </NavItem>
            )
        })
    }


    const displaySocial = () => {
        return socialmedia.map(item => {
            return (
                <SocialItem href={item.link} key={item.social} id={item.social} props={header_props}>
                    {item.icon}
                </SocialItem>
            )
        })
    }


    return (
        <div className="index_page">

            <Container>
                <Header props={header_props}></Header>
            </Container>

            <div className="rotating-shape"></div>

            <Dropdown props={header_props}>
                <Nav>
                    {displayNav()}
                </Nav>
            </Dropdown>

            <Container>
                <div className="welcome">
                    <h1>Hey there, my name is Imane Sihi, Interior Designer!</h1>
                    <span className="to-my-website">Welcome to my Portfolio, Have fun!</span>
                    <span className="scroll" ref={scrollRef}>scroll to see more</span>
                </div>
            </Container>

            <div className="index_social">
                <SocialNav>
                    {displaySocial()}
                </SocialNav>
            </div>

        </div>
    )
}

export default Index
