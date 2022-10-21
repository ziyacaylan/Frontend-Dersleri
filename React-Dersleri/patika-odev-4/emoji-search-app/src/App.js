import "./App.css";
import { EmojiProvider } from "./context/EmojiContext";
import Header from "./components/Header/Header";
import EmojiResults from "./components/Emoji/EmojiResults";

function App() {
  return (
    <div className="App">
      <EmojiProvider>
        <Header />
        <EmojiResults />
      </EmojiProvider>
    </div>
  );
}

export default App;
