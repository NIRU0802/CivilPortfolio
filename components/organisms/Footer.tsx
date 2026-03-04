'use client';

import React from 'react';
import Link from 'next/link';
import {
    Box,
    Container,
    Grid,
    Typography,
    Button,
    IconButton,
    Divider,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';

const CanvasWrapper = dynamic(() => import('../3d/CanvasWrapper'), { ssr: false });
const FooterBlueprint = dynamic(() => import('../3d/FooterBlueprint'), { ssr: false });


const footerLinks = [
    {
        title: 'Principal Services',
        links: [
            { label: 'Residential Construction', href: '/services' },
            { label: 'Commercial Development', href: '/services' },
            { label: 'Land Development', href: '/services' },
            { label: 'Structural Design', href: '/services' },
            { label: 'Project Management', href: '/services' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About Niraj Kathe', href: '/about' },
            { label: 'Project Portfolio', href: '/projects' },
            { label: 'Photo Gallery', href: '/gallery' },
            { label: 'Contact Us', href: '/contact' },
        ],
    },
    {
        title: 'Serving Nashik',
        links: [
            { label: 'Gangapur Road', href: '#' },
            { label: 'College Road', href: '#' },
            { label: 'Indira Nagar', href: '#' },
            { label: 'Satpur & Ambad', href: '#' },
            { label: 'Pathardi Phata', href: '#' },
        ],
    },
];

const socialLinks = [
    { icon: <LinkedInIcon />, href: '#', label: 'LinkedIn' },
    { icon: <InstagramIcon />, href: '#', label: 'Instagram' },
    { icon: <YouTubeIcon />, href: '#', label: 'YouTube' },
];

export default function Footer() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

    return (
        <Box component="footer" ref={ref} sx={{ position: 'relative', background: '#050D1C' }}>

            {/* 2. Main Footer Body */}
            <Box
                sx={{
                    background: '#050D1C',
                    color: 'rgba(255,255,255,0.7)',
                    pt: { xs: 8, md: 10 },
                    pb: 4,
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* 3D SVG Background Layer */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 0,
                        opacity: 0.4,
                        pointerEvents: 'none',
                    }}
                >
                    <CanvasWrapper>
                        <FooterBlueprint inView={inView} />
                    </CanvasWrapper>
                </Box>

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={5}>
                        {/* Brand Column */}
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box sx={{ mb: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                                    <Box
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            background: 'linear-gradient(135deg, #1E3A8A, #2563EB)',
                                            borderRadius: '4px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontFamily: '"Playfair Display", Georgia, serif',
                                            fontWeight: 700,
                                            color: 'white',
                                            fontSize: '1.2rem',
                                        }}
                                    >
                                        NK
                                    </Box>
                                    <Box>
                                        <Typography
                                            sx={{
                                                fontFamily: '"Playfair Display", Georgia, serif',
                                                fontWeight: 700,
                                                color: 'white',
                                                fontSize: '1.4rem',
                                                lineHeight: 1.2,
                                            }}
                                        >
                                            Niraj Kathe
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: '#60A5FA',
                                                fontSize: '0.7rem',
                                                letterSpacing: '0.12em',
                                                textTransform: 'uppercase',
                                                fontWeight: 600,
                                            }}
                                        >
                                            Civil Engineer & Developer
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography
                                    sx={{
                                        maxWidth: 380,
                                        fontSize: '0.92rem',
                                        lineHeight: 1.8,
                                        color: 'rgba(255,255,255,0.5)',
                                        mb: 3,
                                    }}
                                >
                                    Building high-end residential and commercial spaces across Maharashtra. 15+ years of structural expertise and architectural vision.
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Quick Links Column */}
                        <Grid size={{ xs: 6, md: 3 }}>
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    mb: 3,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                Navigation
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                {footerLinks.flatMap(col => col.links).slice(0, 6).map((link) => (
                                    <Link key={link.label} href={link.href} passHref style={{ textDecoration: 'none' }}>
                                        <Typography
                                            sx={{
                                                color: 'rgba(255,255,255,0.5)',
                                                fontSize: '0.9rem',
                                                '&:hover': { color: '#60A5FA', transform: 'translateX(4px)' },
                                                transition: 'all 0.2s ease',
                                            }}
                                        >
                                            {link.label}
                                        </Typography>
                                    </Link>
                                ))}
                            </Box>
                        </Grid>

                        {/* Contact Column */}
                        <Grid size={{ xs: 6, md: 4 }}>
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    mb: 3,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                Contact Details
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <PhoneIcon sx={{ color: '#2563EB', fontSize: '1.2rem', mt: 0.3 }} />
                                    <Box>
                                        <Typography sx={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>+91 98765 43210</Typography>
                                        <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>Mon – Sat, 9am – 7pm</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <LocationOnIcon sx={{ color: '#2563EB', fontSize: '1.2rem', mt: 0.3 }} />
                                    <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                                        Registered Office: Nashik,<br />Maharashtra – 422001
                                    </Typography>
                                </Box>
                                <Box sx={{ pt: 1, display: 'flex', gap: 1.5 }}>
                                    {socialLinks.map((social) => (
                                        <IconButton
                                            key={social.label}
                                            component="a"
                                            href={social.href}
                                            target="_blank"
                                            sx={{
                                                color: 'rgba(255,255,255,0.4)',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                                '&:hover': {
                                                    color: '#60A5FA',
                                                    borderColor: '#60A5FA',
                                                    background: 'rgba(96, 165, 250, 0.05)',
                                                },
                                                transition: 'all 0.3s ease',
                                            }}
                                        >
                                            {social.icon}
                                        </IconButton>
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            justifyContent: 'space-between',
                            alignItems: { xs: 'flex-start', md: 'center' },
                            gap: 2,
                            mt: 8,
                            pt: 4,
                            borderTop: '1px solid rgba(255,255,255,0.05)',
                        }}
                    >
                        <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', letterSpacing: '0.02em' }}>
                            © {new Date().getFullYear()} Niraj Kathe – Niraj Kathe Construction. All rights reserved.
                        </Typography>

                        <Button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            startIcon={<KeyboardArrowUpIcon />}
                            sx={{
                                color: 'rgba(255,255,255,0.4)',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                '&:hover': {
                                    color: 'white',
                                    background: 'rgba(255,255,255,0.05)',
                                },
                            }}
                        >
                            Back to Top
                        </Button>
                        <Box sx={{ display: 'flex', gap: 4 }}>
                            <Link href="#" passHref style={{ textDecoration: 'none' }}>
                                <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', '&:hover': { color: 'white' } }}>Privacy Policy</Typography>
                            </Link>
                            <Link href="#" passHref style={{ textDecoration: 'none' }}>
                                <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', '&:hover': { color: 'white' } }}>Terms of Service</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

