import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container min-w-[640px] max-w-[768px] mx-auto">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
