import { useState } from "react";
import { en, ru, tr } from "../Language";
import './Language-Suggestion.css';
import x from '../assets/x.png';
import darkX from '../assets/x-dark.png';

export default function LanguageSuggestion() {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [windowClosed, setWindowClosed] = useState(false);
    const lang = window.location.pathname.includes('/tr') ? 'tr' : window.location.pathname.includes('/ru') ? 'ru' : 'en';
    let data;
    if (localStorage.ArtemkhiLanguage) {
        switch (JSON.parse(localStorage.ArtemkhiLanguage)) {
            case 'tr':
                data = tr.language_suggestion;
                break;
            case 'ru':
                data = ru.language_suggestion;
                break;
            default:
                data = en.language_suggestion;
                break;
        }
    } else {
        switch (navigator.language) {
            case 'tr':
            case 'tr-TR':
            data = tr.language_suggestion;
            break;
        case 'ru':
            data = ru.language_suggestion;
            break;
        default:
            data = en.language_suggestion;
            break;
        }
    }

    function createLink() {
        const link = window.location.pathname;
        if (!link.includes('/tr') && !link.includes('/ru')) {
            return `${data.code !== 'en' ? '/' + data.code : ''}${link}`;
        } else {
            const separatedLink = link.split('/');
            if (data.code === 'en') {
                separatedLink.splice(1, 1);
            } else {
                separatedLink[1] = data.code;
            }
            return separatedLink.join('/');
        }
    }

    return <section className={"block" + (windowClosed || (localStorage.ArtemkhiLanguage ? lang === JSON.parse(localStorage.ArtemkhiLanguage) : navigator.language.includes(lang)) ? " closed" : "")} id="ls">
        <h3 className="question">{data.question}</h3>
        <div className="buttons">
            <button onClick={() => {
                localStorage.setItem('ArtemkhiLanguage', JSON.stringify(lang));
                setWindowClosed(true);
                }}><img src={!dark ? x : darkX} alt="x"/></button>
            <button className="recommended" onClick={() => {
                window.location.pathname = createLink();
                setWindowClosed(true);
                }}>{data.yes}</button>
        </div>
    </section>
}