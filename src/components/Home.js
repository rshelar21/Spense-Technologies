import React from 'react'
import styled from 'styled-components'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import map from '../images/maps.webp' 
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';



const Home = () => {
  return (
    <>
    <Section>
    <Main>
    <Container>

    <Buttons>
    <button>
        <CalendarMonthIcon/>
        <span>Check in</span>
        <ExpandMoreIcon/>
    </button>
    <button>
    <CalendarMonthIcon/>
        <span>Check Out</span>
        <ExpandMoreIcon/>
    </button>

    <button>
        <span>3 adults . 0 children . 2 rooms</span>


    <Box>
    
    <ul>
        <li>
            <div>
                <h3>Rooms</h3>
                <Icons>
                <RemoveCircleOutlineIcon/>
                <span>1</span>
                <RemoveCircleOutlineIcon/>
                </Icons>
            </div>
            <p>(Max & Lorem ipsum dolor sit. )</p>
        </li>
        <li>
            <div>
                <h3>Adults</h3>
                <Icons>
                <RemoveCircleOutlineIcon/>
                <span>1</span>
                <RemoveCircleOutlineIcon/>
                </Icons>
            </div>
            <p>(Max & Lorem ipsum dolor sit. )</p>
        </li>
        <li>
            <div>
                <h3>Children</h3>
                <Icons>
                <RemoveCircleOutlineIcon/>
                <span>1</span>
                <RemoveCircleOutlineIcon/>
                </Icons>
            </div>
            <p>(Max & Lorem ipsum dolor sit. )</p>
        </li>
    </ul>

    <Btn>
    <View>
    <Cir3>
        V
    </Cir3>
    </View>
    <button>
    
    Done
    </button>
    </Btn>
    </Box>

    </button>

    

    </Buttons>

    <Check>
    <button>
    Check Availabilty
    </button>
    </Check>
    </Container>
    </Main>

    <About>

    <Img>
    <LeftBg>
    <img src={img2} alt="" />
    <Circle>
    <Cir1>
V
    </Cir1>
    <Cir2>
R
    </Cir2>
    </Circle>
    </LeftBg>


    <RightBg>
    <div>
    <img src={img3} alt="" />
    </div>
    <div>
    <img src={img4} alt="" />
    </div>
    <div>
    <img src={img4} alt="" />
    </div>
    <div>
    <img src={img3} alt="" />
    </div>
    </RightBg>
    </Img>

    <Hotel>
    <div>
    <h1>Hotel Vishal @Airport</h1>
    <p>104/2/2, National Highway 8, Mahapapur, New <a>View Map</a></p>
    <p>Delhi, 110037 New Delhi, India</p>
    <p>+91-7654564545, 8107244682</p>
    </div>

    <MapImg>
    <img src={map} alt="" />
    </MapImg>
    </Hotel>

    <Description>
    <div>
        <ul>
            <li>Free Parking</li>
            <li>Conference Room</li>
            <li>ATM</li>
            <li>Conference Room</li>
            <li>Conference Room</li>
        </ul>
    </div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates magni architecto, ullam dolor atque non quo modi aut sint tenetur voluptatum illum magnam odio accusamus soluta id eius beatae pariatur.non quo modi aut sint tenetur voluptatum illum magnam odio accusamus soluta id eius beatae pariatur soluta id eius beatae pariatur.</p>
    </Description>


    </About>

    <Footer>
    <h3>Property Rules</h3>
    <p>Check-in 12PM Check-out 12PM</p>

    <Rules>
        <Rule1>
            <ul>
                <li>Guests with are not allowed</li>
                <li>Guests with are not allowed</li>
                <li>Guests with are not allowed</li>
                <li>Guests with are not allowed</li>
                <li>Guests with are not allowed</li>
                <li>Pets are not allowed</li>
                <li>Outside food is not allowed</li>
                <li>Smoking within the premisses is not allowed</li>
                <li>Does not allow private parties or events</li>
                <li>Quarantine protocols are being followed as per local government authorities</li>
                <li>Guest with 18 years of age not allowed at the property</li>
            </ul>
        </Rule1>
        <Rule2>
        <ul>
        <li>Pets are not allowed</li>
        <li>Outside food is not allowed</li>
        <li>Smoking within the premisses is not allowed</li>
        <li>Does not allow private parties or events</li>
        <li>Quarantine protocols are being followed as per local government authorities</li>

        </ul>
            
            
        </Rule2>
    </Rules>

    </Footer>





    </Section>


      
    </>
  )
}
const Section = styled.div``

const Main = styled.main`
width: 100%;
background-image: linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url(${img1});
background-size: cover;
background-position: center;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-repeat: no-repeat;
z-index: -1;
`


const Container = styled.div`
display: flex;
align-items: center;
gap: 20px;
@media (max-width: 768px) {
    flex-direction: column;
}
`

const Buttons = styled.div`
position: relative;
display: flex;
align-items: center;
border-radius: 5px;
/* overflow: hidden; */
height: 55px;
button{
    position: relative;
    border: none;
    outline: none;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    height: 100%;
    border-right: 1px solid rgba(0,0,0,0.2);

    &:nth-child(3) {
        padding-inline : 30px;
    }
}

  
span{
    font-size: 15px;
    font-weight: 500;
}
.MuiSvgIcon-root {
    color: rgba(0,0,0,0.7);
}

`

const Check = styled.div`
height: 55px;
button{
    height: 100%;
    border: none;
    outline: none;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #e0c307;
    font-size: 15px;
    font-weight: 500;
}
`

const About = styled.div`
/* background-color: red; */
width: 100%;
max-width: 1120px;
/* height: 500px; */
margin: 0 auto;
margin-top: 30px;
padding-bottom: 50px;
border-bottom: 1px solid rgba(0,0,0,0.5);
@media (max-width: 768px) {
    /* width: 100%;
    max-width: 100%; */
}
`;


const Img = styled.div`
display: flex;
gap: 15px;
position: relative;
/* background-color: red; */
/* height: 350px; */
@media (max-width: 1150px) {
    /* margin: 0 10px; */
}
@media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    /* margin: 0 10px; */
 
}
`

const LeftBg = styled.div`
width: 50%;
position: relative;
height: 100%;
border-radius: 10px;
overflow: hidden;
position: relative;
/* background-color: green; */
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
@media (max-width: 768px) {
    width: 100%;
    
}
`

const Circle = styled.div`
position:   absolute;
top: 30%;
left: 10px;
width: 230px;
height: 230px;
border-radius: 50%;
background-color: #fff;
text-align: center;
`
const Cir1 = styled.div`
text-align: center;
border-radius: 50%;
background-color: lightgreen;
width: 100px;
height: 100px;
position: relative;
top: 15%;
left: 20%;
display: flex;
align-items: center;
justify-content: center;
font-size: 45px;
font-weight: 600;
color: #fff;
`
const Cir2 = styled.div`
border-radius: 50%;
background-color: #ebd61c;
width: 100px;
height: 100px;
position: relative;
top: 0%;
left: 40%;
border: 5px solid #fff;
display: flex;
align-items: center;
justify-content: center;
font-size: 45px;
font-weight: 600;
color: #fff;
`

const RightBg = styled.div`
width: 50%;
position: relative;
height: 100%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 15px;
grid-row-gap: 15px;
div {
    width: 100%;
    height: 100%;
    max-height: 176px;
    background-color: green;
    border-radius: 10px;
    overflow: hidden;

    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    /* border-radius: 5px; */
} 
}

@media (max-width: 768px) {
    width: 100%;
    
}

`;

const Hotel = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 30px;
color: #0e1663;
h1 {
    font-size: 25px;
}
p {
    font-size: 15px;
    line-height: 1.4;
}
a {
    color: blue;
    text-decoration: underline;
    margin-left: 15px;
}
@media (max-width: 768px) {
    flex-direction: column;
}
`;



const MapImg = styled.div`
height: 100%;
width: 100%;
max-width: 200px;
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
`;

const Description = styled.div`
width: 100%;
color: #121d82;
ul {
    display: flex;
    align-items: center;
    gap: 35px;
    margin-left: 15px;
    li {
        font-size: 15px;
        font-weight: 500;
    }
}
`;


const Footer = styled.div`
width: 100%;
max-width: 1120px;
margin: 0 auto;
margin-top: 30px;
margin-bottom: 50px;
/* height: 500px; */
color: #121d82;

`;


const Rules = styled.div`
/* background-color: blue; */
display: flex;
align-items: flex-start;
gap: 15px;
margin-top: 5px;
/* align-items: center; */
/* justify-content: space-between; */

@media (max-width: 768px) {
    flex-direction: column;
}

`;

const Rule1 = styled.div`
ul {
    margin-left: 25px;
}
li {

}
/* background-color: red; */
`
const Rule2 = styled.div`
@media (max-width: 768px) {
    ul {
    margin-left: 25px;
}
}

/* background-color: green; */
`;


const Box = styled.div`
position: absolute;
background-color: #fff;
/* height: 300px; */
width: 100%;
top: 55px;
right: 0;
z-index: 100;
padding: 15px;

li {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px 0;

    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    p {
        font-size: 10 px;
    }
}

`;

const Icons = styled.p`
/* display: unset; */
/* width: fit-content; */
display: flex;
align-items: center;
font-size: 10px;
`;


const Btn = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
button {
    text-align: center;
    padding: 10px 25px;
    border: 2px solid #121d82;
    background-color: transparent;
    border-radius: 5px;
    color: #121d82;
    font-size: 15px;
    font-weight: 600;
}

`;

const View = styled.div`
width: 130px;
height: 130px;
position: absolute;
top: 10%;
left: 60%;
background-color: #fff;
border-radius: 50%;
z-index: 999;
border-bottom-left-radius: 0;
box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
display: flex;
align-items: center;
justify-content: center;

`;

const Cir3 = styled(Cir1)`
width: 100px;
height: 100px;
left: 0;
top: 0;
position: relative;
`;
export default Home
