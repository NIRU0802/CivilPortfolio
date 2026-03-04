'use client';

import Link from 'next/link';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/molecules/ProjectCard';
import TestimonialCard from '@/components/molecules/TestimonialCard';
import ServiceCard from '@/components/molecules/ServiceCard';
import WhyChooseUs from '@/components/organisms/WhyChooseUs';
import { motion, Variants } from 'framer-motion';

interface HomeClientProps {
    featuredProjects: any[];
    featuredServices: any[];
    testimonials: any[];
    stats: any[];
}

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function HomeClient({
    featuredProjects,
    featuredServices,
    testimonials,
    stats,
}: HomeClientProps) {
    return (
        <>
            {/* ═══════════════════════════════════════════════════════════
          HERO SECTION (CINEMATIC BACKGROUND REDESIGN)
      ═══════════════════════════════════════════════════════════ */}
            <Box
                component="section"
                sx={{
                    minHeight: '100vh',
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    pt: { xs: 12, md: 16 },
                }}
            >
                {/* Dark overlay for text readability */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, #050D1C 0%, rgba(5,13,28,0.3) 50%, #050D1C 100%)',
                        zIndex: 1,
                    }}
                />

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
                    <Grid container sx={{ minHeight: '80vh' }}>
                        <Grid size={{ xs: 12, md: 8, lg: 7 }}>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={staggerContainer}
                            >
                                {/* Tagline */}
                                <motion.div variants={fadeInUp}>
                                    <Box
                                        sx={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 1.5,
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            backdropFilter: 'blur(8px)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: '100px',
                                            px: 2.5,
                                            py: 1,
                                            mb: 4,
                                        }}
                                    >
                                        <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                                            Residential • Commercial • Land Development
                                        </Typography>
                                    </Box>
                                </motion.div>

                                {/* Main Headline */}
                                <motion.div variants={fadeInUp}>
                                    <Typography
                                        variant="h1"
                                        sx={{
                                            color: 'white',
                                            fontFamily: '"Playfair Display", serif',
                                            fontWeight: 700,
                                            fontSize: { xs: '2.8rem', sm: '3.6rem', md: '4.8rem', lg: '5.2rem' },
                                            lineHeight: 1.05,
                                            mb: 2,
                                            letterSpacing: '-0.01em',
                                        }}
                                    >
                                        Engineering Spaces
                                        <Box component="span" sx={{ color: '#3B82F6', display: 'block' }}>
                                            That Last.
                                        </Box>
                                    </Typography>
                                </motion.div>

                                {/* Subtext */}
                                <motion.div variants={fadeInUp}>
                                    <Typography
                                        sx={{
                                            color: 'rgba(255,255,255,0.65)',
                                            fontSize: { xs: '1.1rem', md: '1.25rem' },
                                            lineHeight: 1.7,
                                            mb: 6,
                                            maxWidth: 600,
                                        }}
                                    >
                                        From land development to finished homes, we transform vision into reality with structural excellence and uncompromising precision.
                                    </Typography>
                                </motion.div>

                                {/* CTA Buttons */}
                                <motion.div variants={fadeInUp}>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5, mb: 8 }}>
                                        <Button
                                            component={Link}
                                            href="/projects"
                                            variant="contained"
                                            size="large"
                                            sx={{
                                                background: 'white',
                                                color: '#050D1C',
                                                px: 5,
                                                py: 2,
                                                fontSize: '0.95rem',
                                                fontWeight: 700,
                                                '&:hover': {
                                                    background: '#EFF6FF',
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: '0 12px 40px rgba(255,255,255,0.15)',
                                                },
                                                transition: 'all 0.3s ease',
                                            }}
                                        >
                                            View Projects
                                        </Button>
                                        <Button
                                            component={Link}
                                            href="/contact"
                                            variant="outlined"
                                            size="large"
                                            startIcon={<CallIcon />}
                                            sx={{
                                                borderColor: 'rgba(255,255,255,0.2)',
                                                color: 'white',
                                                px: 5,
                                                py: 2,
                                                fontSize: '0.95rem',
                                                fontWeight: 600,
                                                borderWidth: 2,
                                                backdropFilter: 'blur(4px)',
                                                '&:hover': {
                                                    borderColor: 'white',
                                                    background: 'rgba(255,255,255,0.05)',
                                                },
                                            }}
                                        >
                                            Start Your Project
                                        </Button>
                                    </Box>
                                </motion.div>

                                {/* Subtle Scroll Hint */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.5, duration: 1 }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, opacity: 0.4 }}>
                                        <Box sx={{ width: 40, height: 1, background: 'white' }} />
                                        <Typography sx={{ color: 'white', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                                            SCROLL TO EXPLORE
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>

                {/* Floating Decorative Elements */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 40,
                        right: 40,
                        display: { xs: 'none', lg: 'block' },
                        zIndex: 2,
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                    >
                        <Box sx={{ textAlign: 'right' }}>
                            <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', fontWeight: 600, mb: 1 }}>
                                ESTABLISHED 2008
                            </Typography>
                            <Typography sx={{ color: 'white', fontFamily: '"Playfair Display", serif', fontSize: '1.2rem', fontWeight: 700 }}>
                                85+ Projects Completed
                            </Typography>
                        </Box>
                    </motion.div>
                </Box>
            </Box>

            {/* ═══════════════════════════════════════════════════════════
          SERVICES OVERVIEW
      ═══════════════════════════════════════════════════════════ */}
            <Box 
                component="section" 
                sx={{ 
                    py: { xs: 8, md: 12 }, 
                    background: 'white',
                    position: 'relative',
                }}
            >
                <Container maxWidth="xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <SectionHeading
                            overline="What We Do"
                            title="Engineering Services"
                            subtitle="From single-family homes to large commercial complexes and land developments — delivered with precision and transparency."
                            align="center"
                        />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <Grid container spacing={3}>
                            {featuredServices.map((service) => (
                                <Grid key={service.id} size={{ xs: 12, sm: 6, md: 4 }}>
                                    <motion.div variants={fadeInUp}>
                                        <ServiceCard service={service} />
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeInUp}
                    >
                        <Box sx={{ textAlign: 'center', mt: 6 }}>
                            <Button
                                component={Link}
                                href="/services"
                                variant="outlined"
                                size="large"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    borderColor: '#1E3A8A',
                                    color: '#1E3A8A',
                                    borderWidth: 2,
                                    fontWeight: 600,
                                    px: 4,
                                    py: 1.5,
                                    '&:hover': {
                                        background: '#1E3A8A',
                                        color: 'white',
                                        borderColor: '#1E3A8A',
                                    },
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                View All Services
                            </Button>
                        </Box>
                    </motion.div>
                </Container>
            </Box>

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* ═══════════════════════════════════════════════════════════
          FEATURED PROJECTS
      ═══════════════════════════════════════════════════════════ */}
            <Box 
                component="section" 
                sx={{ 
                    py: { xs: 8, md: 12 }, 
                    background: 'white',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <Container maxWidth="xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <SectionHeading
                            overline="Portfolio"
                            title="Featured Projects"
                            subtitle="Each project reflects our commitment to structural excellence, on-time delivery, and lasting value."
                        />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <Grid container spacing={3}>
                            {featuredProjects.map((project) => (
                                <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
                                    <motion.div variants={fadeInUp}>
                                        <ProjectCard project={project} />
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <Box sx={{ mt: 6 }}>
                            <Button
                                component={Link}
                                href="/projects"
                                variant="outlined"
                                size="large"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    borderColor: '#1E3A8A',
                                    color: '#1E3A8A',
                                    borderWidth: 2,
                                    fontWeight: 600,
                                    px: 4,
                                    py: 1.5,
                                    '&:hover': {
                                        background: '#1E3A8A',
                                        color: 'white',
                                        borderColor: '#1E3A8A',
                                    },
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                Browse All Projects
                            </Button>
                        </Box>
                    </motion.div>
                </Container>
            </Box>

            {/* ═══════════════════════════════════════════════════════════
          STATS BAND
      ═══════════════════════════════════════════════════════════ */}
            <Box
                component="section"
                sx={{
                    py: { xs: 7, md: 10 },
                    background: 'linear-gradient(180deg, #0A1628 0%, #050D1C 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Box
                    aria-hidden="true"
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage:
                            'linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <Grid container spacing={4} justifyContent="center">
                            {stats.map((stat, idx) => (
                                <Grid key={idx} size={{ xs: 6, md: 3 }}>
                                    <motion.div variants={fadeInUp}>
                                        <Box sx={{ textAlign: 'center' }}>
                                            <Typography
                                                sx={{
                                                    color: 'white',
                                                    fontFamily: '"Playfair Display", serif',
                                                    fontWeight: 700,
                                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                                    lineHeight: 1,
                                                    mb: 1,
                                                }}
                                            >
                                                {stat.value}
                                                <Box component="span" sx={{ color: '#3B82F6', fontSize: { xs: '1.2rem', md: '1.8rem' } }}>
                                                    {stat.suffix}
                                                </Box>
                                            </Typography>
                                            <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.05em' }}>
                                                {stat.label}
                                            </Typography>
                                        </Box>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </Container>
            </Box>

            {/* ═══════════════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════════════ */}
            <Box 
                component="section" 
                sx={{ 
                    py: { xs: 8, md: 12 }, 
                    background: 'linear-gradient(180deg, #0A1628 0%, #050D1C 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Box
                    aria-hidden="true"
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage:
                            'linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <SectionHeading
                            overline="Client Stories"
                            title="What Clients Say"
                            subtitle="Our work speaks through the trust and satisfaction of every client we have served."
                            align="center"
                            light
                        />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <Grid container spacing={3}>
                            {testimonials.map((t) => (
                                <Grid key={t.id} size={{ xs: 12, sm: 6, md: 3 }}>
                                    <motion.div variants={fadeInUp}>
                                        <TestimonialCard testimonial={t} />
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </Container>
            </Box>

            {/* ═══════════════════════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════════════════════ */}
            <Box
                component="section"
                sx={{
                    py: { xs: 8, md: 11 },
                    background: 'linear-gradient(180deg, #0A1628 0%, #050D1C 100%)',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Box
                    aria-hidden="true"
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage:
                            'linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <Typography
                            variant="overline"
                            sx={{ color: '#3B82F6', letterSpacing: '0.2em', fontWeight: 700, mb: 2, display: 'block' }}
                        >
                            Start Your Project
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                color: 'white',
                                fontFamily: '"Playfair Display", serif',
                                fontWeight: 700,
                                fontSize: { xs: '2rem', md: '3rem' },
                                mb: 3,
                                lineHeight: 1.2,
                            }}
                        >
                            Ready to Build Your <Box component="span" sx={{ color: '#3B82F6' }}>Vision?</Box>
                        </Typography>
                        <Typography
                            sx={{
                                color: 'rgba(255,255,255,0.6)',
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                lineHeight: 1.8,
                                mb: 5,
                                maxWidth: 560,
                                mx: 'auto',
                            }}
                        >
                            Schedule a free consultation with Niraj Kathe. We will assess your site, understand your requirements, and provide a detailed proposal — no obligations.
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                            <Button
                                component={Link}
                                href="/contact"
                                variant="contained"
                                size="large"
                                startIcon={<CallIcon />}
                                sx={{
                                    background: 'linear-gradient(135deg, #1E3A8A, #2563EB)',
                                    px: 5,
                                    py: 1.8,
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #0A1628, #1E3A8A)',
                                        boxShadow: '0 8px 32px rgba(37, 99, 235, 0.4)',
                                        transform: 'translateY(-2px)',
                                    },
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                Book Free Consultation
                            </Button>
                            <Button
                                component="a"
                                href="https://wa.me/911234567890?text=Hello%20Niraj,%20I%20am%20interested%20in%20a%20consultation."
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outlined"
                                size="large"
                                sx={{
                                    borderColor: '#25D366',
                                    color: '#25D366',
                                    borderWidth: 2,
                                    px: 5,
                                    py: 1.8,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    '&:hover': {
                                        background: 'rgba(37, 211, 102, 0.08)',
                                        borderColor: '#25D366',
                                    },
                                }}
                            >
                                WhatsApp Us
                            </Button>
                        </Box>
                    </motion.div>
                </Container>
            </Box>
        </>
    );
}
