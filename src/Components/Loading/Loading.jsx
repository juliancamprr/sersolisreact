import Loading from '../../loading.svg'
import './Loading.css'

function Loadingx() {
    return (
        <div className='container'>
            <img className='loader' src={Loading} alt="" />
        </div>
    )
}

export default Loadingx;