import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'

import axios from 'axios';
const getSongData = () => axios.get('http://localhost:5000/dulieu/top5new')
                              .then((res) => res.data )

export default class Poster extends React.Component {
    constructor(props){
        super(props);
        this.state={
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
            <div>
                <a href=''><img src={'http://localhost:5000/upload/song/' +value.Poster}></img></a>
            </div>
            )
          )
        }
      }
  render(){
    console.log(this.state.data);
    var settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        // dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    
  return (
        <div className='poster-full'>
            <Slider className='poster-80' {...settings}>             
                {this.printData()}                
            </Slider>
        </div>

  );
}
}




