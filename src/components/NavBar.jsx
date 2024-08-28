function NavBar({ onTabChange }){

    return (
        <>
        <nav>
            <ul className = "nav-list">
                <li onClick={() => onTabChange("About")}>About</li>
                <li onClick={() => onTabChange("Experiences")}>Experiences</li>
                <li onClick={() => onTabChange("Projects")}>Projects</li>
            </ul>
        </nav>
        </>
    )

}

export default NavBar