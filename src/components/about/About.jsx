import { useNavigate, useLocation } from 'react-router-dom';
import './about.css';
const About = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const shortText = "Dood's wine  უძველეს ტრადიციებზე დაფუძნებული ღვინის მწარმოებელი კომპანიაა, რომელიც მაღალი ხარისხის პროდუქტის წარმოებაზეა ორიენტირებული.";
    const fullText = "Dood's wine  უძველეს ტრადიციებზე დაფუძნებული ღვინის მწარმოებელი კომპანიაა, რომელიც მაღალი ხარისხის პროდუქტის წარმოებაზეა ორიენტირებული. ჩვენი მიზანია მომხმარებელს შევთავაზოთ საუკეთესო ხარისხის ღვინო, რომელიც ასახავს ქართული ღვინის კულტურის მდიდარ ისტორიას და ტრადიციებს. დღესდღეობით, კომპანიის ასორტიმენტი ისეთ პრემიუმ ღვინოებს მოიცავს,  როგორიცაა გორული მწვანე, ჩინური, რქაწითელი, ალადასტური და დირბულა. ხოლო რაც შეეხება ღვინის ბოთლის დიზაინსა და ეტიკეტს, მათზეც ჩვენი გუნდი მუშაობს და რეალობაში გადმოაქვს ის იდეები და სურვილები, რასაც მომხმარებლები ისურვებენ.";
    
    const isFullPage = location.pathname === "/About";
    return (
    <div className="about-container">
      <h2 className="about-title">ჩვენს შესახებ</h2>
      <p className="about-text">{isFullPage ? fullText : shortText}</p>
       {!isFullPage && (
        <button className="toggle-button" onClick={() => navigate("/About")}>
          ვრცლად
        </button>
      )}
    </div>
  );
};

export default About;

