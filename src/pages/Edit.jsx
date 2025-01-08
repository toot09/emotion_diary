import { useParams, useNavigate } from "react-router-dom";
import Header from "./../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "./../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(() => {
    const currentDiarayItem = data.find(
      (item) => Number(item.id) === Number(params.id)
    );
    if (!currentDiarayItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
      return;
    }
    setCurDiaryItem(currentDiarayItem);
  }, [params.id]);

  const onClick = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("수정 하시겠습니까?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
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
      <Editor onSubmit={onSubmit} initData={curDiaryItem} />
    </div>
  );
};

export default Edit;
