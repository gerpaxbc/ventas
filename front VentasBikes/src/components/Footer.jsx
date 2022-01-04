import React from 'react'
import facebook from '../images/facebook.png'
import tweeter from '../images/tweeter.png'
import insta from '../images/insta.png'

export default function Footer() {
    return (
        <div>
            <div className="footer">
                <div>
                    <h1>The Bike</h1>
                </div>

                <div>
                    <a target="_blank"  href="https://www.facebook.com/" rel="noreferrer">
                        <img src={facebook} alt="facebook" />
                    </a>    
                </div>
                
                <div>
                    <a target="_blank"  href="https://twitter.com/tweeter?lang=es" rel="noreferrer">
                        <img src={tweeter} alt="tweeter" />
                    </a>    
                </div>
                
                <div>
                    <a target="_blank" href="https://www.instagram.com/?hl=es-la" rel="noreferrer">
                        <img src={insta} alt="instagram" />
                    </a>    
                </div>
                Powered by, Gerardo Paxtian Torres, Ucamper 2021
            </div>
            
        </div>
    )   
}
