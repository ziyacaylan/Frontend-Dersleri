import Counter from "./components/Counter";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Counter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
