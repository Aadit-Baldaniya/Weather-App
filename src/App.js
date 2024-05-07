import logo from "./logo.svg";
import { getDatabase, set, ref } from "firebase/database";
import { app } from "./Firebase";
import "./App.css";
// import Weather from "./components/weather/Weather";
// import Fetch from "./components/practice/Fetch";
// import LoaderEffct from "./components/LoaderEffct.jsx/LoaderEffct";
import { faAppStore } from "@fortawesome/free-brands-svg-icons";

const db = getDatabase(app);
function App() {
  const putData = () => {
    set(ref(db, "user/Adit"), {
      name: "aadit",
      name: "akash",
    });
  };
  return (
    <div className="App">
      <h1>React And FireBase</h1>
      <button onClick={putData}>Click and Store Data For FireBase</button>
    </div>
  );
}

export default App;
