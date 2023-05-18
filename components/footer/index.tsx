import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> <span>B</span>-ibliotheque</h6>
            <p>La bibliothèque en ligne est une plateforme virtuelle qui offre un accès numérique à une vaste collection de livres, de revues, de magazines et d'autres ressources de lecture. Elle permet aux utilisateurs de consulter, emprunter ou acheter des livres au format électronique et de les lire sur différents appareils tels que des ordinateurs, des tablettes ou des smartphones.</p>
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>NOUS CONTACTER</li>
              <li>Gsm : 06 01 01 01 01</li>
              <li>Tél : 08 08 08 08 08</li>
              <li>Adresse : Casablanca</li>
              <li>Email : bibliotheque.sarl@gmail.com</li>
            </ul>
            <ul>
              <li>REGARDÉ RÉCEMMENT</li>
              <li>aucun produit</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <p>© 2023 Bibiotheque. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer