import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Bill from "./components/Bill";

function App() {
  return (
    <div className="container max-w-5xl mx-auto flex flex-col items-center justify-center">
      <Header />
      <MainSection />
      <Bill />
    </div>
  );
}

export default App;
