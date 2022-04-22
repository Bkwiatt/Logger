import React from 'react'
import styled from 'styled-components'
import hillImage from '../images/hill.png'
import profileImage from '../images/profileImage.png'
import { Link as LinkR } from 'react-router-dom'

const navbar = () => {
    
    return (
        <>
            <Nav>
                {/* <LogoWrapper to="/"> */}
                    <NavLogo src={hillImage} />     
                {/* </LogoWrapper> */}

                    <NavAuthentication>
                        <h3>
                            Brandon Kwiatkowski
                        </h3>
                        <img src={profileImage} />
                    </NavAuthentication>
                
                               
            </Nav>
            
        </>
    )
}

export default navbar


const Nav = styled.nav`
    z-index: 1;
    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(26,28,48,1) 100%, rgba(26,28,48,1) 100%);
    position: sticky;
    top: 0;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
`


const NavLogo = styled.img`
    width: 202px;
    height: 65px;
    cursor: pointer;
`

const LogoWrapper = styled(LinkR)`
    cursor: pointer;
`

const NavAuthentication = styled.div`
   


    img {
        width: 40px;
        border-radius: 50%;
        display: inline-block;
        cursor: pointer;


        &:hover {
            opacity: 0.5;
            width: 42px;
        }
    }

    h3 {
        font-size: 10px;
        display: inline-block;
        margin: auto;
        width: 50%;

    }
`




