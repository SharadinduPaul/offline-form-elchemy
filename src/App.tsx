import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Form from "./screens/form";

function App() {
  return (
    <div className="app">
      <Form />

      <ToastContainer />
    </div>
  );
}

export default App;
