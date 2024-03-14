import React from 'react';
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
    const bearSleepImg = 'https://imagizer.imageshack.com/img922/7131/E7tMD7.png'

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
                        mr={30}>
                        Don Colchon
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo;
