import logoImg from '../img/logo.png';
import '../styles/logo.css';

function logo() {
    return (
        <div className="logo-container">
        <img className='logo'
          src={logoImg} 
          alt="" 
         />
      </div>
    );
}

export default logo;