// import React, {Suspense}from 'react'
// import './Song_ListChart.css'

// export default class Song_ListChart extends React.Component{
//     render(){
//         let color = {
//             color: this.props.sttSong_color
//         }
//         return(
//             <div className='song-listchart-full'>
//                 <div className='song-listchart-stt'>
//                     <span style={color}>{this.props.sttSong}</span>
//                 </div>
//                 <img src={this.props.imgSong}/>
//                 <div className='song-listchart-info'>
//                     <a href='#' className='song'>{this.props.nameSong}<br/></a>
//                     <a href='#' className='casi'>{this.props.casi}</a>
//                 </div>
//             </div>
//         );
//     }
// }



import React, {Suspense}from 'react'
import './Song_ListChart.css'

export default class Song_ListChart extends React.Component{
    render(){
        let color = {
            color: this.props.sttSong_color
        }
        return(
            <li>
            <div className='song-listchart-full'>
                <div className='song-listchart-stt'>
                    <span style={color}>{this.props.sttSong}</span>
                </div>
                <img src={'http://localhost:5000/upload/song/' + this.props.Poster}/>
                <div className='song-listchart-info'>
                    <a href='#' className='song'>{this.props.songName}<br/></a>
                    <a href='#' className='casi'>{this.props.Author}</a> 
                </div>
            </div>
            </li>
        );
    }
}