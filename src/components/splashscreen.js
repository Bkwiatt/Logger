import React from 'react'
import styled from 'styled-components'
import myVid2 from '../videos/mw-viewer-video.mp4'
import myVid3 from '../videos/HFP.mp4'
import myVid4 from '../videos/ChicagoFlyBy.mp4'
import myVid5 from '../videos/FabShop.mp4'
import myVid6 from '../videos/discharge.mp4'
import myImg2 from '../images/modernwarfare.png'


import hillImage from '../images/hill.png'
import { Link } from "react-router-dom"

const SplashScreen = () => {
    
    return (
        <>
            <Logo src={hillImage} />

           <Container>
            <Wrap to="/To-do">
                <video autoPlay muted loop>
                    <source src={myVid4} type="video/mp4" />
                </video>
                <img src={myImg2} alt='viewerimg'/>                
            </Wrap>
            <Wrap to="/job-board">
                <video autoPlay muted loop>
                    <source src={myVid3} type="video/mp4" />
                </video>
                <img src={myImg2} alt='viewerimg' />
            </Wrap>
            <Wrap to="/Builder"> 
                <video autoPlay muted loop>
                    <source src={myVid6} type="video/mp4" />
                </video>
                <img src={myImg2} alt='viewerimg'/>                
            </Wrap>

            <Wrap to="/Picklist"> 
                <video autoPlay muted loop>
                    <source src={myVid5} type="video/mp4" />
                </video>
                <img src={myImg2} alt='viewerimg'/>                
            </Wrap>

            <Wrap to="/"> 
                <video autoPlay muted loop>
                    <source src={myVid2} type="video/mp4" />
                </video>
                <img src={myImg2} alt='viewerimg'/>                
            </Wrap>

            <Wrap to="/"> 
                <video autoPlay muted loop>
                    <source src={myVid2} type="video/mp4" />
                </video>
                <img src={myImg2} alt='viewerimg'/>                
            </Wrap>
            
        </Container>  
        </>
       
    )
}

export default SplashScreen


const Logo = styled.img`
    width: 310px;
    height: 110px;
    cursor: pointer;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
`

const Container = styled.div`
    margin-top: 120px;
    justify-content: center;
    display: grid;
    grid-gap: 25px;
    padding: 30px 0 26px;
    grid-template-columns: repeat(3, 400px);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
`

const Wrap = styled(Link)`
    position: relative;
    cursor: pointer;
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        filter: brightness(0) invert(1);


        &:hover {
            filter: brightness(0) invert(0);
        }
    }
    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 0.3s;
       
    }
    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        
        video {
            opacity: 1;
        }
        
   }
`
