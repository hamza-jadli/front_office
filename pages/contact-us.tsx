import Layout from '../layouts/Main';
import Link from 'next/link';
// @ts-ignore
import { useForm } from "react-hook-form";


const ContactPage = () => {

 

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <a><i className="icon-left"></i> Back to store</a>
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title"> Contacter-Nous</h2>
            <p className="form-block__description">Merci de remplir le formulaire suivant pour nous contacter.</p>
            
            <form className="form">
            <div className="form__input-row">
            <input 
                  className="form__input" 
                  placeholder="Nom" 
                  type="text" 
                  
                />
                </div>
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  placeholder="email" 
                  type="text" 
                  name="email"
                 
                />

               
                
              </div>
              
              <div className="form__input-row">
            <input 
                  className="form__input" 
                  placeholder="Message" 
                  type="text" 
                  
                />
                </div>

              

            

              <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Envoyer</button>

            </form>
          </div>

        </div>
      </section>
    </Layout>
  )
}
  
export default ContactPage
  