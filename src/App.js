import { Routes, Route } from 'react-router-dom'
//import {logo} from './logo.svg';
import './App.css';
import {Login} from './Components/Login';
import {Navbar} from './Components/Navbar';
import {RCApp} from './Components/RCApp';
import {RCDisp} from './Components/RCDisp';
import {LicenseApp} from './Components/LicenseApp';
import {PermitApp} from './Components/PermitApp';
import {PermitDisp} from './Components/PermitDisp';
import {AdminLogin} from './Components/AdminLogin';
import {Navbar2} from './Components/Navbar2';
import {AdminRC} from './Components/AdminRC';
import {AdminLicense} from './Components/AdminLicense';
import {AdminPermit} from './Components/AdminPermit';
import {Report} from './Components/Report';


function App() {
  return (
   <Routes>
    <Route path='/'  element={<Login/>}></Route>
    <Route path='/navbar'  element={<Navbar/>}></Route>
    <Route path='/rcapp'  element={<RCApp/>}></Route>
    <Route path='/rcdisp'  element={<RCDisp/>}></Route>
    <Route path='/licenseapp'  element={<LicenseApp/>}></Route>
    <Route path='/permitapp'  element={<PermitApp/>}></Route>
    <Route path='/permitdisp'  element={<PermitDisp/>}></Route>
    <Route path='/adminlogin' element={<AdminLogin/>}></Route>
    <Route path='/navbar2' element={<Navbar2/>}></Route>
    <Route path='/adminrc' element={<AdminRC/>}></Route>
    <Route path='/adminlicense' element={<AdminLicense/>}></Route>
    <Route path='/adminpermit' element={<AdminPermit/>}></Route>
    <Route path='/report' element={<Report/>}></Route>
    
   </Routes>
  );
}

export default App;
