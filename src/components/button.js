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

export default function Button({ value, className }) {
    function writeOnScreen() {
        const screen = document.getElementById("screenInput");

        const spaceAroundOperators = ['+', '-', '/', 'x'];

        let previousChar = (n) => screen.value[screen.value.length - n];

        let operatorBehind = spaceAroundOperators.some(el => el === previousChar(2)) ? true : false;

        if (spaceAroundOperators.find(el => el === value)) { //para adicionar espaços entre os operadores. Ex: '3 + 1'
            if (operatorBehind) {//se o usuário tentar inserir dois operadores seguidos. Ex: '3 + + 1'
                return
            }
            screen.value = `${screen.value} ${value} `;
        } 
        else if (previousChar(1) === '.' && value === '.') {
            return
        } 
        else if (value === 'DEL') {
            operatorBehind ? screen.value = screen.value.slice(0, -3) : screen.value = screen.value.slice(0, -1);
        } 
        else if (value === 'RESET') {
            screen.value = '';
        }
        else if (value === '=') {
            let valueToBeEvalued = screen.value.replace('x', '*');
            screen.value = Number.isInteger(eval(valueToBeEvalued)) ? eval(valueToBeEvalued) : eval(valueToBeEvalued).toFixed(1);
        }
        else {
            screen.value = screen.value + value;
        }
    }

    return (
        <>
            <StyledButton value={value} className={className ? className : ''} onClick={writeOnScreen}>
                {value}
            </StyledButton>
        </>
    )
}