import { Link } from 'react-router-dom';
import '../CSS/AboutUs.css';
import ScrollToTop from '../components/ScrollToTop';

function AboutUs(): JSX.Element {
    // * this variable "path" is for deploy
    const path: string = '/sample-KT';

    return(
        <div className="about-us-container">
            <div className="about-us-welcome">
                <span className="welcome-message">WELCOME<br />TO<br />OUR WEBSITE</span>
            </div>
            <section className='about-us-body'>
                <div className='about-us-image'>
                    <img src='images/IMG_osaka_city.png' alt='Osaka City' />
                </div>
                <article className='about-us-article'>
                    <span className='over-view'>OVERVIEW</span>
                    <h2 className='about-us-title'>Ken Trading is a fabric and textile supplier from Osaka Japan.</h2>
                    <span className='between-margin'></span>
                    <p>We started our business in 1987 and have been providing high quality Japanese fabrics to companies around the world.</p>
                    <span className='between-margin'></span>
                    <p>Our goal is to promote sustainable and Eco-friendly fabrics from Japan. We work with local businesses to provide non-Japanese customers with most up-to-date selection of products; and we work with you to understand your needs so we can recommend the best fabrics to meet your expectations.</p>
                    <span className='between-margin'></span>
                    <p>We have some of the finest fabrics in the world that are made with new and traditional Japanese techniques. If you are looking for Japanese fabric, textile, or printed cloth. We want to support you! Please don't hesitate to contact us <Link to={path + '/contact'} className='link-to-contact-us' onClick={ScrollToTop}>here</Link>.</p>
                </article>
            </section>
        </div>
    )
}

export default AboutUs;