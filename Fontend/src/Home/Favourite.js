import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SongCompo from './SongCompo'
import './Home.css'
import axios from 'axios';
const getSongData = () => axios.get('http://localhost:5000/dulieu/favourite')
                              .then((res) => res.data )

export default class Favourite extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:null
        }
    }
    componentWillMount() {
        if(this.state.data === null ){
          getSongData().then((response) => {
            this.setState({
              data:response
            });
          })
        }
      }

      printData = () => {
        if (this.state.data !== null){
          return this.state.data.map((value) => 
          (
              <SongCompo
              key={value._id}
                  nameSong = {value.Name}
                  casi = {value.Author}
                  imgSong = {'http://localhost:5000/upload/song/'+ value.Poster}
              />
            )
            
          )
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
            <h2>Favourite</h2>
            <Slider className='slideshow-80' {...settings}>
                {this.printData()}
            </Slider>
        </div>

  );
}
}




