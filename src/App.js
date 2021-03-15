import "./App.css";
import NavBar from "./components/NavBar";
import Counter from "./components/Counter";
import { menuItems } from "./helpers/menu";
import { AppContext, initialState } from "./AppContext";
import { useState } from "react";

function App() {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={{ state, setState }}>
      <div className="App">
        <NavBar title="E-commerce" links={menuItems} />
        <Counter stock={5} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
