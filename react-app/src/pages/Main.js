import styled from "styled-components";
import React from "react";
import { Button } from 'semantic-ui-react'
import TodayDate from "../Components/TodayDate";
import Story from "../Components/Story";


const StyledMain = styled.div({
    height:'2000px',
    marginTop:'70px',
})

const MainBody = styled.div({
    paddingLeft:'100px',
    paddingRight:'100px',
    
})

const MainBodyTop = styled.div({

})

const MainBodyBottom = styled.div({
    marginTop:'60px',
})

const MainText = styled.div({
    display:'block',
    fontSize:'40px',
    height:'50px',
})

function Main(){
    return(<StyledMain>
        <MainBody>
            <MainBodyTop>
                <div style={{marginTop:'100px'}}>
                    <MainText>
                        ---님 환영합니다!
                    </MainText>
                    <MainText>
                        오늘 코딩 하셨나요?
                    </MainText>
                </div>
                <Button size="big" style={{float:'right'}}>글쓰기</Button>
            </MainBodyTop>
            <MainBodyBottom>
                <Story />
            </MainBodyBottom>
        </MainBody>

    </StyledMain>)
}

export default Main;