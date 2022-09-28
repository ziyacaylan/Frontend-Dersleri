import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import Container from "./components/Container";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Container />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
