import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { Navbar } from "./components";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
