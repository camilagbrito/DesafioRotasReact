import './style.css';
import homeImg from '../../assets/homeImg.svg';

export default function Header(){
    
    return(
        <header>
            <nav className='container menu-nav'>
                <div className='menu-items'>
                    <div className='menu-item'>Início</div>
                    <div className='menu-item'>Produtos</div>
                    <div className='menu-item'>Sobre nós</div>
                </div>
                <div className='home'>
                    <img src={homeImg} alt="home" />
                </div>
            </nav>
            
        </header>

    );
}