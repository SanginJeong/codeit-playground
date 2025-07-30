import "./App.css";
import { Routes, Route } from "react-router";
import AppLayout from "./layout/AppLayout";
import AdminPage from "./pages/AdminPage/AdminPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PrivatePage from "./pages/PrivatePage/PrivatePage";
import PartPage from "./pages/PartPage/PartPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import CategoryDetailPage from "./pages/CategoryDetailPage/CategoryDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="part">
          <Route path=":id" element={<PartPage />}>
            <Route path=":category" element={<CategoryDetailPage />} />
          </Route>
        </Route>
      </Route>

      <Route element={<PrivatePage />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
