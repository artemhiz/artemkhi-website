import { useEffect, useState } from "react";
import { en, ru, tr } from "./Language";

export default function Footer({ lang }) {
    let data = {};
    switch (lang) {
        case 'tr' || 'tr': 
            data = { ...tr.footer };
            break;
        case 'ru':
            data = { ...ru.footer };
            break;
        default:
            data = { ...en.footer };
            break;
    }

    const [languageSelectorOpened, setLanguageSelectorOpening] = useState(false);

    useEffect(() => {
        const handleScroll = (event) => {
            setLanguageSelectorOpening(false);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
        }, []);

    function setLanguage(language) {
        switch (language) {
            case 'ru':
                window.location.pathname = '/ru';
                break;
            case 'tr':
                window.location.pathname = '/tr';
                break;
            default:
                window.location.pathname = '/';
        }
        setLanguageSelectorOpening(false);
    }

    return <footer>
        <div className="left">
            <button>{data.about}</button>
            <button>{data.projects}</button>
            <button>{data.cv}</button>
        </div>
        <div className="right">
            <div className="language-place">
                <div className={("window") + (!languageSelectorOpened ? " closed" : "")}>
                    <p>choose the language</p>
                    <div className="buttons">
                        <button onClick={() => setLanguage('ru')}>Русский<br/><span>Russian</span></button>
                        <button onClick={() => setLanguage('en')}>English</button>
                        <button onClick={() => setLanguage('tr')}>Türkçe<br/><span>Turkish</span></button>
                    </div>
                </div>
                <button className="language" onClick={() => setLanguageSelectorOpening(prev => !prev)}>{data.language_term} – {data.language}</button>
            </div>
            
        </div>
    </footer>
}