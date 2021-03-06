import styled from 'styled-components';
import Keyboard from './keyboard';
import Screen from './screen';
import CalculatorHeader from './calculatorHeader';

const MainWrapperStyled = styled.div`
    min-width: 20%;
    max-width: 400px;
    display: grid;
    grid-template-rows: auto auto auto;
    background-color: ${props => props.theme.mainBackground};
    row-gap: 20px;

    @media(max-width: 500px) {
        padding: 10px;
    }
`;

export default function MainWrapper({changeTheme}) {
    return(
        <MainWrapperStyled>
            <CalculatorHeader changeTheme={changeTheme}/>
            <Screen/>
            <Keyboard/>
        </MainWrapperStyled>
    )
}