import React from "react";
import Playlist from 'react-mp3-player';
import './Home.css'

const tracks = [
  { 
  img: require('../musictest/sontung.jpg'), 
  desc: 'Em Của Ngày Hôm Qua',
  name:'Sơn Tùng M-TP', 
  src:require('../musictest/sontung.mp3')
  },
  { 
    img: require('../musictest/adele.jpg'), 
    desc: 'Set Fire To The Rain',
    name:'Adele', 
    src:require('../musictest/adele.mp3')
    },
    { 
      img: require('../musictest/bichphuong.jpg'), 
      desc: 'Có Khi Nào Rời Xa',
      name:'Bích Phương', 
      src:require('../musictest/bichphuong.mp3')
      },
];


const playlistOverideStylingOpts = {
offset : {
left : -20
},
breakpoint : {
maxWidth : 11000
}
};

// tracks={tracks} opts={playlistOverideStylingOpts}

export default class Player extends React.Component {
  render() {
      return (
        <div>
          <Playlist tracks={tracks} opts={playlistOverideStylingOpts}></Playlist>
        </div>
      )
  }
}