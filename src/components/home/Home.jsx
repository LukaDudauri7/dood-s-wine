import { motion } from 'framer-motion';
import Slider from "../Slider/Slider.jsx";
import SocialBar from "../SocialBar/SocialBar.jsx";
import './Home.css';
import captions from '../../captions.json';
import { useLanguage } from '../../languageContext';

const Home = () => {
    const { language } = useLanguage();
    const content = captions[language].home;

    return (
        <div className="home-container">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="home-title"
            >
                DOOD'S WINE
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="home-subtitle"
            >
                {content.brandName}
            </motion.h2>

            <SocialBar />
            <Slider />
        </div>
    );
};

export default Home;
