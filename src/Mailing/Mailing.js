import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Mailing.css';
import { en, ru, tr } from '../Language';

export default function Mailing({ lang, setContactsOpening }) {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const form = useRef();
    const [mail, setMail] = useState('');
    const [userName, setUserName] = useState('');
    const [type, setType] = useState('');
    const [text, setText] = useState('');
    // const [formIsOpened, setFormOpening] = useState(true);
    // const [preferredLanguage, setPreferredLanguage] = useState('');
    let data = {};
    switch (lang) {
        case 'tr': 
            data = { ...tr.mailing };
            break;
        case 'ru':
            data = { ...ru.mailing };
            break;
        default:
            data = { ...en.mailing };
            break;
    }

    function sendEmail(event) {
        if (mail && userName && type && text) {
            event.preventDefault();

            emailjs.sendForm('service_5dldzqx', 'template_r0705yf', form.current, { publicKey: 'aQ6WlGXkqYbPCVtsg' })
            .then(() => {
                console.log('Email has been sent successfully!');
                setMail('');
                setUserName('');
                setType('');
                setText('');
            }, error => {
                console.error(error);
            })
        }
    }

    return <section className="block" id="mail">
        <h3>...{!window.location.pathname.includes('/bots') ? data.next_project : data.next_bot}</h3>
        <button className='contact' onClick={() => setContactsOpening(true)}>{data.contact}</button>
        <p>{data.or}!</p>
        <form ref={form}>
            <div className='horizontal'>
                <input name='user_mail' className="email" type="email" placeholder={data.email} required={true} value={mail} onChange={event => setMail(event.target.value)} style={{ borderColor: mail && (!dark ? 'black' : 'white') }}/>
                <input name='user_name' className="user-name" autoComplete='given-name' placeholder={data.name} value={userName} onChange={event => setUserName(event.target.value)} style={{ borderColor: userName && (!dark ? 'black' : 'white') }}/>
            </div>
            <input name='website_type' className="type" type="text" placeholder={!window.location.pathname.includes('/bots') ? data.category : data.bot_category} required={true} value={type} onChange={event => setType(event.target.value)} style={{ borderColor: type && (!dark ? 'black' : 'white') }}/>
            <textarea name='message' placeholder={data.text + '...'} required={true} rows={3} value={text} onChange={event => setText(event.target.value)} style={{ borderColor: text && (!dark ? 'black' : 'white') }}/>
            {/* <select className='language' value={preferredLanguage} onChange={event => setPreferredLanguage(event.target.value)} style={{ borderColor: preferredLanguage && (!dark ? 'black' : 'white') }}>
                {preferredLanguage === '' && <option value={''}>{`---${data.select}---`}</option>}
                <option value={'en'}>{data.english}</option>
                <option value={'ru'}>{data.russian}</option>
                <option value={'tr'}>{data.turkish}</option>
            </select> */}
            <button className='send' onClick={sendEmail}>{data.send}</button>
        </form>
    </section>
}