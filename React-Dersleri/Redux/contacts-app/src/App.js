import "./App.css";
import Contacts from "./components/contact";
import List from "./components/list";

function App() {
  return (
    <div className="container mx-auto border-2 border-grey-custom rounded-[20px] bg-violet-200 p-4 mt-4">
      <Contacts />
      <List />
    </div>
  );
}

export default App;
