import "./App.css";
import MuiMode from "./mui/MuiMod";
import AppProvider from "./providers/AppProvider";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <MuiMode />
      </div>
    </AppProvider>
  );
}

export default App;
