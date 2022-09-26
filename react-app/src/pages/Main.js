import styled from "styled-components";
import React from "react";

import { Button } from 'semantic-ui-react'



const StyledMain = styled.div({
    height:'2000px',
    marginTop:'60px',
})

const MainBody = styled.div({
    paddingLeft:'50px',
    paddingRight:'50px',
    
})

const MainText = styled.div({
    fontSize:'40px',
})

function Main(){
    return(<StyledMain>
        <MainBody>
            <div>
                <MainText>
                    ---님 환영합니다!
                </MainText>
                <MainText>
                    오늘 코딩 하셨나요?
                </MainText>
            </div>
            <Button >Click Here</Button>
        </MainBody>
    </StyledMain>)
}

export default Main;