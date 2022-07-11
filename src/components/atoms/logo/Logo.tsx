import logo from '../../../assets/images/logo.png'
import './Logo.scss'

const Logo = () => {
    return (
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
    )
}

export default Logo