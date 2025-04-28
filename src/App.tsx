import "./App.css";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import MainLayout from "./layouts/mainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
