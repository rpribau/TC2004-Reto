import NextLink from 'next/link';
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons'
import { FaArchive } from "react-icons/fa";
import { IoServer } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import {ThemeToggleButton} from './theme-toggle-button';

import { useState, useEffect, useRef, forwardRef } from 'react'
import Logo from './logo';
import SettingModal from './modal/setting_modal';

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = useColorModeValue('purple.500')
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
      <Link
        as={NextLink}
        href={href}
        scroll={false}
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    )
  }
  
  const MenuLink = forwardRef((props, ref) => <Link ref={ref} as={NextLink} {...props} />)
  
  const Navbar = (props) => {
    const { path } = props
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)
  
    const handleMenuToggle = () => {
      setIsOpen(!isOpen)
    }
  
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
  
    useEffect(() => {
      document.addEventListener('click', handleClickOutside)
      return () => {
        document.removeEventListener('click', handleClickOutside)
      }
    }, [])
  
    return (
      <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{ backdropFilter: 'blur(10px)' }}
        zIndex={1}
        {...props}
        ref={menuRef}
      >
        <Container 
            display="flex" 
            p={2} 
            maxW="container.md" 
            wrap="wrap" 
            align="center" 
            justify="space-between">

          <Flex align="center" mr={5}>
           
              <Heading as="h1" size="lg">
                <Logo />
              </Heading>
           
  
            <Stack
              direction={{ base: 'column', md: 'row' }}
              display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
              width={{ base: 'full', md: 'auto' }}
              alignItems="center"
              flexGrow={1}
              mt={{ base: 4, md: 0 }}
              spacing={{ base: 2, md: 4 }}
            >
              <LinkItem 
                href="http://127.0.0.1:8000" 
                path={path}
                display="inline-flex"
                alignItems="center"
                style={{ gap: 2 }}
                pl={2}
                >
                <IoServer />
                Server Status
              </LinkItem>
  
              <LinkItem 
                href="/" 
                path={path}
                display="inline-flex"
                alignItems="center"
                style={{ gap: 2 }}
                pl={2}
                >
              <FaArchive />
                Archive
              </LinkItem>
  
              <LinkItem 
                href="/" 
                path={path}
                display="inline-flex"
                alignItems="center"
                style={{ gap: 2 }}
                pl={2}
                >
                <IoSettings />
                Settings
              </LinkItem>
            
              <LinkItem
                
                href="https://doncolchon.com.mx"
                path={path}
                display="inline-flex"
                alignItems="center"
                style={{ gap: 2 }}
                pl={2}
              >
                <TbLogout />
                Log out
              </LinkItem>
            </Stack>
          </Flex>

        <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" display={{ base: 'flex', md: 'none' }} ml="auto" />
          <MenuList>
            <MenuItem>
              <LinkItem 
                href="/" 
                path={path}
                display="inline-flex"
                alignItems="center"
                style={{ gap: 2 }}
                pl={2}
                >
                <IoServer />
                Server Status
              </LinkItem>
            </MenuItem>
            <MenuItem>
              <LinkItem 
                href="/" 
                path={path}
                display="inline-flex"
                alignItems="center"
                style={{ gap: 2 }}
                pl={2}
                >
              <FaArchive />
                Archive
              </LinkItem>
            </MenuItem>
            <MenuItem>
              <LinkItem 
                href="/" 
                path={path}
                display="inline-flex"
                alignItems="center"
                style={{ gap: 2 }}
                pl={2}
                >
                <IoSettings />
                Settings
              </LinkItem>
            </MenuItem>
            <MenuItem>
              <LinkItem
                target="_blank"
                href="/"
                path={path}
                display="inline-flex"
                alignItems="center"
                style={{ gap: 2 }}
                pl={2}
              >
                <TbLogout />
                Log out
              </LinkItem>
            </MenuItem>
          </MenuList>
        </Menu>

        <ThemeToggleButton />
        
          
        </Container>
      </Box>
    )
  }

export default Navbar;