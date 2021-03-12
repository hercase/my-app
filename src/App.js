import "./App.css";
import NavBar from "./components/NavBar";
import Counter from "./components/Counter";

function App() {
  const menuItems = [
    {
      title: "t-shirts",
      link: "#",
      active: true,
    },
    {
      title: "trousers",
      link: "#",
      active: true,
    },
    {
      title: "jeans",
      link: "#",
      active: true,
    },
    {
      title: "sandals",
      link: "#",
      active: true,
    },
    {
      title: "contact",
      link: "#",
      active: true,
    },
  ];
  return (
    <div className="App">
      <NavBar title="E-commerce" links={menuItems} />
      <Counter stock={5} />
    </div>
  );
}

export default App;
