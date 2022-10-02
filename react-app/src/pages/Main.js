import styled from "styled-components";
import React from "react";
import { Button } from "semantic-ui-react";
import TodayDate from "../Components/TodayDate";
import Story from "../Components/Story";
import { useState } from "react";
import AddStory from "../Components/AddStory";

const StyledMain = styled.div({
  height: "2000px",
  marginTop: "70px",
});

const MainBody = styled.div({
  paddingLeft: "100px",
  paddingRight: "100px",
});

const MainBodyTop = styled.div({});

const MainBodyBottom = styled.div({
  marginTop: "80px",
});

const MainText = styled.div({
  display: "block",
  fontSize: "40px",
  height: "50px",
});

function Main() {
  const [arr, setArr] = useState([
    {
      name: "최상원",
      body: "adsjfh",
    },
  ]);
  const [storyOpen, setStoryOpen] = useState(false);
  const addStory = () => {
    const curarr = [...arr];
    curarr.push({ name: "최상원", body: "" });
    setArr(curarr);
  };

  return (
    <StyledMain>
      <MainBody>
        <MainBodyTop>
          <div style={{ marginTop: "100px" }}>
            <MainText>---님 환영합니다!</MainText>
            <MainText>오늘 코딩 하셨나요?</MainText>
          </div>
          <div
            style={{ display: "inline-block" }}
            onClick={() => {
              setStoryOpen(true);
            }}
          >
            <Button size="big" style={{ float: "right" }}>
              글쓰기
            </Button>
          </div>
        </MainBodyTop>
        <MainBodyBottom>
          {arr.length > 0
            ? arr.map((cur) => <Story name={cur.name} body={cur.body} />)
            : "nodata"}
        </MainBodyBottom>
        <AddStory
          open={storyOpen}
          setOpen={setStoryOpen}
          arr={arr}
          setArr={setArr}
        />
      </MainBody>
    </StyledMain>
  );
}

export default Main;
