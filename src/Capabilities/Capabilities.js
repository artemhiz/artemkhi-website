import { useParams } from 'react-router-dom';
import './Capabilities.css';
import { en, ru, tr } from '../Language';
import { useEffect } from 'react';

export default function Capabilities() {
    const { lang } = useParams();
    let data;
    switch (lang) {
        case 'tr': 
            data = { ...tr.capabilities };
            break;
        case 'ru':
            data = { ...ru.capabilities };
            break;
        default:
            data = { ...en.capabilities };
            break;
    }

    useEffect(() => {
        document.title = (lang === 'tr' ? 'Yetenekler' : lang === 'ru' ? 'Возможности' : 'Capabilities') + ' | Artemkhi';
    }, [lang])

    return <main className="cbs">
        <section className="block head" id='services'>
            <h1>{data.heading_1}</h1>
            <h2 className="lighter">{data.heading_2}</h2>
            <p>{data.heading_3}</p>
        </section>
        <section className='block' id='services'>
            <section className='heading'>
                <h2>{data.services}</h2>
            </section>
            <section className='body'>
                <div className='service'>
                    <h3>{data.turnkey_website}</h3>
                    <p>{data.turnkey_description}</p>
                </div>
                <div className='line'>unnecessary text</div>
                <div className='service'>
                    <h3>{data.migration}</h3>
                    <p>{data.migration_description}</p>
                </div>
                <div className='line'>unnecessary text</div>
                <div className='service'>
                    <h3>{data.updating}</h3>
                    <p>{data.updating_description}</p>
                </div>
            </section>
        </section>
        <section className='block' id='opinions'>
            <section className='heading'>
                <h2>{data.highlights}</h2>
            </section>
            <section className='body'>
                <div className='highlight'>
                    <h2 className='back' style={{ color: 'var(--red)' }}>1</h2>
                    <h3>{data.communication}</h3>
                    <p>{data.communication_description}</p>
                </div>
                <div className='line'>unnecessary text</div>
                <div className='highlight'>
                    <h2 className='back' style={{ color: 'var(--star)' }}>2</h2>
                    <h3>{data.quality}</h3>
                    <p>{data.quality_description}</p>
                </div>
                <div className='line'>unnecessary text</div>
                <div className='highlight'>
                    <h2 className='back' style={{ color: 'var(--dark)' }}>3</h2>
                    <h3>{data.speed}</h3>
                    <p>{data.speed_description}</p>
                </div>
            </section>
        </section>
        <section className='block head' id='tools'>
            <div className='darkener'/>
            {lang !== 'tr' && <h1>{data.tools_heading}</h1>}
            <p>{data.tools_heading_2}</p>
            {lang === 'tr' && <h1>{data.tools_heading}</h1>}
        </section>
        <section className='block' id='front'>
            <section className='heading'>
                <h2>{data.front}</h2>
            </section>
            <section className='body'>
                <div className='tool' id='html'>
                    <h3>HTML/CSS</h3>
                    <p>{data.html}</p>
                </div>
                <div className='line'>unnecessary text</div>
                <div className='tool' id='react'>
                    <h3>React</h3>
                    <p>{data.react}</p>
                </div>
                <div className='line'>unnecessary text</div>
                <div className='tool' id='javascript'>
                    <h3>JavaScript</h3>
                    <p>{data.js}</p>
                </div>
            </section>
        </section>
        <section className='block' id='back'>
            <section className='heading'>
                <h2>{data.back}</h2>
            </section>
            <section className='body'>
                <div className='tool' id='node-js'>
                    <h3>Node.js</h3>
                    <p>{data.node}</p>
                </div>
                <div className='line'>unnecessary text</div>
                <div className='tool' id='mongodb'>
                    <h3>MongoDB</h3>
                    <p>{data.mongo}</p>
                </div>
            </section>
        </section>
    </main>
}