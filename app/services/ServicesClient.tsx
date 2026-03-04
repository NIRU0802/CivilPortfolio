'use client';

import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import CallIcon from '@mui/icons-material/Call';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/molecules/ServiceCard';
import { motion } from 'framer-motion';

interface ServicesClientProps {
    services: any[];
}

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function ServicesClient({ services }: ServicesClientProps) {
    return (
        <Box sx={{ pt: { xs: 10, md: 12 } }}>
            {/* Header */}
            <Box
                sx={{
                    background: 'transparent',
                    py: { xs: 7, md: 10 },
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Box
                    aria-hidden="true"
                    sx={{
                        position: 'absolute', inset: 0,
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp}>
                            <Typography variant="overline" sx={{ color: '#60A5FA', letterSpacing: '0.14em', mb: 2, display: 'block' }}>
                                What We Offer
                            </Typography>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <Typography
                                variant="h1"
                                sx={{
                                    color: 'white',
                                    fontFamily: '"Playfair Display", serif',
                                    fontWeight: 700,
                                    fontSize: { xs: '2.2rem', md: '3.2rem' },
                                    mb: 2,
                                }}
                            >
                                Engineering Services
                            </Typography>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <Box sx={{ width: 64, height: 3, background: 'linear-gradient(90deg, #1E3A8A, #2563EB)', borderRadius: 2, mb: 3 }} />
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', maxWidth: 580 }}>
                                End-to-end engineering and construction solutions — from a single home to large-scale land developments — delivered with precision and transparency.
                            </Typography>
                        </motion.div>
                    </motion.div>
                </Container>
            </Box>

            {/* Services Grid */}
            <Box sx={{ py: { xs: 8, md: 12 }, background: '#F8F9FA' }}>
                <Container maxWidth="xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <Grid container spacing={3}>
                            {services.map((service) => (
                                <Grid key={service.id} size={{ xs: 12, sm: 6, md: 4 }}>
                                    <motion.div variants={fadeInUp}>
                                        <ServiceCard service={service} />
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </Container>
            </Box>

            {/* Why Choose Us */}
            <Box sx={{ py: { xs: 8, md: 12 }, background: 'white' }}>
                <Container maxWidth="lg">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <SectionHeading
                            overline="Our Difference"
                            title="Why Choose Bhalerao Builds?"
                            subtitle="We are not just contractors. We are your engineering partner — from concept to completion."
                            align="center"
                        />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <Grid container spacing={4}>
                            {[
                                { num: '01', title: 'Full Service Delivery', desc: 'Design, approvals, construction, and handover — under one roof. No coordination gaps.' },
                                { num: '02', title: 'IS Code Compliance', desc: 'Every structure meets IS code, NBC, and local authority specifications — no compromises.' },
                                { num: '03', title: 'Real-Time Reporting', desc: 'Weekly site progress reports with photos, cost breakdowns, and milestone tracking.' },
                                { num: '04', title: 'Fixed-Price Contracts', desc: 'Detailed contracts with fixed rates for major line items, protecting you from cost overruns.' },
                                { num: '05', title: '10-Year Structural Warranty', desc: 'We stand behind our work with comprehensive structural warranties on all new construction.' },
                                { num: '06', title: 'RERA & BDA Compliance', desc: 'Full support for RERA registration, BDA approvals, BBMP sanctions, and khata procedures.' },
                            ].map((item) => (
                                <Grid key={item.num} size={{ xs: 12, sm: 6, md: 4 }}>
                                    <motion.div variants={fadeInUp}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: 2.5,
                                                p: 3,
                                                borderRadius: '8px',
                                                border: '1px solid #E5E7EB',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    boxShadow: '0 8px 30px rgba(30,58,138,0.1)',
                                                    borderColor: '#BFDBFE',
                                                    transform: 'translateY(-2px)',
                                                },
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontFamily: '"Playfair Display", serif',
                                                    fontWeight: 700,
                                                    color: '#DBEAFE',
                                                    fontSize: '2rem',
                                                    lineHeight: 1,
                                                    flexShrink: 0,
                                                }}
                                            >
                                                {item.num}
                                            </Typography>
                                            <Box>
                                                <Typography sx={{ fontWeight: 700, color: '#0A1628', fontSize: '0.95rem', mb: 0.8 }}>
                                                    {item.title}
                                                </Typography>
                                                <Typography sx={{ color: '#6B7280', fontSize: '0.87rem', lineHeight: 1.7 }}>
                                                    {item.desc}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </Container>
            </Box>

            {/* CTA */}
            <Box
                sx={{
                    py: { xs: 8, md: 10 },
                    background: 'linear-gradient(160deg, #0A1628 0%, #1E3A8A 100%)',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Box aria-hidden="true" sx={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <Typography variant="h2" sx={{ color: 'white', fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' }, mb: 3 }}>
                            Let&apos;s Discuss Your Project
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.8, mb: 5, maxWidth: 520, mx: 'auto' }}>
                            Schedule a complimentary consultation. We&apos;ll assess your site, understand your vision, and provide a detailed proposal.
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                            <Button
                                component={Link}
                                href="/contact"
                                variant="contained"
                                size="large"
                                startIcon={<CallIcon />}
                                sx={{ background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)', color: '#1E3A8A', fontWeight: 700, px: 4, py: 1.6, '&:hover': { background: '#BFDBFE', transform: 'translateY(-2px)' }, transition: 'all 0.2s ease' }}
                            >
                                Free Consultation
                            </Button>
                            <Button
                                component={Link}
                                href="/projects"
                                variant="outlined"
                                size="large"
                                endIcon={<ArrowForwardIcon />}
                                sx={{ borderColor: 'rgba(255,255,255,0.4)', color: 'rgba(255,255,255,0.85)', borderWidth: 2, px: 4, py: 1.6, '&:hover': { borderColor: '#60A5FA', color: '#60A5FA', background: 'rgba(96, 165, 250, 0.05)' } }}
                            >
                                View Projects
                            </Button>
                        </Box>
                    </motion.div>
                </Container>
            </Box>
        </Box>
    );
}
