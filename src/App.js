
//import './App.css';
//import Body from './components/Body';
//import Fbheader from './components/Fbheader';
//import Body from './components/Body';
import Header from './components/Header';
import Registration from './components/Registration';
import Sidebar from './components/Sidebar';
import Login_form from './components/Login_form';

import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    // <div >
    //   <div>
    //   {/* <Fbheader/> */}
    //   <Header/>
    //    {/* <Login_form/>    */}
    //     {/* <Registration/>   */}
    //  <Sidebar/>  
    //  {/* <div><Body/></div> */}
    //   </div>
    // </div>

     
      <Router>
        <Header/>
        <Route path="/" exact component={Sidebar}/>
        <Route path="/Login_form" component={Login_form}/>
        <Route path="/Registration" component={Registration}/>
        </Router>




  );
}

export default App;
