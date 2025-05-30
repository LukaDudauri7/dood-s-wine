import { useNavigate, useLocation } from 'react-router-dom';
import captionsData from '../../captions.json';
import './about.css';
const About = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const isFullPage = location.pathname === "/About";
    return (
    <div className="about-container">
      <h2 className="about-title">{captionsData.about.title}</h2>
      <p className="about-text">{isFullPage ? captionsData.about.fullText : captionsData.about.shortText}</p>
       {!isFullPage && (
        <button className="toggle-button" onClick={() => navigate("/About")}>{captionsData.about.seeMore}</button>
      )}
    </div>
  );
};

export default About;

