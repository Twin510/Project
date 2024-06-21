import Registration from './components/regestraion';
import Login from './components/login';
import Aboutus from './components/about us';
import Contactus from './components/contactus';
import Menu from './components/menu';
import Home from './components/home';
import Viewdetail from './components/viewdetail';
import Moredetail from './components/moredetail';
import Myrecipe from './components/myrecipe';
import Viewreview from './components/viewreview';
import Feedback from './components/feedback';
import Profile from './components/profile';
import Addtocart from './components/addtocart';
import Forgotpass from './components/forgotpassword';
import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Header from './components/header';
function App() {
  return (
    <div className="App">

<Router>
      <Header/>
   
      <Routes>
        
        <Route  exact path='/login' element={<Login/>}/>
        <Route  exact path='/registration' element={<Registration/>}/>
        <Route  exact path='/aboutus' element={<Aboutus/>}/>
        <Route  exact path='/contactus' element={<Contactus/>}/>
        <Route  exact path='/menu' element={<Menu/>}/>
        <Route  exact path='/' element={<Home/>}/>
        <Route  exact path='/viewdetail' element={<Viewdetail/>}/>
        <Route  exact path='/moredetail' element={<Moredetail/>}/>
        <Route  exact path='/myrecipe' element={<Myrecipe/>}/>
        <Route  exact path='/viewreview' element={<Viewreview/>}/>
        <Route  exact path='/feedback' element={<Feedback/>}/>
        <Route  exact path='/profile' element={<Profile/>}/>
        <Route  exact path='/addtocart' element={<Addtocart/>}/>
        <Route  exact path='/forgotpass' element={<Forgotpass/>}/>
      </Routes>
</Router>
      
     
    </div>
  );
}

export default App;
