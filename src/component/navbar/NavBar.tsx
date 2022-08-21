import {Link,NavLink} from "react-router-dom"

export const NavBar = () =>{

    return (
        <div>
            <div className="navbar">
                <div>
                    <Link to="/">
                        <h1 className="logo">Contact Manager</h1>
                    </Link>
                </div >
                <div className="nav-items">
                <NavLink to ={"/contact/add"}
                className="addContact-btn"> Add Contact
                </NavLink>
                </div>
            </div>
        </div>
    )
}