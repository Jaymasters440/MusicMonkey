import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const AppNavbar = () => {

        return (
            <div className='navbar is-primary-black musicnavbar'>
                <div className='navbar-menu'>
                <div className='navbar-start'></div>
                <div className='navbar-end'>
          

        {Auth.loggedIn() ? (     
     <div className='navbar-item has-centered-items'>
            <Link to= "/profile" className="button buttonWhite">PROFILE</Link>
            <Link to= "/genre" className="button buttonWhite">Create a Playlist</Link>
            <div onClick={()=>{Auth.logout()}} className="button buttonWhite">LOG OUT</div>
        </div>
       
        ) : (  
            
        <div className="navbar-item has-centered-items">
    <div className="field is-grouped">
    <Link to= "/login" className="button buttonWhite">LOG IN!</Link>
    <Link to= "/signup" className="button buttonWhite">SIGN UP!</Link>
    </div>
    </div>
    ) }
    </div>
    </div>
    </div>
          );
        }

        export default AppNavbar;