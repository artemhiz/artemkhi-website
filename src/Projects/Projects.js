import { useParams } from 'react-router-dom';
import './Projects.css';
import { projects } from "./projects_list";
import { en, ru, tr } from '../Language';
import { useEffect, useState } from 'react';
import ProjectWindow from './Project-Window';
import Mailing from '../Mailing/Mailing';

export default function Projects({ setContactsOpening }) {
    const { lang } = useParams();
    const [showNoRes, setShowNoRes] = useState(false);
    const [selectedProject, setSelectedProject] = useState();
    const [filtersOpened, setFiltersOpening] = useState(false);
    const [filter, setFilter] = useState('');
    const [showEdu, setShowEdu] = useState(false);
    let data = {};
    switch (lang) {
        case 'tr': 
            data = { ...tr.projects };
            break;
        case 'ru':
            data = { ...ru.projects };
            break;
        default:
            data = { ...en.projects };
            break;
    }

    useEffect(() => {
        document.title = (lang === 'tr' ? 'Projeler' : lang === 'ru' ? 'Проекты' : 'Projects') + ' | Artemkhi';
    }, [lang])

    useEffect(() => {
        console.log(selectedProject);
    }, [selectedProject])

    useEffect(() => {
        const handleScroll = () => {
            if (filter === '' && !showEdu) {
                setFiltersOpening(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
        }, [filter, showEdu])

        useEffect(() => {
            if (filter) {
                setShowNoRes(document.querySelectorAll('.item.closed').length === projects.length);
            } else {
                setShowNoRes(false);
            }
        }, [filter, showEdu])

    return <main className="projects">
        <ProjectWindow item={selectedProject} setItem={setSelectedProject} lang={lang}/>
        <section className="block" id="projects">
            <h1>{data.my_projects}</h1>
            <div className="filters">
                <p onClick={() => setFiltersOpening(prev => !prev)}>
                    {data.filters}
                </p>
                <span className={'arrow' + (filtersOpened ? ' opened' : '')} onClick={() => setFiltersOpening(prev => !prev)}>{'▷'}</span>
                <div className={'buttons' + (!filtersOpened ? ' closed' : '')}>
                    <button className={'for-study' + (showEdu ? " chosen" : "")} onClick={() => setShowEdu(prev => !prev)}>{data.educational_filter}</button>
                    {
                        ['JavaScript', 'React', 'API', 'Node.js', 'Redux', 'Authorization', 'Database'].map(tool => {
                            if (tool !== 'Authorization' && tool !== 'Database') {
                                return <button key={tool} className={filter === tool ? 'chosen' : ''} onClick={() => setFilter(prev => prev === tool ? '' : tool)}>{tool}</button>
                            } else {
                                return <button key={tool} className={filter === tool ? 'chosen' : ''} onClick={() => setFilter(prev => prev === tool ? '' : tool)}>{tool === 'Authorization' ? data.authorization : data.database}</button>
                            }
                        })
                    }
                </div>
            </div>
            <div className={('filter-cancel') + (filter === '' && !showEdu ? ' closed' : '')}>
                <button onClick={() => {
                    setFilter('');
                    setShowEdu(false);
                }}>{data.filters_cancel}</button>
            </div>
            <div className="list">
                {
                    projects.map(project => {
                        if (project.forStudy || (filter !== '' && !project.tools.includes(filter))) {
                            return <section className={("item") + (!showEdu || (filter !== '' && !project.tools.includes(filter)) ? " closed" : "")} key={project.id}
                            style={{
                                borderColor: project.color !== '#ffffff' ? project.color : 'black',
                            }}
                            onClick={() => setSelectedProject(project)}>
                                <img src={project.image} alt=""/>
                                <div className="title"
                                style={{
                                    backgroundImage: `linear-gradient(to bottom, ${project.color} 80%, transparent)`,
                                    color: project.textColor,
                                }}>
                                    <h3 className="name" style={{ color: project.textColor }}>{lang === 'tr' ? project.title.turkish : lang === 'ru' ? project.title.russian : project.title.english}</h3>
                                    {project.forStudy && <p className="for-study" style={{ borderColor: project.textColor, color: project.textColor }}>{data.educational}</p>}
                                </div>
                            </section>
                        } else if (filter !== '' && !project.tools.includes(filter)) {
                            return <section className={("item") + (selectedProject && selectedProject.id === project.id ? " animated" : "") + (!showEdu ? " closed" : "")} key={project.id}
                            style={{
                                borderColor: project.color !== '#ffffff' ? project.color : 'black',
                            }}
                            onClick={() => setSelectedProject(project)}>
                                <img src={project.image} alt=""/>
                                <div className="title"
                                style={{
                                    backgroundImage: `linear-gradient(to bottom, ${project.color} 80%, transparent)`,
                                    color: project.textColor,
                                }}>
                                    <h3 className="name" style={{ color: project.textColor }}>{lang === 'tr' ? project.title.turkish : lang === 'ru' ? project.title.russian : project.title.english}</h3>
                                    {project.forStudy && <p className="for-study" style={{ borderColor: project.textColor, color: project.textColor }}>{data.educational}</p>}
                                </div>
                            </section>
                        } else {
                            return <section className={"item" + (selectedProject && selectedProject.id === project.id ? " animated" : "")} key={project.id}
                            style={{
                                borderColor: project.color !== '#ffffff' ? project.color : 'black',
                            }}
                            onClick={() => setSelectedProject(project)}>
                                <img src={project.image} alt=""/>
                                <div className="title"
                                style={{
                                    backgroundImage: `linear-gradient(to bottom, ${project.color} 80%, transparent)`,
                                    color: project.textColor,
                                }}>
                                    <h3 className="name" style={{ color: project.textColor }}>{lang === 'tr' ? project.title.turkish : lang === 'ru' ? project.title.russian : project.title.english}</h3>
                                    {project.forStudy && <p className="for-study" style={{ borderColor: project.textColor, color: project.textColor }}>{data.educational}</p>}
                                </div>
                            </section>
                        }
                    })
                }
                <h1 className={('no-result') + (showNoRes ? '' : ' closed')}>{data.yet_to_come}</h1>
            </div>
        </section>
        <Mailing lang={lang} setContactsOpening={setContactsOpening}/>
    </main>
}