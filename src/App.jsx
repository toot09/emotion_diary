import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";

// 1. "/" : 모든 일기를 조회하는 Home페이지
// 2. "/new" : 새 일기를 작성하는 new 페이지
// 3. "/diary" : 특정 일기를 조회하는 diary 페이지
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
