import { ChatProvider, useChat } from "./context/ChatContext";
import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <ChatProvider>
      <Container />
    </ChatProvider>
  );
}

export default App;
