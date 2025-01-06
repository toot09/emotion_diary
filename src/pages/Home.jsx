import { useState, useReducer, useContext } from "react";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { data } from "react-router-dom";

function reducer(state, action) {
  const changedDate = new Date(
    state.getFullYear(),
    state.getMonth() + (action.type === "INCREASE" ? 1 : -1)
  );
  return changedDate;
}

const monthlyFilter = (pivotDate, data) => {
  return data.filter(
    (item) =>
      item.createdDate >=
        new Date(pivotDate.getFullYear(), pivotDate.getMonth()) &&
      item.createdDate <
        new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, dispatch] = useReducer(reducer, new Date());

  const monthlyData = monthlyFilter(pivotDate, data);

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={
          <Button
            text={"<"}
            onClick={() => {
              dispatch({ type: "DECREASE" });
            }}
          />
        }
        rightChild={
          <Button
            text={">"}
            onClick={() => {
              dispatch({ type: "INCREASE" });
            }}
          />
        }
      />
      <DiaryList data={monthlyData} />
    </div>
  );

  // const [pivotDate, setPivotDate] = useState(new Date());

  // const onIncreaseMonth = () => {
  //   setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  // };

  // const onDecreaseMonth = () => {
  //   setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  // };

  // return (
  //   <div>
  //     <Header
  //       title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
  //       leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
  //       rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
  //     />
  //     <DiaryList />
  //   </div>
  // );
};

export default Home;
