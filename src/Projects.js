import React from 'react';
import "./Style.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Swiper, SwiperSlide} from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import {EffectCoverflow, Pagination, Navigation} from 'swiper';

import UI from "../res/service/ux-design.png";
import Animate from "../res/service/animate.png";
import Web from "../res/service/development.png";


export default function Projects() {
  return (
    <Container style={{marginTop:"75px"}}>
          <Row>
        <h5 style={{ color: "#C8375C", fontWeight: "bold", marginBottom: "20px" }}> PROJECTS </h5>
          <h3 style={{ fontWeight: "bolder" }}> Projects that I worked </h3>
          </Row>

          <Row>
            <Col md={{span:6, offset:3}}>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={
                    {rotate:0, stretch:0, depth:100, modifier:2.5}
                }
                className='swiper_container'
            >
                <SwiperSlide>
                    <img src={UI} alt='slide_img' className='project_img'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Animate} alt='slide_img' className='project_img'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Web} alt='slide_img' className='project_img'/>
                </SwiperSlide>

                <div className='slider_controler'>
                    <div className='swiper-button-prev slider-arrow'>
                        <Button>Prev</Button>
                    </div>
                    <div className='swiper-button-next slider-arrow'>
                        <Button>Forw</Button>
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
            </Swiper>
            </Col>
          </Row>
    </Container>
  )
}
