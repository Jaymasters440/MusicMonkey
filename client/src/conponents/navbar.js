import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const AppNavbar = () => {

        return (
            <div className='navbar'>
          

        {Auth.loggedIn() ? (
            
     <div className='navbar-item'>
            <Link to= "/profile" className="button buttonWhite">PROFILE</Link>
            <div onClick={()=>{Auth.logout()}} className="button buttonWhite">LOG OUT</div>
        </div>
       
        ) : (  
            
        <div className="navbar-item">
    <div className="field is-grouped">
    <Link to= "/login" className="button buttonWhite">LOG IN!</Link>
    <Link to= "/signup" className="button buttonWhite">SIGN UP!</Link>
    </div>
    </div>
    ) }
    </div>
          );
        }

        export default AppNavbar;