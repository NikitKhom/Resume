import logo from '../../assets/images/logo.svg'

function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt='Логотип страницы' />
            <nav className='header__navigation'>
                <ul className='header__nav-list'>
                    <li className='header__nav-link'><a href='#'>Обо мне</a></li>
                    <li className='header__nav-link'><a href='#'>Технологии</a></li>
                    <li className='header__nav-link'><a href='#'>Проекты</a></li>
                    <li className='header__nav-link'><a href='#'>Контакты</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;