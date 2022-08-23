import React , {useEffect, useState} from 'react'
import './home.css'
import { Link, Outlet } from 'react-router-dom';
import { useNavigate  } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();

  const [user , setUser] = useState(localStorage.getItem('name'))
  useEffect(() => {
    
    if (!user) {
      navigate('/login')
    }
  }, [user]);

  const logout = async () =>{
     localStorage.removeItem('name')
     setUser(null)
  }
  return (
    <div className="ctn">
    <aside>
        <div className="aside-top">
            <i className="fas fa-user-cog"></i>
             <span>ADDMIN</span>
        </div>
        <ul>
           
           
          <Link to='/product'> 
             <li>
                <i className="fas fa-tshirt"></i>
                <span>HÀNG HÓA</span>
             </li>
            </Link>
            <li style={{ cursor: 'pointer'}} onClick={logout}>
               
               <span  >Đăng xuất / Logout</span>
             </li>
        </ul>
    </aside>
    <main>
         <Outlet />
    </main>
</div>
  )
}
