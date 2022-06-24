import React from "react";
import {Link,NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <Link to={"/"}>
                            Logo
                        </Link>
                    </div>

                    <div className="right-side">
                        <nav>
                            <NavLink to={"/"} className="nav-links">Home</NavLink>
                            {/*<NavLink to={"/recipes"} className="nav-links">Recipes</NavLink>*/}
                            <NavLink to={"/popular"} className="nav-links">Popular</NavLink>
                            <NavLink to={"/top-rated"} className="nav-links">Top Rated</NavLink>
                            {/*<NavLink to={"/blog"} className="nav-links">BLog</NavLink>*/}
                            {/*<NavLink to={"/support"} className="nav-links">Support</NavLink>*/}
                        </nav>

                        <div className="buttons">
                            <button className="btn">sign in</button>
                            <button className="btn">sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Header