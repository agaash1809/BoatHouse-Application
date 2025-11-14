import './admin.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import { useNavigate } from 'react-router-dom';

import Sidebar from './components/Sidebar';
function AdminDash() {
    const navigate = useNavigate();
    return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
      <button onClick={()=>navigate('/home')} style={{color:"black"}} className="adminlogout">Log Out</button>
    </div>
  );
}

export default AdminDash;
