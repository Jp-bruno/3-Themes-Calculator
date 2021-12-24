import styled from "styled-components";
import Button from "./button";

const StyledKeyboard = styled.div`
    display: grid;
    grid-template-rows: auto auto auto auto auto;
    background-color: ${props => props.theme.keypadBackground};
    border-radius: 8px;
    padding: 12px;

    .row {
        display: flex;
        width: 100%;
        
        &:last-of-type {
            button {
                width: 100%;
            }
        }
        
        .colored-type1 {
            background-color: ${props => props.theme.deleteKeyBackground};
            color: ${props => props.theme.deleteFontColor};
            box-shadow: 0px 3px 1px ${props => props.theme.delShadow};
            font-size: 1rem;
        }

        .colored-type2 {
            background-color: ${props => props.theme.equalBackground};
            color: ${props => props.theme.equalFontColor};
            box-shadow: 0px 3px 1px ${props => props.theme.equalShadow};
        }

        button {
            background-color: ${props => props.theme.numberKeyBackground};
            color: ${props => props.theme.numberKeyColor};
            box-shadow: 0px 3px 1px ${props => props.theme.regularButtonShadow};
            font-size: 1.5rem;
        }
    }
`;

export default function Keyboard() {
    return (
        <>
            <StyledKeyboard>
                <div className='row'>
                    <Button value='7'/>
                    <Button value='8'/>
                    <Button value='9'/>
                    <Button value='DEL' className='colored-type1'/>
                </div>
                <div className='row'>
                    <Button value='4'/>
                    <Button value='5'/>
                    <Button value='6'/>
                    <Button value='+' className='operator'/>
                </div>
                <div className='row'>
                    <Button value='1'/>
                    <Button value='2'/>
                    <Button value='3'/>
                    <Button value='-' className='operator'/>
                </div>
                <div className='row'>
                    <Button value='.'/>
                    <Button value='0'/>
                    <Button value='/' className='operator'/>
                    <Button value='x' className='operator'/>
                </div>
                <div className='row'>
                    <Button value='RESET' className='colored-type1'/>
                    <Button value='=' className='operator colored-type2'/>
                </div>
            </StyledKeyboard>
        </>
    )
}