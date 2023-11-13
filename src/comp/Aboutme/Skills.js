import '../index.css';
import image from '../../image/skills.PNG';
const Skills = () => {
    return (
        <div id="skills">
            <div className="image-container3">
                <img src={image} alt="Your Image" />

                <div className="pic-overlay">
                    <img src='' alt="Your Image" />
                </div>
            </div>
        </div>
    )
}

export default Skills;