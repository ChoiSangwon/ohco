import styled from "styled-components";

const StyledStory = styled.div({
    height:'450px',
    width:'350px',
    boxShadow: '5px 5px 10px 3px rgba(0, 0, 0, 0.25)',
    borderRadius: '30px',
})

const StyledHearder = styled.div({
    padding:'15px',
    display: 'flex',
})
const StyledHearderImg = styled.img({
    height:'50px',
    width:'50px',
    borderRadius:'50px'
})
const StyledHearderText = styled.div({
    display:'inline-block',
    fontSize:'24px',
    marginLeft:'20px',
    marginTop:'15px',
})

const StyledTextArea = styled.div({
    padding:'0 15px 15px 15px',
    fontSize:'16px'
})

const StyledImgArea = styled.img({
    width:'100%',
    height:'335px',
    borderRadius:'0px 0px 30px 30px',
    
})

function Story(){
    return (
        <StyledStory>
            <StyledHearder>
                <StyledHearderImg src="https://react.semantic-ui.com/images/wireframe/image.png"/>
                <StyledHearderText >최상원</StyledHearderText>
            </StyledHearder>
            <StyledTextArea>
                ㅇㅇㅇ
            </StyledTextArea>
            <StyledImgArea src="https://react.semantic-ui.com/images/wireframe/image.png"/>
        </StyledStory>
    )
}

export default Story;