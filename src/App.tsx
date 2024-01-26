import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    //**todo leave the data-testid arr here for adding test in the future */
    <div className="App" data-testid="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
