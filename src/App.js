import "./App.css";
import Container from "./components/Layout/Container/Container";
import Filter from "./components/Layout/Filter/Filter";
import Header from "./components/Layout/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Container />
    </div>
  );
}

export default App;
