import React from 'react';
import { ReactComponent as LogoOutline } from './icons/logo.svg';
import styled from '@emotion/styled';
import { useColorModeValue, Text } from '@chakra-ui/react';
import Link from 'next/link';

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
`

const Logo = () => {
    const bearSleepImg = 'https://i.imgur.com/PrnoA0c.png'

    return(
        <Link legacyBehavior href="/">
            <a>
                <LogoBox>
                    <img src={bearSleepImg} width={28} height={28} alt="logo"/>
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c'
                        fontWeight='bold'
                        ml={3}
                        mr={100}>
                        Don Colchon
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo;
