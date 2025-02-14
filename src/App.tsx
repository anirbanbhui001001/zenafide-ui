import { useRoutes } from "react-router-dom";
import LoginPage from "@/pages/auth/login";
import routes from "./routes/route-config";

function App() {
  const content = useRoutes([
    {
      path: "/",
      element: <LoginPage />,
    },
    ...routes,
  ]);

  return content;
}

export default App;
