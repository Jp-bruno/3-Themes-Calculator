import styled from "styled-components";
import theme1 from "../styles/themes/theme1";
import theme2 from "../styles/themes/theme2";
import theme3 from "../styles/themes/theme3.js";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
        font-size: 0.6rem;
        margin: 0 20px 3px 0;
        align-self: end;
    }

    ul {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        flex-direction: row;

        li {
            font-size: 0.6rem;
            text-align: center;
            width: 18px;
        }
    }

    #numbers {
        margin: 0 0 3px 0;
    }

    #inputs {
        background-color: ${props => props.theme.keypadBackground};
        border-radius: 18px;
        height: 20px;
    
        &::after {
            content: '';
            position: absolute;
            width: 13px;
            height: 13px;
            background-color: ${props => props.theme.equalBackground};
            border-radius: 8px;
            pointer-events: none;
            transform: translate(var(--distance), 3px);
            transition: transform 0.3s ease;
        }

        input {
            cursor: pointer;
            opacity: 0;
        }
    }
`;

export default function ThemeToggler({ changeTheme }) {
    function change(ev) {
        let inputs = Array.from(document.querySelectorAll('li input'));
        let root = document.querySelector(':root')

        inputs.forEach(el => {
            if (el != ev.target && el.checked) {
                el.checked = false
            }
        })

        switch (ev.target.id) {
            case 'theme1':
                root.style.setProperty('--distance', '4px')
                changeTheme(theme1)
                break;

            case 'theme2':
                root.style.setProperty('--distance', '20px')
                changeTheme(theme2)
                break;

            case 'theme3':
                root.style.setProperty('--distance', '36px')
                changeTheme(theme3)
                break;

            default:

                break;
        }
    }

    return (
        <>
            <StyledContainer>
                <span>THEME</span>
                <div>
                    <ul id='numbers'>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>

                    <ul id='inputs'>
                        <li><input id='theme1' onClick={change} type='radio' defaultChecked></input></li>
                        <li><input id='theme2' onClick={change} type='radio'></input></li>
                        <li><input id='theme3' onClick={change} type='radio'></input></li>
                    </ul>
                </div>
            </StyledContainer>
        </>
    )
}