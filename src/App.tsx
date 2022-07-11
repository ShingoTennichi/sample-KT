import { BrowserRouter as Router, Routes, Route }from 'react-router-dom';
import './App.css';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Main from './pages/Main';
import NavBar from './components/NavBar';
import OurServices from './pages/OurServices';
import Page404 from './pages/Page404';


function App(): JSX.Element {
    // * this variable "path" is for deploy
    const path: string = '/sample-KT';
    return (
        <Router>
            <>
                <header>
                    <NavBar />
                </header>
                <main>
                    <Routes>
                        {/* <Route path='/sample-KT/' element={<Main />} /> */}
                        <Route path={path + '/'} element={<Main />} />
                        <Route path={path + '/our-services'} element={<OurServices />} />
                        <Route path={path + '/about-us'} element={<AboutUs />}/>
                        <Route path={path + '/contact'} element={<Contact />} />
                        <Route path='*' element={<Page404 />}></Route>
                    </Routes>
                </main>
                <Footer />
            </>
        </Router>
    );
}

export default App;
