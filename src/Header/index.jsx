import "./index.scss"

function Header () {
    return (
        <nav className="nav">
            <img src="../Images/icon.png" alt="react-icon" className="nav__icon"/>
            <h3 className="nav__icon--text">ReactFacts</h3>
            <h4 className="nav__title">React Course - Project 1</h4>
        </nav>
    );    
}

export default Header