import styled from "styled-components";

const StyledButton = styled.button`
    width: 20%;
    height: 3rem;
    margin: 10px;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    .colored-type1 {
        background: red !important;
    }
`;

export default function Button({value, className}) {
    return(
        <>
            <StyledButton value={value} className={className ? className : ''}>
                {value}
            </StyledButton>
        </>
    )
}