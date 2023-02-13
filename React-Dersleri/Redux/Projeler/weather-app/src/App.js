import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <MainContainer />
    </>
  );
}

export default App;
