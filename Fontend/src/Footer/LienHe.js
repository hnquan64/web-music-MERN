import React from 'react'
import './LienHe.css'

export default class LienHe extends React.Component{
    render(){
        return(
            <div className='Bg_LienHe'>
                <div className="Noi_Dung_LienHe">
                    <h1 align='center'>Liên hệ</h1>                        
                    <p>Văn phòng GoPro</p>
                    <p>Trường Đại học Công nghệ Thông tin, đường Song Hành, khu phố 6, quận Thủ Đức, thành phố Hồ Chí Minh.</p>
                    <p>Các vấn đề liên quan đến tài khoản VIP hoặc lỗi khi sử dụng, vui lòng liên hệ qua tài khoản Zalo 0917789923.</p>
                    <p>Các vấn đề phân phối nội dung và hợp tác kinh doanh, vui lòng liên hệ GoPro@gmail.com.vn </p>
                    <p>Quảng cáo trên Zing MP3, vui lng liên hệ GoPro</p>
                    <p>Liên hệ với chúng tôi:</p>
                    <p>Chúng tôi luôn ghi nhận các đóng góp ý kiến của bạn để cải tiến và nâng cấp sản phẩm Zing MP3 ngày một hoàn thiện và hữu ích hơn. Đừng ngại chia sẻ ý tưởng cho chúng tôi.</p>
                    <div className='lienhe-form'>
                        <form  action="" medthod="post">
                            <table>
                                <tr>
                                    <td>
                                        Họ tên<span>*</span>
                                    </td>
                                    <td>
                                        <input className="nhapthongtin" type="text" id="hoten" required />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Số điện thoại<span>*</span>
                                    </td>
                                    <td>
                                        <input className="nhapthongtin" type="text" id="sdt" required />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Email<span>*</span>
                                    </td>
                                    <td>
                                        <input className="nhapthongtin" type="text" id="email" required />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Liên quan đến<span>*</span>
                                    </td>
                                    <td>
                                        <select class="lienquanden" required>
                                            <option value="-1">Chọn vấn đề cần liên hệ</option>
                                            <option value="1">Báo lỗi</option>
                                            <option value="2">Góp ý sản phẩm</option>
                                            <option value="3">Gia hạn, mua vip</option>
                                            <option value="4">Phát hành nội dung</option>
                                            <option value="5">Hợp tác nội dung</option>
                                            <option value="6">Vấn đề khác</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Nội dung<span>*</span>
                                    </td>
                                    <td>
                                        <textarea className="lienhe-textarea"  name="noidung" type="text" id="ykien" required></textarea>
                                    </td>
                                </tr>
                            </table>
                            <input className="lienhe-button" type="submit"/>
                        </form>
                   </div>
                </div>
                </div>
        )
    }
}