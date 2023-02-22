import {
  BrowserRouter, Route, Routes
} from "react-router-dom"
import Sidebar from "./components/sidebar";
import { MainRoute } from "./route/index";


function App() {
  const isAuthenticationRoute = window.location.pathname.startsWith('/auth');
 
  return (
    <BrowserRouter>
      <div>
        {isAuthenticationRoute && (
          <div className="sidebar">
            <Sidebar />
          </div>
        )}
        <div className="main">

          <Routes>
          
            {MainRoute &&
              MainRoute.map((item, index) => (
                <Route
                  key={index}
                  path={item.path}
                  element={item.element}
                />
              ))}

{MainRoute &&
              MainRoute.map((item, index) => (
                <Route
                  key={index}
                  path={item.path}
                  element={item.element}
                />
              ))}

            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};


export default App;