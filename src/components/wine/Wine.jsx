import './Wine.css';
import captions from '../../captions.json';
import { useLanguage } from '../../languageContext';

const Wine = () => {
  const { language } = useLanguage();
  const content = captions[language].wines;

  const wines = [
    {
      name: content.mtsvane,
      image: '/images/mtsvane.jpg',
      description: content.mtsvaneDesc,
      price: '₾40',
    },
    {
      name: content.rkatsiteli,
      image: '/images/rkatsiteli.jpg',
      description: content.rkatsiteliDesc,
      price: '₾35',
    },
    {
      name: content.chinuri,
      image: '/images/chinuri.jpg',
      description: content.chinuriDesc,
      price: '₾35',
    },
    {
      name: content.aladasturi,
      image: '/images/aladasturi.jpg',
      description: content.aladasturiDesc,
      price: '₾40',
    },
    {
      name: content.dirbula,
      image: '/images/dirbula.jpg',
      description: content.dirbulaDesc,
      price: '₾40',
    },
  ];

  return (
    <div className="wine-page">
      <h1>{content.ourWines}</h1>
      <div className="wine-list">
        {wines.map((wine, index) => (
          <div className="wine-card" key={index}>
            <img src={wine.image} alt={wine.name} />
            <h2>{wine.name}</h2>
            <p>{wine.description}</p>
            <span className="price">{wine.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wine;
