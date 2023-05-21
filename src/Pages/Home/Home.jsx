import logo from '../../sersolislogo.png'
import './Home.css'
import Loading from '../../Components/Loading/Loading'
import { useEffect, useState } from 'react'

// Other Routes

import About from '../About/About'
import Services from '../Services/Services'


function Home() {

    const [removeLoading, setRemoveLoading] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setRemoveLoading(true)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <body>
            {!removeLoading && <Loading />}
            {removeLoading && (
                <header>
                    <div className="navbar">
                        <div className="logo"><a href="/" rel="noopener noreferrer">Sersolis</a></div>
                        <ul className='links'>
                            <li><a href="/" target='_blank' rel='noopener noreferrer'></a></li>
                            <li><a href="/services" target='_blank' rel='noopener noreferrer'></a></li>
                            <li><a href="" target='_blank' rel='noopener noreferrer'></a></li>
                            <li><a href="" target='_blank' rel='noopener noreferrer'></a></li>
                        </ul>
                    </div>
                </header>
            )}
        </body>
    )
}

export default Home;