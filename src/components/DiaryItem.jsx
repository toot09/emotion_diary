import "./DiaryItem.css";
import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ item }) => {
  const nav = useNavigate();

  return (
    <div className="DiaryItem">
      <div
        onClick={() => nav(`/diary/${item.id}`)}
        className={`img_section img_section_${item.emotionId}`}
      >
        <img src={getEmotionImage(item.emotionId)} />
      </div>
      <div onClick={() => nav(`/diary/${item.id}`)} className="info_section">
        <div className="created_date">
          {new Date(item.createdDate).toLocaleDateString()}
        </div>
        <div className="content">{item.content}</div>
      </div>
      <div onClick={() => nav(`/edit/${item.id}`)} className="button_section">
        <Button text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
