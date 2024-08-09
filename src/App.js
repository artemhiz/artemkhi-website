import Header from "./Header"
import Footer from "./Footer"
import './App.css'
import Home from "./Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function App() {
    let lang = window.location.pathname.includes('/tr') ? 'tr' : window.location.pathname.includes('/ru') ? 'ru' : 'en';

    return <BrowserRouter>
        <Header lang={lang}/>
        <Routes>
            <Route path="/:lang?/" element={<Home/>}/>
        </Routes>
        <Footer lang={lang}/>
    </BrowserRouter>
}