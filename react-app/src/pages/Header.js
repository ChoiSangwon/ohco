import styled from "styled-components";


const StyledHearder = styled.div({
    width:'100%',
    position:'fixed',
    top:0,
    left:0,
    height:'60px',
    borderBottom:'1px solid #e1e1e1',
    // background: 'linear-gradient(90.22deg, #496ACE -1.38%, #715DEB 92.8%)',

    
})
const StyledText = styled.div({
    display:'inline-block',
    fontSize:'30px',
    padding:'10px 0 0 10px',
})

function Headers(){
    return (
        <StyledHearder>
            <StyledText>
                오코
            </StyledText>
        </StyledHearder>
    )
}

export default Headers;