import { Box, Container, Grid, Typography, Chip } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import NatureIcon from '@mui/icons-material/Nature';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BadgeIcon from '@mui/icons-material/Badge';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FoundationIcon from '@mui/icons-material/Foundation';
import SectionHeading from '@/components/ui/SectionHeading';
import { founderProfile, timeline, certifications, values, stats } from '@/lib/data/about';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Niraj Kathe',
    description: '15+ years civil engineering experience. Structural engineering expert. Numerous projects across Nashik & Maharashtra. Founder of Niraj Kathe Construction.',
};

const iconMap: Record<string, React.ReactNode> = {
    verified: <VerifiedIcon />,
    eco: <NatureIcon />,
    engineering: <EngineeringIcon />,
    badge: <BadgeIcon />,
    apartment: <ApartmentIcon />,
};

const valueIconMap: Record<string, React.ReactNode> = {
    foundation: <FoundationIcon />,
    receipt_long: <ReceiptLongIcon />,
    schedule: <ScheduleIcon />,
    eco: <NatureIcon />,
};

export default function AboutPage() {
    return (
        <Box sx={{ pt: { xs: 10, md: 12 } }}>

            {/* ── FOUNDER PROFILE HERO ──────────────── */}
            <Box
                sx={{
                    background: 'transparent',
                    py: { xs: 8, md: 12 },
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
                            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid size={{ xs: 12, md: 4 }}>
                            {/* Avatar Placeholder */}
                            <Box
                                sx={{
                                    width: { xs: 160, md: 220 },
                                    height: { xs: 160, md: 220 },
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mx: { xs: 'auto', md: 0 },
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                                    border: '3px solid rgba(255,255,255,0.1)',
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: 'white',
                                        fontFamily: '"Playfair Display", serif',
                                        fontWeight: 700,
                                        fontSize: { xs: '3.5rem', md: '4.5rem' },
                                    }}
                                >
                                    NK
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography
                                variant="overline"
                                sx={{ color: '#60A5FA', letterSpacing: '0.12em', mb: 1.5, display: 'block' }}
                            >
                                About the Founder
                            </Typography>
                            <Typography
                                variant="h1"
                                sx={{
                                    color: 'white',
                                    fontFamily: '"Playfair Display", serif',
                                    fontWeight: 700,
                                    fontSize: { xs: '2rem', md: '3rem' },
                                    mb: 1,
                                }}
                            >
                                {founderProfile.name}
                            </Typography>
                            <Typography sx={{ color: '#60A5FA', fontWeight: 600, fontSize: '0.95rem', mb: 3 }}>
                                {founderProfile.title}
                            </Typography>
                            {founderProfile.bio.split('\n\n').map((para, idx) => (
                                <Typography
                                    key={idx}
                                    sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.97rem', lineHeight: 1.85, mb: 2 }}
                                >
                                    {para.trim()}
                                </Typography>
                            ))}

                            {/* Quick stats */}
                            <Box sx={{ display: 'flex', gap: 4, mt: 3, flexWrap: 'wrap' }}>
                                {stats.map((s, i) => (
                                    <Box key={i} sx={{ textAlign: 'center' }}>
                                        <Typography
                                            sx={{ color: 'white', fontWeight: 800, fontSize: '1.8rem', fontFamily: '"Playfair Display", serif', lineHeight: 1 }}
                                        >
                                            {s.value}{s.suffix}
                                        </Typography>
                                        <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.7rem', letterSpacing: '0.06em' }}>
                                            {s.label}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* ── EXPERIENCE TIMELINE ───────────────── */}
            <Box sx={{ py: { xs: 8, md: 12 }, background: 'white' }}>
                <Container maxWidth="lg">
                    <SectionHeading overline="Career Journey" title="Experience Timeline" />
                    <Box sx={{ position: 'relative' }}>
                        {/* Vertical line */}
                        <Box
                            sx={{
                                position: 'absolute',
                                left: { xs: 20, md: 120 },
                                top: 0,
                                bottom: 0,
                                width: 2,
                                background: 'linear-gradient(180deg, #1E3A8A 0%, #E5E7EB 100%)',
                            }}
                        />
                        {timeline.map((event, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    display: 'flex',
                                    gap: { xs: 3, md: 5 },
                                    mb: 5,
                                    position: 'relative',
                                }}
                            >
                                {/* Year label */}
                                <Box
                                    sx={{
                                        width: { xs: 40, md: 100 },
                                        flexShrink: 0,
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        pt: 0.3,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: '#1E3A8A',
                                            fontWeight: 700,
                                            fontSize: '0.78rem',
                                            letterSpacing: '0.04em',
                                            textAlign: 'right',
                                            display: { xs: 'none', md: 'block' },
                                        }}
                                    >
                                        {event.year}
                                    </Typography>
                                </Box>

                                {/* Dot */}
                                <Box
                                    sx={{
                                        position: 'relative',
                                        flexShrink: 0,
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        pt: 0.5,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 14,
                                            height: 14,
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #1E3A8A, #2563EB)',
                                            border: '3px solid white',
                                            boxShadow: '0 0 0 2px #1E3A8A',
                                            position: 'relative',
                                            zIndex: 1,
                                        }}
                                    />
                                </Box>

                                {/* Content */}
                                <Box sx={{ pb: 2 }}>
                                    <Typography
                                        sx={{
                                            color: '#1E3A8A',
                                            fontWeight: 700,
                                            fontSize: '0.75rem',
                                            letterSpacing: '0.06em',
                                            mb: 0.5,
                                            display: { xs: 'block', md: 'none' },
                                        }}
                                    >
                                        {event.year}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 700, color: '#0A1628', fontSize: '1rem', mb: 0.5 }}
                                    >
                                        {event.title}
                                    </Typography>
                                    <Typography
                                        sx={{ color: '#2563EB', fontWeight: 600, fontSize: '0.82rem', mb: 1.5 }}
                                    >
                                        {event.company}
                                    </Typography>
                                    <Typography sx={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.75 }}>
                                        {event.description}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* ── CERTIFICATIONS ────────────────────── */}
            <Box sx={{ py: { xs: 8, md: 12 }, background: '#F8F9FA' }}>
                <Container maxWidth="lg">
                    <SectionHeading
                        overline="Credentials"
                        title="Certifications & Memberships"
                        subtitle="Professional certifications that underpin our engineering standards and industry credibility."
                        align="center"
                    />
                    <Grid container spacing={3} justifyContent="center">
                        {certifications.map((cert) => (
                            <Grid key={cert.id} size={{ xs: 12, sm: 6, md: 4 }}>
                                <Box
                                    sx={{
                                        background: 'white',
                                        border: '1px solid #E5E7EB',
                                        borderRadius: '8px',
                                        p: 3.5,
                                        display: 'flex',
                                        gap: 2.5,
                                        alignItems: 'flex-start',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            boxShadow: '0 8px 30px rgba(30, 58, 138, 0.1)',
                                            borderColor: '#BFDBFE',
                                            transform: 'translateY(-2px)',
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 44,
                                            height: 44,
                                            borderRadius: '8px',
                                            background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#1E3A8A',
                                            flexShrink: 0,
                                        }}
                                    >
                                        {iconMap[cert.icon] || <VerifiedIcon />}
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontWeight: 700, color: '#0A1628', fontSize: '0.9rem', mb: 0.4, lineHeight: 1.4 }}>
                                            {cert.title}
                                        </Typography>
                                        <Typography sx={{ color: '#6B7280', fontSize: '0.78rem', mb: 0.5 }}>
                                            {cert.issuer}
                                        </Typography>
                                        <Chip
                                            label={cert.year}
                                            size="small"
                                            sx={{
                                                background: '#EFF6FF',
                                                color: '#1E3A8A',
                                                fontWeight: 700,
                                                fontSize: '0.68rem',
                                                height: 20,
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* ── VISION & VALUES ───────────────────── */}
            <Box
                sx={{
                    py: { xs: 8, md: 12 },
                    background: 'linear-gradient(160deg, #0A1628 0%, #1E3A8A 100%)',
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
                            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <SectionHeading
                        overline="Our Philosophy"
                        title="Vision & Values"
                        subtitle="The principles that guide every project, every decision, every structure we build."
                        align="center"
                        light
                    />
                    <Grid container spacing={3}>
                        {values.map((v, idx) => (
                            <Grid key={idx} size={{ xs: 12, sm: 6 }}>
                                <Box
                                    sx={{
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '8px',
                                        p: 3.5,
                                        display: 'flex',
                                        gap: 2.5,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            background: 'rgba(255,255,255,0.08)',
                                            borderColor: 'rgba(96, 165, 250, 0.3)',
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 44,
                                            height: 44,
                                            borderRadius: '8px',
                                            background: 'rgba(37, 99, 235, 0.2)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#60A5FA',
                                            flexShrink: 0,
                                        }}
                                    >
                                        {valueIconMap[v.icon] || <EngineeringIcon />}
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontWeight: 700, color: 'white', fontSize: '1rem', mb: 0.8 }}>
                                            {v.title}
                                        </Typography>
                                        <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.75 }}>
                                            {v.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
