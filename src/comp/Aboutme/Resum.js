import '../index.css';
const Resum = () => {
    return (
        <div id="resum">
            <div className="image-container2">
                <ul className='netmarble'>
                    <img src='/image/container3.png' alt="Your Image" />
                    <div className="text-overlay">
                    <img src='/image/name.png' alt="name" />
                    이름:변승준<br></br>
                    <img src='/image/call.png' alt="call" />
                    연락처: 010-6315-9624  <br></br>
                    <img src='/image/birth.png' alt="birth" />
                    생년월일: 2000.01.06<br></br>
                    <img src='/image/email.png' alt="email" />
                    이메일:byean0106@naver.com<br></br>
                    <img src='/image/address.png' alt="address" />
                    주소:서울특별시 동대문구<br></br>
                    <img src='/image/study.png' alt="study" />
                    최종학력: 가천대 컴퓨터공학과
                    </div>
                </ul></div>
        </div>
    )
}

export default Resum;