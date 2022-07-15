import Header from "./components/Header";
import "./App.css";
import Choices from "./components/Choices";
import Rules from "./components/Rules";
import ModalProvider from "./contexts/ModalContext";

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <Header />
        <Choices />
        <Rules />
      </div>
    </ModalProvider>
  );
}

export default App;
