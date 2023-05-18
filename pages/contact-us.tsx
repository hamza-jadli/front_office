import Layout from '../layouts/Main';
import Link from 'next/link';
import { useForm } from "react-hook-form";


const ContactPage = () => {
  const { register,  errors } = useForm();

 

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
                  ref={register({
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />

                {errors.email && errors.email.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }

                {errors.email && errors.email.type === 'pattern' && 
                  <p className="message message--error">Please write a valid email</p>
                }
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
  