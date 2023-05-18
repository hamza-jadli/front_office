import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article style={{backgroundImage: 'url(https://assets.aboutamazon.com/dims4/default/2760c62/2147483647/strip/true/crop/1919x1080+1+0/resize/1320x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fcb%2F3b%2Fcd5a2b1b47b0958509fc9f767d15%2Fbook-hero-1.jpg)'}} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>New Books are now in!</h3>
              <a href="/products" className="btn btn--rounded">Show Collection</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(https://lh5.googleusercontent.com/0GMDYtCdNAoyIK0-995gbpiP4tvvFfs3OkFGzvAG_DF7r81-m2ot5CUMjHnc8uA3SQn2BwKlSt5IMaeGjG2hHT15STvrE33WWluzHF6uaWwJOIH3bRidyxdI2O6YUxog8I7OlV6u=w400-h300)'}} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>The coumpond effect <br/>29,99 MAD</h3>
              <a href="#" className="btn btn--rounded">More details</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1470082995i/29056083.jpg)'}} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>Harry Potter</h3>
              <a href="#" className="btn btn--rounded">VIEW ALL</a>
            </div>
          </article>
        </div>
      </section>

     

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage