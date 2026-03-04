'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    useMediaQuery,
    useTheme,
    Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const pathname = usePathname();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const isHome = pathname === '/';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const transparent = isHome && !scrolled && !drawerOpen;

    return (
        <>
            <AppBar
                position="fixed"
                elevation={scrolled ? 3 : 0}
                sx={{
                    background: transparent
                        ? 'transparent'
                        : 'rgba(10, 22, 40, 0.97)',
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                    transition: 'all 0.3s ease',
                    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ py: { xs: 1, md: 1.5 }, justifyContent: 'space-between' }}>
                        {/* Logo */}
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <Box
                                    sx={{
                                        width: 36,
                                        height: 36,
                                        background: 'linear-gradient(135deg, #1E3A8A, #2563EB)',
                                        borderRadius: '4px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontFamily: '"Playfair Display", Georgia, serif',
                                        fontWeight: 700,
                                        color: 'white',
                                    fontSize: '1.1rem',
                                    }}
                                >
                                    NK
                                </Box>
                                <Box>
                                    <Box
                                        sx={{
                                            fontFamily: '"Playfair Display", Georgia, serif',
                                            fontWeight: 700,
                                            color: 'white',
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        Niraj Kathe
                                    </Box>
                                    <Box
                                        sx={{
                                            color: 'rgba(255,255,255,0.6)',
                                            fontSize: '0.65rem',
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                            fontWeight: 600,
                                        }}
                                    >
                                        Civil Engineer & Developer
                                    </Box>
                                </Box>
                            </Box>
                        </Link>

                        {/* Desktop Nav */}
                        {!isMobile && (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                {navItems.map((item) => (
                                    <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
                                        <Button
                                            sx={{
                                                color: pathname === item.href ? '#60A5FA' : 'rgba(255,255,255,0.85)',
                                                fontSize: '0.85rem',
                                                fontWeight: pathname === item.href ? 700 : 500,
                                                px: 1.5,
                                                borderBottom: pathname === item.href
                                                    ? '2px solid #2563EB'
                                                    : '2px solid transparent',
                                                borderRadius: 0,
                                                '&:hover': {
                                                    color: 'white',
                                                    background: 'transparent',
                                                    borderBottom: '2px solid rgba(96, 165, 250, 0.5)',
                                                },
                                            }}
                                        >
                                            {item.label}
                                        </Button>
                                    </Link>
                                ))}
                                <Button
                                    component="a"
                                    href="tel:+919876543210"
                                    variant="contained"
                                    startIcon={<PhoneIcon sx={{ fontSize: '1rem !important' }} />}
                                    sx={{
                                        ml: 2,
                                        fontSize: '0.82rem',
                                        py: 1,
                                        px: 2.5,
                                        background: 'linear-gradient(135deg, #1E3A8A, #2563EB)',
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #0A1628, #1E3A8A)',
                                        },
                                    }}
                                >
                                    Consult Free
                                </Button>
                            </Box>
                        )}

                        {/* Mobile Menu Button */}
                        {isMobile && (
                            <IconButton
                                onClick={() => setDrawerOpen(true)}
                                sx={{ color: 'white' }}
                                aria-label="Open navigation menu"
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                    sx: {
                        width: 280,
                        background: '#0A1628',
                        borderLeft: '1px solid rgba(37, 99, 235, 0.2)',
                    },
                }}
            >
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton
                        onClick={() => setDrawerOpen(false)}
                        sx={{ color: 'rgba(255,255,255,0.7)' }}
                        aria-label="Close navigation menu"
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{ px: 2, pb: 2, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <Box
                        sx={{
                            fontFamily: '"Playfair Display", Georgia, serif',
                            fontWeight: 700,
                            color: 'white',
                            fontSize: '1.1rem',
                        }}
                    >
                        Niraj Kathe
                    </Box>
                    <Box sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        Civil Engineer & Developer
                    </Box>
                </Box>
                <List sx={{ pt: 1 }}>
                    {navItems.map((item) => (
                        <ListItem key={item.href} disablePadding>
                            <ListItemButton
                                component={Link}
                                href={item.href}
                                onClick={() => setDrawerOpen(false)}
                                selected={pathname === item.href}
                                sx={{
                                    py: 1.5,
                                    px: 3,
                                    color: pathname === item.href ? '#60A5FA' : 'rgba(255,255,255,0.75)',
                                    '&.Mui-selected': {
                                        backgroundColor: 'rgba(37, 99, 235, 0.1)',
                                        borderLeft: '3px solid #2563EB',
                                    },
                                    '&:hover': {
                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                        color: 'white',
                                    },
                                }}
                            >
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{ fontWeight: pathname === item.href ? 700 : 500, fontSize: '0.95rem' }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Box sx={{ p: 3, mt: 'auto' }}>
                    <Button
                        fullWidth
                        variant="contained"
                        href="tel:+919876543210"
                        startIcon={<PhoneIcon />}
                        sx={{
                            background: 'linear-gradient(135deg, #1E3A8A, #2563EB)',
                            py: 1.3,
                        }}
                    >
                        Call for Free Consult
                    </Button>
                </Box>
            </Drawer>

            {/* Spacer for non-hero pages */}
            {!isHome && <Toolbar sx={{ mb: { xs: 1, md: 2 } }} />}
        </>
    );
}
