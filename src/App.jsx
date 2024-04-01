import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { SidebarApp } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <div className="basis-1/4">
          <SidebarApp />
        </div>
        <div className="basis-9/12">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
