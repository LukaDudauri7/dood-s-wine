import Slider from "../Slider/Slider.jsx";
import SocialBar from "../SocialBar/SocialBar.jsx";
import './Home.css';
import captions from '../../captions.json';
import { useLanguage } from '../../languageContext';
const Home = () => {
    const { language } = useLanguage();
    const content = captions[language].home;

    return (
        <div>
            <h1>DOOD'S WINE</h1>
            <h2>{content.brandName}</h2>
            <SocialBar />
            <Slider />
        </div>
    );
}

export default Home;
