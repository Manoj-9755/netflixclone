import "./nav.scss";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

const Nav = () => {
    const [show,setshow] = useState(false);
    const history= useNavigate()
    const transitionnavbar =()=>{
        if(window.scrollY>100){
            setshow(true);
        }else{
            setshow(false)
        }
    };
    useEffect(()=>{
        window.addEventListener('scroll',transitionnavbar);
        return ()=>window.removeEventListener('scroll',transitionnavbar)
        

    },[])
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div className="nav-content">
        <img
        onClick={()=>history('/')}
          className="nav-logo"
          src="https://www.techdaily.com.au/b2/wp-content/uploads/2015/03/Netflix_Logo_Print_FourColorCMYK.png"
          alt=""
        />
        <img
         onClick={()=>history('/profile')}
          className="nav-avatar"
          src="https://th.bing.com/th?id=OIP.XQ-com-ULw7aaf_U3BcQ3AHaHa&w=226&h=226&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          alt=""
        />
      
        
      </div>
    </div>
  );
};

export default Nav;
