import { useEffect, useState } from "react";
import logo from "./assets/Logo.png"
import contactIcon from './assets/Rays contact.png'
import { en, ru, tr } from "./Language";

export default function Header({ lang }) {
    let data = {};
    switch (lang) {
        case 'tr': 
            data = { ...tr.header };
            break;
        case 'ru':
            data = { ...ru.header };
            break;
        default:
            data = { ...en.header };
            break;
    }
    const [isOpened, setOpening] = useState(false);
    const [isLong, setLong] = useState(true);

    useEffect(() => {
        const handleScroll = (event) => {
            if (window.pageYOffset <= 10) {
                setLong(true);
            } else {
                setLong(false);
            }
            setOpening(false);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
        }, []);

    return <header className={("bg") + (!isOpened ? " closed" : "")}>
        <nav onClick={() => setOpening(prev => !prev)} className={isLong ? 'long' : ''}>
            <button className="for-logo not-for-mobile">
                <img className="logo" src={logo} alt="Artemkhi"/>
            </button>
            <button className="for-logo for-mobile">
                <img className="logo" src={logo} alt="Artemkhi"/>
            </button>
            <p className="for-mobile hint">{data.menu}</p>
            <div className="main-buttons">
                <button>{data.home}</button>
                <button>{data.projects}</button>
                <button>{data.capabilities}</button>
            </div>
            <div className="contact">
                <img src={contactIcon} alt=""/>
                <button onClick={() => document.getElementById('mail')?.scrollIntoView()}>{data.contact}</button>
            </div>
        </nav>
    </header>
}