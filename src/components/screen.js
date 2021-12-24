import styled from "styled-components";

const StyledScreen = styled.div`
    height: 6rem;
    border-radius: 8px;
    
    input {
        height: 6rem;
        border-radius: 8px;
        color: ${props => props.theme.inputFontColor};
        text-align: right;
        border: none;
        padding: 0 1rem 0.2rem;
        width: 100%;
        font-size: 2rem;
        background-color: ${props => props.theme.screenBackground};
    }
`;

export default function Screen({value}) {
    return(
        <>
            <StyledScreen>
                <input ></input>
            </StyledScreen>
        </>
    )
}