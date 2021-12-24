import styled from "styled-components";
import ThemeToggler from "./themeToggler";

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    color: ${props => props.theme.calc};
    margin-bottom: 10px;

    #calc {
        font-size: 1.5rem;
        margin: 0 0 -5px 0;
    }
`;

export default function CalculatorHeader({changeTheme}) {
    return(
        <>
            <StyledHeader>
                <span id='calc'>calc</span>
                <ThemeToggler changeTheme={changeTheme}/>
            </StyledHeader>
        </>
    )
}