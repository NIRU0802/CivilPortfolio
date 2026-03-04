'use client';

import React from 'react';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { motion, Variants } from 'framer-motion';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import EngineeringIcon from '@mui/icons-material/Engineering';
import GroupsIcon from '@mui/icons-material/Groups';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import UpdateIcon from '@mui/icons-material/Update';
import dynamic from 'next/dynamic';

const advantages = [
    {
        icon: <ArchitectureIcon sx={{ fontSize: '1.5rem' }} />,
        title: 'Precision Planning',
        description: 'Every project begins with structured analysis and thoughtful design decisions.',
    },
    {
        icon: <EngineeringIcon sx={{ fontSize: '1.5rem' }} />,
        title: 'Modern Engineering',
        description: 'We combine contemporary techniques with proven construction principles.',
    },
    {
        icon: <GroupsIcon sx={{ fontSize: '1.5rem' }} />,
        title: 'Client-Focused Approach',
        description: 'Your vision guides every stage from concept to completion.',
    },
    {
        icon: <VisibilityIcon sx={{ fontSize: '1.5rem' }} />,
        title: 'Transparent Process',
        description: 'Clear communication and predictable timelines at every step.',
    },
    {
        icon: <AssignmentTurnedInIcon sx={{ fontSize: '1.5rem' }} />,
        title: 'Quality Commitment',
        description: 'Materials, execution, and finishing meet high professional standards.',
    },
    {
        icon: <UpdateIcon sx={{ fontSize: '1.5rem' }} />,
        title: 'Future-Ready Design',
        description: 'Spaces built for long-term durability and modern living needs.',
    },
];

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function WhyChooseUs() {
    const theme = useTheme();

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 10, md: 16 },
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(180deg, #0A1628 0%, #050D1C 100%)',
                color: 'white',
            }}
        >

            {/* Content Layer */}
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <Typography
                            sx={{
                                color: '#3B82F6',
                                fontWeight: 700,
                                fontSize: '0.8rem',
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                mb: 2,
                                display: 'block'
                            }}
                        >
                            WHY CHOOSE US
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                fontFamily: '"Playfair Display", serif',
                                fontWeight: 700,
                                fontSize: { xs: '2.4rem', md: '3.5rem' },
                                mb: 3,
                                lineHeight: 1.1,
                            }}
                        >
                            Designed With Precision.<br />
                            <Box component="span" sx={{ color: '#3B82F6' }}>Built With Trust.</Box>
                        </Typography>
                        <Typography
                            sx={{
                                color: 'rgba(255,255,255,0.6)',
                                fontSize: { xs: '1rem', md: '1.15rem' },
                                lineHeight: 1.7,
                                maxWidth: 640,
                                mx: 'auto',
                            }}
                        >
                            Experience the intersection of structural engineering excellence and client-focused property development.
                        </Typography>
                    </motion.div>
                </Box>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                >
                    <Grid container spacing={3}>
                        {advantages.map((adv, idx) => (
                            <Grid key={idx} size={{ xs: 12, sm: 6, md: 4 }}>
                                <motion.div variants={fadeInUp}>
                                    <Box
                                        sx={{
                                            p: { xs: 4, md: 5 },
                                            height: '100%',
                                            background: 'rgba(255, 255, 255, 0.06)',
                                            backdropFilter: 'blur(12px)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: '16px',
                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                background: 'rgba(255, 255, 255, 0.08)',
                                                borderColor: 'rgba(59, 130, 246, 0.4)',
                                                boxShadow: '0 12px 48px rgba(59, 130, 246, 0.25)',
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 52,
                                                height: 52,
                                                borderRadius: '14px',
                                                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(96, 165, 250, 0.1))',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#3B82F6',
                                                mb: 3,
                                            }}
                                        >
                                            {adv.icon}
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: 'white',
                                                fontWeight: 700,
                                                fontSize: '1.1rem',
                                                mb: 1.5,
                                            }}
                                        >
                                            {adv.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: 'rgba(255,255,255,0.5)',
                                                fontSize: '0.92rem',
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {adv.description}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
}
