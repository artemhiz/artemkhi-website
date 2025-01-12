export default function NoPage() {
    const link = window.location.pathname;
    const lang = link.includes('/tr') ? 'tr' : link.includes('/ru') ? 'ru' : 'en';

    return <main>
        <section className="block">
            <h1>
                {
                    lang === 'tr' ?
                    'Bu sitede şöyle bir sayfa yok'
                    : lang === 'ru' ?
                    'На этом сайте нет такой страницы'
                    :
                    'There is no such a page on this website'
                }
            </h1>
        </section>
    </main>
}