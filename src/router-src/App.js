import Nav from "./Nav";
import About from "./pages/aboutPage";
import Index from "./pages/indexPage";
import Join from "./pages/joinPage";

import './index.css'

const { Route } = require("react-router-dom");

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="wrap">
          <h1 id="logo">KaiKeBa</h1>
        </div>
        <nav className="nav">
          <Nav />
        </nav>
      </header>
      <Route path={["/","/index","/home"]} exact component={Index} />
      <Route path="/about" exact component={About} />
      <Route path="/join" exact component={Join} />
    </div>
  );
}

export default App;
