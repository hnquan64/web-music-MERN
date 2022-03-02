import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SongCompo from './SongCompo'

import './Home.css'

export default class SlideSong extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            recent1:{
                imgSong: require('../Img/bg_chart.jpg'),
                nameSong:'11',
                casi:'1'
            },
            recent2:{
                imgSong: require('../Img/bg_chart.jpg'),
                nameSong:'Gặp Nhưng Không Ở Lại hahahaahahaha',
                casi:'Hiền Hồ'
            }
        }
    }
  render(){
    var settings = {
        // autoplay: true,
        // autoplaySpeed: 2000,
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
  return (
        <div className='slideshow-full'>
            <h2>{this.props.Title}</h2>
            <Slider className='slideshow-80' {...settings}>
                <SongCompo  nameSong={this.state.recent2.nameSong}
                            imgSong={this.state.recent2.imgSong}
                            casi={this.state.recent2.casi}></SongCompo>
                <SongCompo  nameSong={this.state.recent2.nameSong}
                            imgSong={this.state.recent2.imgSong}
                            casi={this.state.recent2.casi}></SongCompo>
                <SongCompo  nameSong={this.state.recent2.nameSong}
                            imgSong={this.state.recent2.imgSong}
                            casi={this.state.recent2.casi}></SongCompo>
                <SongCompo  nameSong={this.state.recent2.nameSong}
                            imgSong={this.state.recent2.imgSong}
                            casi={this.state.recent2.casi}></SongCompo>
                <SongCompo  nameSong={this.state.recent2.nameSong}
                            imgSong={this.state.recent2.imgSong}
                            casi={this.state.recent2.casi}></SongCompo>
            </Slider>
        </div>

  );
}
}




