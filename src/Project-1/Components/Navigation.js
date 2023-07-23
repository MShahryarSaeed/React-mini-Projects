import Logo from '../assests/brand_logo.png';
const Navigation=()=>{
    return(
        <nav className="container">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>

            <ul>
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>

            <button>Login</button>

        </nav>
    
    );
}

export default Navigation;