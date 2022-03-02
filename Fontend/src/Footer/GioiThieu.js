import React from 'react'
import './GioiThieu.css'

export default class GioiThieu extends React.Component{
    render(){
        return(
            <div className=''>
                <div className='body-gioithieu'>
                    <form className='form-gioithieu'>
                        <p><span>Đây là Website âm nhạc trong đồ</span><br></br><span>án môn học <span className="gioithieu-span">Internet và Công nghệ Web</span></span></p>
                        <p>Website được tạo nên chỉ nhằm<br></br><span>mục đích phục vụ đồ án môn học, </span><span className='gioithieu-span'>không<br></br><span>kinh doanh, mua bán hay cố tình</span><br></br><span>vi phạm bản quyền từ bất cứ cá nhân</span><br></br>hay tổ chức nào</span></p>
                        <p><span>Mọi thông tin chi tiết vui lòng liên hệ</span><br></br><span>nhóm trưởng <span className='gioithieu-span'>Huỳnh Ngọc Quân</span>,</span><br></br><span>Trường Đại học Công Nghệ Thông Tin UIT,</span><br></br>MSSV: <span className='gioithieu-span'>18521284</span><br></br><span>SĐT: </span><span className="gioithieu-span">0123456789 (Quân)</span></p>
                        <button className='button-gioithieu' >Thoát</button>
                    </form>
                </div>
            </div>
        )
    }
}