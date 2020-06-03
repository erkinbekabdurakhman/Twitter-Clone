import React from 'react';
import { Link } from 'react-router-dom';
import UserToolbar from '../containers/UserToolbar.js';
import SearchBar from '../containers/SearchBar.js';


class Header extends React.Component{
    render(){
        const showUserToolbar = this.props.showUserToolbar;

        return(
            <header>
                <nav className="navbar navbar-dark bg-primary">
                    <Link className="navbar-brand" to="/">
                        <h1>Buzzle</h1>
                    </Link>
                    <SearchBar />
                    {showUserToolbar && <UserToolbar />}
                </nav>
            </header>
        )
    }
}
export default Header;

// const Header = ({ showUserToolbar }) =>
//     <header>
//         <nav className="navbar navbar-dark bg-primary">
//             <Link className="navbar-brand" to="/">
//                 <h1>Buzzle</h1>
//             </Link>
//             <form className="form-inline">
//                 <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                 <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
//             </form>
//             {showUserToolbar && <UserToolbar />}
//         </nav>
//     </header>

