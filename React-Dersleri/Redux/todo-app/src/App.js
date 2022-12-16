import "./index.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <section className="todoApp">
        <Header />
        <Content />
      </section>
      <Footer />
    </>
  );
}

export default App;
