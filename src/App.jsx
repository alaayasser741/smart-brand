// App.js
import { useSelector } from "react-redux";
import { selectSidebarState } from "./context/sidebarSlice";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { SidebarApp } from "./components";

function App() {
  const { isCollapsed } = useSelector(selectSidebarState);


  return (
    <BrowserRouter>
      <div className="flex">
        <div className={`${isCollapsed ? "w-sidebarCollapsed" : "w-sidebar"}`}>
          <SidebarApp />
        </div>
        <div className={`${isCollapsed ? "w-contentCollapsed" : "w-content"}`}>
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
