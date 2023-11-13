import React from "react";
import './index.css';

function Home() {
  return (
    <div >


      <div className="image-container">
        <ul className='netmarble'>
          <img src='../image/container1.png' alt="Your Image" />
          <div className="text-overlay">안녕하세요.<br></br>
            성장해가는 풀스택 개발자 변승준입니다.<br></br>
            {' '}<br></br>
            항상 겸손한 자세로 노력하면서 꾸준히 배우는 것이 <br></br>저의 성격이자 장점입니다.<br></br> {' '}<br></br>
            주어진 것에 최선을 다하며 성장해나가겠습니다.</div></ul></div>

    </div>

  )
}

export default Home;
