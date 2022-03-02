import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Home.css'
import Singer from './Singer'

import axios from 'axios';
const getSongData = () => axios.get('http://localhost:5000/dulieu/singersfav')
                              .then((res) => res.data )

export default class SlideSinger extends React.Component{
    constructor(props){
        super(props);
        this.state ={
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
              <Singer
              key={value._id}
                  nameSinger = {value.Name}
                  imgSinger = {'http://localhost:5000/upload/singer/image/'+ value.Ava}
              />
            )
            
          )
        }
      }
    render(){
        var settings = {
            autoplay: true,
            autoplaySpeed: 2000,
            // dots: true,
            // infinite: true,
            speed: 3000,
            slidesToShow: 3,
            slidesToScroll: 1
          };
        return(
            <div className='slidesinger-full'>
                <Slider className='slidesinger-80' {...settings}>
                    {this.printData()}
                </Slider>
            </div>
        )
    }
}