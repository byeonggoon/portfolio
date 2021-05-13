import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';


const buttonStyle = css`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    
    padding: 0.3rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;

    background: rgb(24,144,255);
    &:hover {
        background: rgb(64,169,255);
    }
    ${(props) =>
        props.fullWidth &&
        css`
            padding-top: 0.8rem;
            padding-bottom: 0.8rem;
            width: 100%;
            font-size: 1.2rem;
        `}
    ${(props) =>
        props.cyan &&
        css`
            background: rgb(24,144,255);
            &:hover {
                background:  rgb(64,169,255);
            }
        `}
`;

const StyledButton = styled.button`
    ${buttonStyle}
`;
const StyledLink = styled(Link)`
    ${buttonStyle}
`;
const Btn = (props) => {
    return props.to ? (
        <StyledLink {...props} />
    ) : (
        <StyledButton {...props} />
    );
};
export default Btn;
