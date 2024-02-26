import React from 'react';
import { ReactComponent as LogoOutline } from './icons/logo.svg';
import styled from '@emotion/styled';

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 40px;
    line-height: 20px;
    padding: 10px;

    > svg {
        transition: 200ms ease;
    }
`;

const Logo = () => {
    return (
        <LogoBox>
            <LogoOutline className="ionicon" />
        </LogoBox>
    );
};

export default Logo;
