import { useParams, useNavigate } from "react-router-dom";
import Header from "./../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "./../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const onClick = () => {
    onDelete(params.id);
    nav("/", { replace: true });
  };

  const onSubmit = (input) => {
    onUpdate(params.id, input.createdDate, input.emotionId, input.content);
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"<뒤로 가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClick} />
        }
      />
      <Editor
        onSubmit={onSubmit}
        diary={data.filter((item) => Number(item.id) === Number(params.id))}
      />
    </div>
  );
};

export default Edit;
