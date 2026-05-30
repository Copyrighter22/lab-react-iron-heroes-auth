import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/ui";
import {
  HomePage,
  RegisterPage,
  LoginPage,
  HeroesPage,
  HeroDetailPage,
} from "./pages";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/heroes" element={<HeroesPage />} />
        <Route path="/heroes/:id" element={<HeroDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
