import './style.css';
import homeImg from '../../assets/homeImg.svg';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Header(){
    
    return(
        <header>
            <nav className='container menu-nav'>
                <nav className='menu-items'>
                    <div className='menu-item'>
                        <NavLink className={({isActive}) => isActive ? "active" : ""} to={'/home'}>
                            Início
                        </NavLink>
                    </div>
                    <div className='menu-item'>
                        <NavLink className={({isActive}) => isActive ? "active" : ""} to={'/products'}>
                            Produtos
                        </NavLink>
                    </div>
                    <div className='menu-item'>
                        <NavLink className={({isActive}) => isActive ? "active" : ""} to={'/about'}>
                            Sobre nós
                        </NavLink>
                    </div>
                </nav>
                <div className='home'>
                    <Link to="/">
                        <img src={homeImg} alt="home" />
                    </Link>
                    
                </div>
            </nav>
        </header>
    );
}