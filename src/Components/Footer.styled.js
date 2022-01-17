import React from 'react'
import styled from 'styled-components'

export const FooterContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
height: 50px;
width: 360px;
padding: 0 20px;
position: fixed;
bottom: 0;
background-color: white;
z-index: 10;

    a {
        color: #516365;
    }
    a:visited {
        color: #516365;
    }
    a:active {
        color: var(--blue);
    }
    a:hover {
        color: var(--blue);
    }
`
