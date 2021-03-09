import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const menuItems = [
    {
      title: "t-shirts",
      link: "#",
      active: true,
    },
    {
      title: "trousers",
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
    </div>
  );
}

export default App;
