import React from 'react'
import styled from 'styled-components'



const Navbar = () => {
  return (
    <>
    <Nav>
        <h2>Sample Logo</h2>
        <p>Need help? Call 8107344682</p>
    </Nav>
      
    </>
  )
}

const Nav = styled.nav`
background-color: #fff;
height: 50px;
z-index: 999;
position: fixed;
top: 0;
left: 0;
right: 0;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 30px;

h2 {
    background: linear-gradient(to right, #b92b27, #1565c0);
    /* background: linear-gradient(to right, #f32170, #ffeb07, #2169f3, #ff00eb); */
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

   
}
p{
    color: #121d82;
    /* font-weight: 500; */
    font-size: 13px;
}

`

export default Navbar
