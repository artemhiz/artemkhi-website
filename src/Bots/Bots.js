import { useParams } from "react-router-dom";
import Mailing from "../Mailing/Mailing";
import './Bots.css';
import { useEffect } from "react";
import { en, ru, tr } from "../Language";

export default function Bots({ setContactsOpening }) {
    const { lang } = useParams();
    let data;
    switch (lang) {
        case 'tr': 
            data = { ...tr.bots };
            break;
        case 'ru':
            data = { ...ru.bots };
            break;
        default:
            data = { ...en.bots };
            break;
    }

    useEffect(() => {
            document.title = (lang === 'ru' ? 'Боты' : lang === 'tr' ? 'Botlar' : 'Bots') + ' | Artemkhi';
        }, [lang])

    return <main className="bots">
        <section className="block" id="heading">
            <h1>{data.heading}</h1>
        </section>
        <section className="block" id="why">
            <h2>{data.why}</h2>
            <p>{data.why_desc}</p>
            <section className="list">
                <section className="item">
                    <h3>{data.easy_interface}</h3>
                    <p>{data.easy_interface_desc}</p>
                </section>
                <div className='line'>unnecessary text</div>
                <section className="item">
                    <h3>{data.range_of_opportunities}</h3>
                    <p>{data.range_of_opportunities_desc}</p>
                </section>
                <div className='line'>unnecessary text</div>
                <section className="item">
                    <h3>{data.individual_solutions}</h3>
                    <p>{data.individual_solutions_desc}</p>
                </section>
            </section>
            <h6 className="ending">{data.why_ending}</h6>
        </section>
        <section className="block" id="business-tool">
            <h2>{data.business_tool}</h2>
            <p>{data.business_tool_desc}</p>
            <section className="list">
                <section className="item">
                    <h3>{data.development_speed}</h3>
                    <p>{data.development_speed_desc}</p>
                </section>
                <div className='line black'>unnecessary text</div>
                <section className="item">
                    <h3>{data.comfortable_usage}</h3>
                    <p>{data.comfortable_usage_desc}</p>
                </section>
                <div className='line black'>unnecessary text</div>
                <section className="item">
                    <h3>{data.flexibility}</h3>
                    <p>{data.flexibility_desc}</p>
                </section>
            </section>
            <h6 className="ending">{data.business_tool_ending}</h6>
        </section>
        <section className="block" id="choose-professionals">
            <h2>{data.choose}</h2>
            <p>{data.choose_desc}</p>
            <h6 className="ending">{data.choose_ending}</h6>
        </section>
        <Mailing lang={lang} setContactsOpening={setContactsOpening}/>
    </main>
}