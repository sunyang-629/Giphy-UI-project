import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

function App() {
  return (
    //** leave the data-testid arr here for adding test in the future */
    <div className="App" data-testid="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
