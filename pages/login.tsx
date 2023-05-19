import Layout from '../layouts/Main';
import Link from 'next/link';
// @ts-ignore
import { useForm } from "react-hook-form";
// import { server } from '../utils/server'; 
// import { postData } from '../utils/services'; 

// type LoginMail = {
//   email: string;
//   password: string;
// }

// const resolver = async (values) => {
//   return {
//     values: values.email ? values : {},
//     errors: !values.email
//       ? {
//           email: {
//             type: 'required',
//             message: 'This is required.',
//           },
//         }
//       : {},
//   };
// };

const LoginPage = () => {
  // const { register, handleSubmit, errors } = useForm<LoginMail>(resolver);

  // const onSubmit = async (data: LoginMail) => {
  //   const res = await postData(`${server}/api/login`, {
  //     email: data.email,
  //     password: data.password
  //   });

  //   console.log(res);
  // };

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
            <h2 className="form-block__title">Log in</h2>
          
            <form className="form" /*onSubmit={handleSubmit(onSubmit)} */>
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  placeholder="email" 
                  type="text" 
                  name="email"
                />

                {/* {errors?.email && errors.email.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                }

                {errors?.email && errors.email.type === 'pattern' && 
                  <p className="message message--error">Please write a valid email</p>
                } */}
              </div>
              
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="password" 
                  placeholder="Password" 
                  name="password"
                                 />
                {/* {errors?.password && errors?.password?.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                } */}
              </div>

              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                    <input 
                      type="checkbox" 
                      name="keepSigned" 
                      id="check-signed-in" 
                    />
                    <span className="checkbox__check"></span>
                    <p>Keep me signed in</p>
                  </label>
                </div>
                <a href="/forgot-password" className="form__info__forgot-password">Mot de passe oublié?</a>
              </div>

              <div className="form__btns">
                <button type="button" className="btn-social fb-btn"><i className="icon-facebook"></i>Facebook</button>
                <button type="button" className="btn-social google-btn"><img src="/images/icons/gmail.svg" alt="gmail" /> Gmail</button>
              </div>

              <button type="submit" className="btn btn--rounded btn--yellow btn-submit">S'identifier</button>

              <p className="form__signup-link">Pas encore un membre? <a href="/register">S'inscrire</a></p>
            </form>
          </div>

        </div>
      </section>
    </Layout>
  )
}
  
export default LoginPage
  