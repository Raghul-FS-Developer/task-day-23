import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Dashboard from "./components/DashBoard";
import NavBar from "./components/Navbar";
import Components from "./components/components";
import Utilities from "./components/Utilities";
import Four from "./components/404";
import Forget from "./components/forget";
import Table from "./components/table";
import Register from "./components/register";
import Login from "./components/login";
import Charts from "./components/charts";
function App() {
 
  return (
    <Router>
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        {/* {/* <!-- Sidebar --> * */}
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <SideBar />
        </ul>
        {/* {/* <!-- Content Wrapper --> * */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content -->  */}
          <div id="content">
            {/* /* <!-- Topbar --> * */}
            <NavBar />
            <div className="container-fluid">
              <Routes>
                <Route
                  path="/"
                  element={<Dashboard/>}
                />
                <Route path = "/comp" element={<Components/>}/>
                <Route path = "/Utilities" element={<Utilities/>}/>
                <Route path ="/four" element={<Four/>}/>
              <Route path ="/forget" element={<Forget/>}/>
              <Route path ="/tables" element={<Table/>}/>
              <Route path ="/register" element={<Register/>}/>
              <Route path ="/login" element={<Login/>}/>
              <Route path ="/charts" element={<Charts/>}/>
              
              
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
