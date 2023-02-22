import React, { useState } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LogOut, reset } from '../redux/authSlice';


function Sidebar({closeModal}) {
  const [isSidebar, setSidebar] = useState(true);
  const dispatch = useDispatch
  

  const handleLogoutClick = () => {
    // setSidebar(false);
    window.location.assign('/');
    console.log('Logging out...');
    dispatch(reset());
    dispatch(LogOut());
    closeModal();

  };

  const handleSignUpClick = () => {
    setSidebar(false);
    window.location.assign('/register');
  };

  return (
    <div className={`main ${isSidebar ? '' : 'hidden'}`}>
      <div>
        <h1 className='is-bold is-size-3'>MiniApp</h1>
      </div>

      <nav>
        <Link to="/auth/dashboard">Dashboard</Link>
        <Link to="/auth/products">Product</Link>
        <Link to="/auth/productDB">Product DB</Link>
      </nav>
     
      <div className='logout-btn'>
        
        <button className='mr-1' href="/logout" onClick={handleLogoutClick}>
          Logout
        </button>
        <button className='mr-1' href="/register" onClick={handleSignUpClick}>
          SignUp
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
