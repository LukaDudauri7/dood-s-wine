import Slider from "../Slider/Slider.jsx";
import './Home.css';
const Home = () => {
    return (
        <div>
            <h1>DOOD'S WINE</h1>
            <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">ღვინო - საუკეთესო საჩუქარი</h1>
                <p className="hero-subtitle">
                აღმოაჩინე ჩვენს მიერ დამზადებული საუკეთესო ღვინოები.
                </p>
            </div>
            </section>
            <Slider />
        </div>
    );
}

export default Home;
