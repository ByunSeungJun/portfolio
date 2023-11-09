import '../index.css';
const Java = () => {
   
    const imagestyle = {
        width: '380px',
        height: '400px',

    }
    const imagestyle2 = {
        width: '130px',
        height: '130px',

    }
   
    return (
        <div id="react1">
            <div className="image-container5">
                <img src='/image/pre.png' alt="pre" style={imagestyle} />
            </div>

            <div className="image-container6">
                <img src='/image/image.png' alt="already" style={imagestyle} />
            </div>
            <div className="image-container7">
                <img src='/image/jsicon.png' alt="js" style={imagestyle2} />
            </div>
            <div className="P1text">
            노션을 통해 수업시간에 배운 내용들을 학습공동체 <br></br>
            조원들과 복습, 예습하였고<br></br>
이를 바탕으로 실제 존재하는 웹사이트를 클론코딩하여 <br></br>
개발해 볼 예정이다.
            </div>
        </div>
        

    )
}

export default Java;