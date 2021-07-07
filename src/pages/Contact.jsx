import React from 'react'
import {socialmedia} from '../data/socialmedia'
import Container from '../components/utils/Container'

function Contact() {

    

    return (
        <section className="contact_page" id="contact" data-scroll-section>                
            <Container>
                <h1 className="title">Contact</h1>
                <div className="extracontainer">

                    <div className="socialmedia">
                        <div><h2>Social Media</h2></div>
                            <ul>
                            {
                                socialmedia.map( (item, index) =>
                                <li><a href={item.link} target="_blank"> {item.social}</a></li>
                                )
                            }
                            </ul>
                    </div>
                    <div className="email">
                        <h2><a>sihi_imane@gmail.com</a></h2>        
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Contact
