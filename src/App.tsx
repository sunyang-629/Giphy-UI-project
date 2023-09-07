import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

function App() {
  return (
    <div className="App" data-testid="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
