import { Link } from 'react-router-dom';
import '../CSS/OurServices.css';
import data from '../JSON/data.json';
import ScrollToTop from '../components/ScrollToTop';

function OurServices (): JSX.Element {
    // * this variable "path" is for deploy
    const path: string = '/sample-KT';

    const products = data.products;
    console.log(products);
    return(
        <div className="our-services-container">
            <h1 className='our-services-title'>Our Services</h1>
            <article className='our-services-introduce'>
                <h2 className='title'>Our Proficient Processes &amp; Rich Variety of Textiles</h2>
                <p className='a'>We service the North American region and expanding there. Our four step process find the best textile efficiently and problem-free. We can suggest different types of textile, so don't hesitate to ask us for assistance. You will find great satisfaction in your products using our textiles.</p>
            </article>
            <img src='images/IMG_how_it_works.png' alt='How it works'></img>
            <div className='recommendation-container'>
                <h2>Recommendation</h2>
                <p>Could you please introduce hi qualities from TOA BO. TOA BO is a one of big fabric maker (established 1922) in Japan. They provide high and luxury qualities, and they have high good reputations from many apparels and designers.You can get the high qualities from our site only. If you are interested in, we'll be able to send you short cuttings or swatch card by parcel cost free.If you have any questions, please do not hesitate to ask us.</p>
                <div className='sale-container'>
                    <span className='text'>Now on Sale</span>
                    <div className='sale-section'>
                        <div className='now-on-sale'>
                            <img src='images/sample-image/IMG_k129b.jpg' alt='k129b' />
                            <span className='sale-item-name'>100% wool knit</span>
                            <div className='sale-item-price'>
                                <span className='sale-item-base'>5,500 JPY/m</span>
                                <span className='sale-item-sale-price'>4,000 JPY/m</span>
                            </div>
                        </div>
                        <div className='now-on-sale'>
                            <img src='images/sample-image/IMG_k129b.jpg' alt='k129b' />
                            <span className='sale-item-name'>100% wool knit</span>
                            <div className='sale-item-price'>
                                <span className='sale-item-base'>5,500 JPY/m</span>
                                <span className='sale-item-sale-price'>4,000 JPY/m</span>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', margin:'auto'}}>
                        <Link to={path + '/toabo-products'} className='link btn-explore'>Explore More</Link>
                    </div>
                </div>
            </div>
            <div className='products-container'>
                <span className='products-background'></span>
                <h2>Products</h2>
                <ul className='product-items'>
                {products.map((product) => {
                    return(
                    <li className='product-item'>
                        <img className='product-image' src={product.path} alt={product.name} />
                        <h1>{product.name}</h1>
                    </li>
                    )
                })}
                </ul>
                <div className='more-products'><Link to={path + '/contact'} className='link' onClick={ScrollToTop}>Contact Us to Know More Products<i className="fa-solid fa-paper-plane" style={{margin:'0 5px'}}/></Link></div>
            </div>
        </div>
    )
}

export default OurServices;