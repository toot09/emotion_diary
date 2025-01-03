import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
import Button from "./components/Button";
import Header from "./components/Header";

import { getEmotionImage } from "./util/get-emotion-image";

// 1. "/" : 모든 일기를 조회하는 Home페이지
// 2. "/new" : 새 일기를 작성하는 New 페이지
// 3. "/diary" : 특정 일기를 조회하는 Diary 페이지
function App() {
  const nav = useNavigate();
  const onClick = () => {
    nav("/new");
  };

  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right}"} />}
      />
      {/*       
      <div>
        <img src={getEmotionImage(1)} alt="emotion1" />
        <img src={getEmotionImage(2)} alt="emotion2" />
        <img src={getEmotionImage(3)} alt="emotion3" />
        <img src={getEmotionImage(4)} alt="emotion4" />
        <img src={getEmotionImage(5)} alt="emotion5" />
      </div>

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
       */}
      <Button
        text={"123"}
        type={"DEFAULT"}
        onClick={() => {
          console.log("123번 버튼클릭");
        }}
      />
      <Button
        text={"123"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("123번 버튼클릭");
        }}
      />
      <Button
        text={"123"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("123번 버튼클릭");
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
