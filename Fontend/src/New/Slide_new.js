import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './New.css'

export default class SlideNew extends React.Component {
    constructor(props){
        super(props);
        this.state={
            imgSinger1:require('../Img/Alan_Walker_2.jpg'),
            imgSinger2:require('../Img/Bich_Phuong_2.jpg'),
            imgSinger3:require('../Img/B_Ray_2.jpg'),
            imgSinger4:require('../Img/Ariana_Grande_2.jpg'),
            imgSinger5:require('../Img/Alan_Walker_2.jpg')
        }
    }
  render(){
    var settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        // dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
        <div className='slidenew-full'>
            <Slider className='slidenew-80' {...settings}>
                <div>
                    <a href=''><img src={this.state.imgSinger1}></img></a>
                </div>
                <div>
                    <a href=''><img src={this.state.imgSinger2}></img></a>
                </div>
                <div>
                    <a href=''><img src={this.state.imgSinger3}></img></a>
                </div>
                <div>
                    <a href=''><img src={this.state.imgSinger4}></img></a>
                </div>
                <div>
                    <a href=''><img src={this.state.imgSinger5}></img></a>
                </div>
            </Slider>
        </div>

  );
}
}




