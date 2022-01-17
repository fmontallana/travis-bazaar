import React from "react";
import styled from "styled-components";
import logo from '../Assets/travis-logo.png'
import {FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100vh;
  margin: auto 0;
  overflow-y: hidden;

  img {
    height: 275px;
    width: 275px
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 50px;
    width: 200px;
    border-radius: 10pc;
    border: 1px var(--gray) solid;
    background-color: white;
    color: var(--gray);
    font-size: 1pc;
    transition: transform .5s ease-out;
    
  }

  button:hover {
    border: 1px white solid;
    background-color: var(--blue);
    color: white;
    transform: scale(.98);
    transition: transform .5s ease-out;
  }
`


export default function Login() {
  let navigate = useNavigate()
  return (
    <Wrapper>
      <img src={logo} alt="Travis Bazaar Logo" />

      <button onClick={()=>navigate('/dashboard')} ><FcGoogle size={30}/>Sign with Google</button>
    </Wrapper>
  );
}
