import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
function Header(){

    const [{basket,user} , dispatch] = useStateValue();
    
    const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
    
    return(
        <div className='header'>
            <Link to="/">
                <img className="header__logo" src='https://spng.pngfind.com/pngs/s/404-4040022_demo-team-png-logo-demo-transparent-png.png'/>
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text"></input>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                <div onClick={handleAuthenticaton}
                className='header__option'>
                    <span className='header__optionLineOne'>
                    {user? "Hello "+user.email : "Hello Beautiful People"}
                    </span>
                    <span className='header__optionLineTwo'>
                        {user?'Sign Out':'Sign In'}
                    </span>
                </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLineTwo'>
                        & Order
                    </span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        Prime
                    </span>
                </div>
                <Link to="/checkout"><div className="header__optionBasket">
                    <AddShoppingCartIcon></AddShoppingCartIcon>
                    <span className="header__optionLineTwo header_basketCount">
                        {basket.length}
                    </span>
                </div>
                </Link>
            </div>
        </div>
    )
}
export default Header