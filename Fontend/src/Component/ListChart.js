import React from 'react'
import Song_ListChart from './Song_ListChart'
import './ListChart.css'


import axios from 'axios';
const getSongData = () => axios.get('http://localhost:5000/dulieu/top5listen')
                              .then((res) => res.data )

// const arrColor = ['#E4340E','#EBB643','#8712E2','#4E6EA9','#50D3B9']
// const to='#E4340E'
// const index=0

export default class ListChart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           data:null,
           top1 :
                {
                    sttSong :'01',
                    sttSong_color: '#E4340E',
                },
            top2 :
                {
                    sttSong :'02',
                    sttSong_color: '#EBB643',
                },
            top3 :
                {
                    sttSong :'03',
                    sttSong_color: '#8712E2',
                },
            top4 :
                {
                    sttSong :'04',
                    sttSong_color: '#4E6EA9',
                },
            top5 :
                {
                    sttSong :'05',
                    sttSong_color: '#50D3B9',
                }
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
            return(
              <div>
                <Song_ListChart Author = {this.state.data[0].Author}
                                Poster = {this.state.data[0].Poster}
                                songName = {this.state.data[0].Name}
                                sttSong = {this.state.top1.sttSong}
                                sttSong_color = {this.state.top1.sttSong_color}
                />
                <Song_ListChart Author = {this.state.data[1].Author}
                                Poster = {this.state.data[1].Poster}
                                songName = {this.state.data[1].Name}
                                sttSong = {this.state.top2.sttSong}
                                sttSong_color = {this.state.top2.sttSong_color}
                />
                <Song_ListChart Author = {this.state.data[2].Author}
                                Poster = {this.state.data[2].Poster}
                                songName = {this.state.data[2].Name}
                                sttSong = {this.state.top3.sttSong}
                                sttSong_color = {this.state.top3.sttSong_color}
                />
                <Song_ListChart Author = {this.state.data[3].Author}
                                Poster = {this.state.data[3].Poster}
                                songName = {this.state.data[3].Name}
                                sttSong = {this.state.top4.sttSong}
                                sttSong_color = {this.state.top4.sttSong_color}
                />
                <Song_ListChart Author = {this.state.data[4].Author}
                                Poster = {this.state.data[4].Poster}
                                songName = {this.state.data[4].Name}
                                sttSong = {this.state.top5.sttSong}
                                sttSong_color = {this.state.top5.sttSong_color}
                />
              </div>
            )

          // return this.state.data.map((value) => 
          // (
          //     <Song_ListChart
          //     key={value._id}
          //         sttSong_color={this.state.color.c1}
          //         sttSong={to1}
          //         songName = {value.Name}
          //         Author = {value.Author}
          //         Poster = {value.Poster}
          //     />
          //   )
            
          // )
        }
      }

    render(){
      console.log(this.state.data);
        return(
            <div className='listchart-full'>
                <ul>
                   {this.printData()}
                </ul>
                <br/>
                <a className='hearitall' href='#'>Hear it all</a>
            </div>
        );
    }
}




// export default class ListChart extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             top1 :
//                 {
//                     sttSong :'01',
//                     sttSong_color: '#E4340E',
//                     imgSong : require('../Img/bg_chart.jpg'),
//                     nameSong :'Gặp Nhưng Không Ở Lại',
//                     casi :'Hiền Hồ'
//                 },
//             top2 :
//                 {
//                     sttSong :'02',
//                     sttSong_color: '#EBB643',
//                     imgSong : require('../Img/bg_chart.jpg'),
//                     nameSong :'Hôm Này Em Cưới Rồi',
//                     casi :'Thanh Hưng'
//                 },
//             top3 :
//                 {
//                     sttSong :'03',
//                     sttSong_color: '#8712E2',
//                     imgSong : require('../Img/bg_chart.jpg'),
//                     nameSong :'Thuận Theo Ý Trời',
//                     casi :'Bùi Anh Tuấn'
//                 },
//             top4 :
//                 {
//                     sttSong :'04',
//                     sttSong_color: '#4E6EA9',
//                     imgSong : require('../Img/bg_chart.jpg'),
//                     nameSong :'Ta Sẽ Đi Cùng Nhau',
//                     casi :'Đen Vâu'
//                 },
//             top5 :
//                 {
//                     sttSong :'05',
//                     sttSong_color: '#50D3B9',
//                     imgSong : require('../Img/bg_chart.jpg'),
//                     nameSong :'Tình Yêu Khủng Long',
//                     casi :'Thanh Duy'
//                 }
//         }
//     }
//     render(){
//         return(
//             <div className='listchart-full'>
//                 <ul>
//                     <li><Song_ListChart 
//                             sttSong={this.state.top1.sttSong}
//                             sttSong_color={this.state.top1.sttSong_color}
//                             imgSong={this.state.top1.imgSong}
//                             nameSong={this.state.top1.nameSong}
//                             casi={this.state.top1.casi}>
//                         </Song_ListChart>
//                     </li>
//                     <li><Song_ListChart 
//                             sttSong={this.state.top2.sttSong}
//                             sttSong_color={this.state.top2.sttSong_color}
//                             imgSong={this.state.top2.imgSong}
//                             nameSong={this.state.top2.nameSong}
//                             casi={this.state.top2.casi}>
//                         </Song_ListChart>
//                     </li>
//                     <li><Song_ListChart 
//                             sttSong={this.state.top3.sttSong}
//                             sttSong_color={this.state.top3.sttSong_color}
//                             imgSong={this.state.top3.imgSong}
//                             nameSong={this.state.top3.nameSong}
//                             casi={this.state.top3.casi}>
//                         </Song_ListChart>
//                     </li>
//                     <li><Song_ListChart 
//                             sttSong={this.state.top4.sttSong}
//                             sttSong_color={this.state.top4.sttSong_color}
//                             imgSong={this.state.top4.imgSong}
//                             nameSong={this.state.top4.nameSong}
//                             casi={this.state.top4.casi}>
//                         </Song_ListChart>
//                     </li>
//                     <li><Song_ListChart 
//                             sttSong={this.state.top5.sttSong}
//                             sttSong_color={this.state.top5.sttSong_color}
//                             imgSong={this.state.top5.imgSong}
//                             nameSong={this.state.top5.nameSong}
//                             casi={this.state.top5.casi}>
//                         </Song_ListChart>
//                     </li>
//                 </ul>
//                 <br/>
//                 <a className='hearitall' href='#'>Hear it all</a>
//             </div>
//         );
//     }
// }