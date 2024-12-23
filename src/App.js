 import Header from "./Header"
import Footer from "./Footer"
import './App.css'
import Home from "./Home"
import { Route, Routes, useLocation } from "react-router-dom"
import Projects from "./Projects/Projects"
import { useEffect, useState } from "react"
import ScrollToTop from "./Projects/Scroll-to-Top"
import Capabilities from "./Capabilities/Capabilities"
import About from "./About Me/About"
import MobileContactButton from "./Contact/Mobile-Button"
import LanguageSuggestion from "./Language-Suggestion/Language-Suggestion"
import Bots from "./Bots/Bots"

export function halloween() {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    
    return 24 <= day && day <= 31 && month === 9;
}

export default function App() {
    let lang = window.location.pathname.includes('/tr') ? 'tr' : window.location.pathname.includes('/ru') ? 'ru' : 'en';
    const location = useLocation();
    const [contactIsOpened, setContactsOpening] = useState(false);

    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1));
            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return <>
        <ScrollToTop/>
        <MobileContactButton isOpened={contactIsOpened} setOpening={setContactsOpening}/>
        <Header lang={lang} contactIsOpened={contactIsOpened} setContactsOpening={setContactsOpening}/>
        <LanguageSuggestion/>
        <Routes>
            <Route path="/:lang?/" element={<Home setContactsOpening={setContactsOpening}/>}/>
            <Route path="/:lang?/projects" element={<Projects setContactsOpening={setContactsOpening}/>}/>
            <Route path="/:lang?/capabilities" element={<Capabilities/>}/>
            <Route path="/:lang?/about" element={<About/>}/>
            <Route path="/:lang?/bots" element={<Bots setContactsOpening={setContactsOpening}/>}/>
        </Routes>
        <Footer lang={lang}/>
    </>
}