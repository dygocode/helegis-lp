import './navbar.css';

export default function Navbar() {
    return (
        <>
            <nav  className='navbar'>
                <h1 className='nav-logo' style={{
                    fontFamily:'Montserrat',
                    fontSize: '1.9rem'
                }}>Helegis</h1>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <a href='./'>Home</a>
                    </li>
                    {/* <li className='nav-item'>Sobre Nós</li> */}
                    <li className='nav-item'>
                        <a href='#resources'>Recursos</a>
                    </li>
                    <li className='nav-item'>
                        <a  href='#prices'>Preços</a>
                    </li>
                </ul>
                <button className='nav-button' style={{fontFamily:'Montserrat', fontSize: '1.2em', padding: '.8rem 1.5rem', borderRadius: '15px', backgroundColor: '#1b273f', color: '#fff', border: '1px #2d529cff solid', cursor: 'pointer'}}>Acessar painel</button>
            </nav>
        </>
    )
}
