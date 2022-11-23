import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
	  <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
