import { useState } from 'react';
import './navbar.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className='navbar'>
                <h1 className='nav-logo' style={{
                    fontFamily:'Montserrat',
                    fontSize: '1.9rem'
                }}>Helegis</h1>

                {/* Botão Hamburger */}
                <button 
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
                    <li className='nav-item'>
                        <a href='./' onClick={toggleMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#resources' onClick={toggleMenu}>Recursos</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#prices' onClick={toggleMenu}>Preços</a>
                    </li>
                    <li className='nav-item nav-item-button'>
                        <button 
                            className='nav-button-mobile' 
                            style={{
                                fontFamily:'Montserrat', 
                                fontSize: '1.2em', 
                                padding: '.8rem 1.5rem', 
                                borderRadius: '15px', 
                                backgroundColor: '#1b273f', 
                                color: '#fff', 
                                border: '1px #2d529cff solid', 
                                cursor: 'pointer',
                                width: '100%'
                            }}
                            onClick={toggleMenu}
                        >
                            Acessar painel
                        </button>
                    </li>
                </ul>

                <button 
                    className='nav-button nav-button-desktop' 
                    style={{
                        fontFamily:'Montserrat', 
                        fontSize: '1.2em', 
                        padding: '.8rem 1.5rem', 
                        borderRadius: '15px', 
                        backgroundColor: '#1b273f', 
                        color: '#fff', 
                        border: '1px #2d529cff solid', 
                        cursor: 'pointer'
                    }}
                >
                    Acessar painel
                </button>
            </nav>
        </>
    )
}