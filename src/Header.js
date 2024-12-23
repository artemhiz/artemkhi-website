import { useEffect, useState } from "react";
import logoLight from "./assets/Logo Light.png"
import logoDark from "./assets/Logo Dark.png"
import contactIcon from './assets/Rays contact.png';
import contactIconBot from './assets/Rays contact bots.png';
import { en, ru, tr } from "./Language";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact/Contact";

export default function Header({ lang, contactIsOpened, setContactsOpening }) {
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
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = (event) => {
            if (window.pageYOffset <= 10) {
                setLong(true);
            } else {
                setLong(false);
            }
            setOpening(false);
            setContactsOpening(false);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
        }, [setContactsOpening]);

    return <>
        <header className={("bg") + (!isOpened ? " closed" : "")}>
            <nav onClick={() => setOpening(prev => !prev)} className={isLong ? 'long' : ''}>
                <button className="for-logo not-for-mobile" onClick={() => navigate(`/${lang !== 'en' ? lang : ''}`)}>
                    <img className="logo light" src={logoLight} alt="Artemkhi"/>
                    <img className="logo dark" src={logoDark} alt="Artemkhi"/>
                </button>
                <button className="for-logo for-mobile">
                    <img className="logo light" src={logoLight} alt="Artemkhi"/>
                    <img className="logo dark" src={logoDark} alt="Artemkhi"/>
                </button>
                <p className="for-mobile hint">{data.menu}</p>
                <div className="main-buttons">
                    <button onClick={() => navigate(`/${lang !== 'en' ? lang : ''}`)}>
                        {data.home}
                        <div className={("stripe") + (window.location.pathname === '/' || window.location.pathname === '/ru' || window.location.pathname === '/tr' ? ' selected' : '')}/>
                    </button>
                    <button onClick={() => navigate(`${lang !== 'en' ? '/' + lang : ''}/projects`)}>
                        {data.projects}
                        <div className={("stripe") + (window.location.pathname.includes('/projects') ? ' selected' : '')}/>
                    </button>
                    <button onClick={() => navigate(`${lang !== 'en' ? '/' + lang : ''}/capabilities`)}>
                        {data.capabilities}
                        <div className={("stripe") + (window.location.pathname.includes('/capabilities') ? ' selected' : '')}/>
                    </button>
                </div>
                <div className="lines">
                    unnecessary text
                    <img src={contactIcon} alt="" className={"colorful" + (window.location.pathname.includes('/bots') ? " animated" : "")}/>
                    <img src={contactIconBot} alt="" className={"blue" + (!window.location.pathname.includes('/bots') ? " animated" : "")}/>
                </div>
                <div className="contact">
                    <button onClick={() => setContactsOpening(prev => !prev)}>{data.contact}</button>
                </div>
            </nav>
        </header>
        <Contact lang={lang} isOpened={contactIsOpened} setOpening={setContactsOpening}/>
    </>
}