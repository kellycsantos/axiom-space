import logo from '../../assets/axiom-space-logo-file_wht-01.png'

import style from './footer.module.scss'

const links = [
    {
        title: 'Flight',
        urls: [
            { page: 'Departure', url: '' },
            { page: 'Arrival', url: '' },
            { page: 'Duration', url: '' },
            { page: 'Spaceship', url: '' },
            { page: 'Schedule', url: '' },
        ]
    },
    {
        title: 'Company',
        urls: [
            { page: 'About us', url: '' },
            { page: 'Consultation', url: '' },
            { page: 'Mission statement', url: '' },
            { page: 'Safety standards', url: '' },
        ]
    },
    {
        title: 'Apointments',
        urls: [
            { page: 'Schedule', url: '' },
            { page: 'Explore', url: '' },
            { page: 'Accommodation', url: '' },
            { page: 'Customize', url: '' },
            { page: 'Book', url: '' },
        ]
    },
    {
        title: 'Contact us',
        urls: [
            { page: 'Call us', url: '' },
            { page: 'Email', url: '' },
            { page: 'Address', url: '' },
            { page: 'Social', url: '' },
            { page: 'Enquiry', url: '' },
        ]
    },

]
export default function Footer() {
    return (
        <footer id={style.footer}>
            <img src={logo} />
            <nav>
                {
                    links.map((link, index) =>
                        <ul key={index}>
                            <li><p>{link.title}</p></li>
                            {link.urls.map((page,index) => 
                            
                            <li key={index}><a href={page.url.length !== null ? page.url : ''}>{page.page}</a></li>
                            )}

                          
                        </ul>
                    )
                }
            </nav>

            <p>© 2023 Axiom Corporation. All Rights Reserved.</p>
        </footer>
    )
}