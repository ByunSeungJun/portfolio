import '../index.css';
import container3 from '../../image/container3.PNG';
import name from '../../image/name.PNG';
import call from '../../image/call.PNG';
import birth from '../../image/birth.PNG';
import email from '../../image/email.PNG';
import address from '../../image/address.PNG';
import study from '../../image/study.PNG';
const Resum = () => {
    return (
        <div id="resum">
            <div className="image-container2">
                <ul className='netmarble'>
                    <img src={container3} alt="Your Image" />
                    <div className="text-overlay">
                    <img src={name} alt="name" />
                    이름:변승준<br></br>
                    <img src={call} alt="call" />
                    연락처: 010-6315-9624  <br></br>
                    <img src={birth} alt="birth" />
                    생년월일: 2000.01.06<br></br>
                    <img src={email} alt="email" />
                    이메일:byean0106@naver.com<br></br>
                    <img src={address} alt="address" />
                    주소:서울특별시 동대문구<br></br>
                    <img src={study} alt="study" />
                    최종학력: 가천대 컴퓨터공학과
                    </div>
                </ul></div>
        </div>
    )
}

export default Resum;