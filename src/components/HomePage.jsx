import { Container, Row, Col } from 'react-bootstrap'
import Text from '../components/Text'
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import "../pages/style.css";


function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>I'm Ram mohan</h2>
            <h2 className='nametext'>Interests in</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/RamBhai007");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/rammohan-rockz-84622a232/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.instagram.com/i_m_rammohan_rockzz/");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
            <button onClick={() => {
              window.open("https://leetcode.com/RammohanRockz/");
            }}
              className='socailmediabtn'><SiLeetcode className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home