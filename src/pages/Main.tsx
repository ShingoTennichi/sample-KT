import '../CSS/Main.css';
import { Link } from 'react-router-dom';
import data from '../JSON/data.json';
import Card from '../components/Card';
import ScrollToTop from '../components/ScrollToTop';

function Main(): JSX.Element {
    const cardData = data.images;
    return(
        <>
            <div className="main-background">
                <div className='main-title'>
                    <span>Looking for Textiles?</span>
                    <span>Let us find the best one for You.</span>
                </div>
            </div>
            <div className='introduce-servicesーcontainer'>
                <div className='title-our-service'>
                    <h2>Our Services</h2>
                </div>
                <ul className='card-holder'>
                {cardData.map((image) => {
                    return(
                    <Card key={image.id} path={image.path} imageName={image.name} title={image.title} article={image.article}/>
                    )
                })}
                </ul>
                <div className='link-learn-more'>
                    <Link className='link' to='/our-services' onClick={ScrollToTop}>Learn More About Our Services</Link>
                </div>
            </div>
            <div className='promotion-container'>
                <div className='promotion-title'>
                    <h2>Why choose Ken Trading?</h2>
                </div>
                <section className='promotion-body'>
                    <div className='promotion-item'>
                        <div className='promotion-image'>
                            <img src='images/IMG_brown_cloth.jpg' alt='brown cloth' />
                        </div>
                        <article className='promotion-article'>
                            <h3><i>Experts with industry knowledge</i></h3>
                            <p>We propose the most suitable material for you from our abundant knowledge and numerous materials. This comes from years of research into various materials and the search for quality.</p>
                        </article>
                    </div>
                    <div className='promotion-item'>
                        <article className='promotion-article'>
                            <h3><i>Fast and Reliable</i></h3>
                            <p>Support your business with our powerful and sophisticated process. No hesitation. All you have to do is tell us your desires and wait. It's that simple.</p>
                        </article>
                        <div className='promotion-image'>
                            <img src='images/IMG_handshake.jpg' alt='handshake' />
                        </div>
                    </div>
                </section>
            </div>
            <div className='introduce-us'>
                <span className='introduce-us-bg'>a</span>
                <h2>Who Are We?</h2>
                <p>Ken Trading started in 1987 in Osaka Japan.</p>
                <Link to='/about-us' className='link' onClick={ScrollToTop}>Read More</Link>
            </div>
            <div className='contact-us-container'>
                <h3>Let's start making clothes together!</h3>
                <p>Contact us here</p>
                <Link to='/contact' className='link'onClick={ScrollToTop}>Contact Us</Link>
            </div>
        </>
    )
}

export default Main;