import Slider from "../Slider/Slider.jsx";
import './Home.css';
const Home = () => {
    return (
        <div>
            {/* <h2>Home Page</h2> */}
            <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">ღვინო - საუკეთესო საჩუქარი</h1>
                <p className="hero-subtitle">
                აღმოაჩინე ჩვენს მიერ დამზადებული საუკეთესო ღვინოები.
                </p>
                <button className="hero-button">სრულად ნახე</button>
            </div>
            </section>
            <Slider />
        </div>
    );
}

export default Home;
