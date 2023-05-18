import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('https://www.christianwebhost.com/blog/wp-content/uploads/2018/07/Image_1-1-1024x716.jpeg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>The best-selling books</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>emprunter</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('https://www.independent.com/wp-content/uploads/2021/07/books-1149959_1920.jpg?fit=1920%2C1280')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Read from the comfort of your home</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>emprunter</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Accessibilité </h4>
                <p>Vous pouvez accéder à la bibliothèque à tout moment 24h/24 et 7j/7 </p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>L'espace</h4>
                <p>Économie d'espace physique</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Mobilité </h4>
                <p>Vous pouvez lire des livres en ligne sur différents appareils tels que des ordinateurs</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro