import { NavLink } from 'react-router-dom';
import './style.css';

export default function ProductMenu(){
    return(
        <nav className='product-menu-container container'>
            <div className='product-menu-item'>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to={'/products/computers'}>
                    Computadores
                </NavLink>
            </div>
            <div className='product-menu-item'>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to={'/products/eletronics'}>
                    Eletrônicos
                </NavLink>
            </div>
            <div className='product-menu-item'>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to={'/products/books'}>
                    Livros
                </NavLink>
            </div>
        </nav>
    );
}