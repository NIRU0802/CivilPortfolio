'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
    Alert,
    Box,
    Button,
    Container,
    Grid,
    MenuItem,
    TextField,
    Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().regex(/^[+\d\s-]{10,15}$/, 'Enter a valid phone number'),
    subject: z.string().min(1, 'Please select a subject'),
    message: z.string().min(20, 'Message must be at least 20 characters'),
});

type ContactData = z.infer<typeof contactSchema>;

const subjects = [
    'Free Consultation Request',
    'Residential Construction Inquiry',
    'Commercial Project Inquiry',
    'Land Development / Layout',
    'Structural Design Consultancy',
    'Cost Estimation',
    'General Query',
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactData>({ resolver: zodResolver(contactSchema) });

    const onSubmit = async (data: ContactData) => {
        await new Promise((r) => setTimeout(r, 1200));
        console.log('Contact form submitted:', data);
        setSubmitted(true);
        reset();
    };

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
                <Box aria-hidden="true" sx={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="overline" sx={{ color: '#60A5FA', letterSpacing: '0.14em', mb: 2, display: 'block' }}>
                        Get in Touch
                    </Typography>
                    <Typography variant="h1" sx={{ color: 'white', fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: { xs: '2.2rem', md: '3.2rem' }, mb: 2 }}>
                        Contact Us
                    </Typography>
                    <Box sx={{ width: 64, height: 3, background: 'linear-gradient(90deg, #1E3A8A, #2563EB)', borderRadius: 2, mb: 3 }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', maxWidth: 520 }}>
                        Schedule a free consultation, ask a question, or send a project inquiry. We typically respond within 24 hours.
                    </Typography>
                </Container>
            </Box>

            <Box sx={{ py: { xs: 6, md: 10 }, background: '#F8F9FA' }}>
                <Container maxWidth="xl">
                    <Grid container spacing={5} alignItems="flex-start">

                        {/* LEFT – Contact Info + Map */}
                        <Grid size={{ xs: 12, md: 5 }}>
                            {/* Contact Details */}
                            <Box sx={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: '8px', p: { xs: 3, md: 4 }, mb: 3 }}>
                                <Typography variant="h5" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, color: '#0A1628', mb: 3.5, fontSize: '1.2rem' }}>
                                    Contact Information
                                </Typography>
                                {[
                                    {
                                        icon: <PhoneIcon sx={{ color: '#1E3A8A', fontSize: '1.2rem' }} />,
                                        label: 'Phone',
                                        text: '+91 12345 67890',
                                        href: 'tel:+911234567890',
                                        note: 'Mon–Sat, 9am–7pm IST',
                                    },
                                    {
                                        icon: <EmailIcon sx={{ color: '#1E3A8A', fontSize: '1.2rem' }} />,
                                        label: 'Email',
text: 'contact@nirajkathe.com',
                                        href: 'mailto:contact@nirajkathe.com',
                                        note: 'Reply within 24 hours',
                                    },
                                    {
                                        icon: <LocationOnIcon sx={{ color: '#1E3A8A', fontSize: '1.2rem' }} />,
                                        label: 'Office',
                                        text: 'Registered Office: Nashik, Maharashtra – 422001',
                                        href: null,
                                        note: 'By appointment only',
                                    },
                                    {
                                        icon: <AccessTimeIcon sx={{ color: '#1E3A8A', fontSize: '1.2rem' }} />,
                                        label: 'Hours',
                                        text: 'Monday – Saturday: 9:00 AM – 7:00 PM',
                                        href: null,
                                        note: 'Sunday: Closed',
                                    },
                                ].map((item, idx) => (
                                    <Box
                                        key={idx}
                                        sx={{
                                            display: 'flex',
                                            gap: 2,
                                            mb: 3,
                                            pb: 3,
                                            borderBottom: idx < 3 ? '1px solid #F3F4F6' : 'none',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: '8px',
                                                background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0,
                                            }}
                                        >
                                            {item.icon}
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: '#9CA3AF', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', mb: 0.4 }}>
                                                {item.label}
                                            </Typography>
                                            {item.href ? (
                                                <Typography
                                                    component="a"
                                                    href={item.href}
                                                    sx={{ color: '#0A1628', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { color: '#1E3A8A' }, transition: 'color 0.2s' }}
                                                >
                                                    {item.text}
                                                </Typography>
                                            ) : (
                                                <Typography sx={{ color: '#0A1628', fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.5 }}>
                                                    {item.text}
                                                </Typography>
                                            )}
                                            <Typography sx={{ color: '#9CA3AF', fontSize: '0.75rem', mt: 0.3 }}>{item.note}</Typography>
                                        </Box>
                                    </Box>
                                ))}

                                {/* WhatsApp CTA */}
                                <Button
                                    component="a"
                                    href="https://wa.me/911234567890?text=Hello%20Niraj,%20I%20would%20like%20to%20schedule%20a%20free%20consultation."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="contained"
                                    fullWidth
                                    startIcon={<WhatsAppIcon />}
                                    sx={{
                                        background: '#25D366',
                                        color: 'white',
                                        fontWeight: 700,
                                        py: 1.4,
                                        '&:hover': {
                                            background: '#128C7E',
                                            transform: 'translateY(-1px)',
                                            boxShadow: '0 6px 20px rgba(37, 211, 102, 0.35)',
                                        },
                                        transition: 'all 0.2s ease',
                                    }}
                                >
                                    Chat on WhatsApp
                                </Button>
                            </Box>

                            {/* Google Maps Embed */}
                            <Box sx={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #E5E7EB', height: 300 }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.2635955146!2d73.733440!3d19.997453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddee4509618403%3A0x6734ef0366eb6434!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1708611111111!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Niraj Kathe Construction Office Location – Nashik, Maharashtra"
                                />
                            </Box>
                        </Grid>

                        {/* RIGHT – Contact Form */}
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Box sx={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: '8px', p: { xs: 3, md: 5 } }}>
                                <Typography variant="h5" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, color: '#0A1628', mb: 0.5, fontSize: '1.3rem' }}>
                                    Send a Message
                                </Typography>
                                <Typography sx={{ color: '#6B7280', fontSize: '0.9rem', mb: 4 }}>
                                    Fill in the form and we will get back to you within one business day.
                                </Typography>

                                {submitted ? (
                                    <Alert severity="success" sx={{ borderRadius: '8px' }}>
                                        <Typography sx={{ fontWeight: 700, mb: 0.5 }}>Thank you for reaching out!</Typography>
                                        <Typography sx={{ fontSize: '0.88rem' }}>
                                            We have received your message and will contact you within 24 hours. You can also reach us directly at +91 12345 67890.
                                        </Typography>
                                    </Alert>
                                ) : (
                                    <Box
                                        component="form"
                                        onSubmit={handleSubmit(onSubmit)}
                                        noValidate
                                        sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
                                    >
                                        <Grid container spacing={2.5}>
                                            <Grid size={{ xs: 12, sm: 6 }}>
                                                <TextField
                                                    {...register('name')}
                                                    label="Full Name *"
                                                    fullWidth
                                                    error={!!errors.name}
                                                    helperText={errors.name?.message}
                                                    inputProps={{ 'aria-label': 'Full name' }}
                                                />
                                            </Grid>
                                            <Grid size={{ xs: 12, sm: 6 }}>
                                                <TextField
                                                    {...register('phone')}
                                                    label="Phone Number *"
                                                    fullWidth
                                                    error={!!errors.phone}
                                                    helperText={errors.phone?.message}
                                                    inputProps={{ 'aria-label': 'Phone number' }}
                                                />
                                            </Grid>
                                        </Grid>

                                        <TextField
                                            {...register('email')}
                                            label="Email Address *"
                                            type="email"
                                            fullWidth
                                            error={!!errors.email}
                                            helperText={errors.email?.message}
                                            inputProps={{ 'aria-label': 'Email address' }}
                                        />

                                        <TextField
                                            {...register('subject')}
                                            label="Subject *"
                                            select
                                            fullWidth
                                            error={!!errors.subject}
                                            helperText={errors.subject?.message}
                                            defaultValue=""
                                            inputProps={{ 'aria-label': 'Message subject' }}
                                        >
                                            <MenuItem value="" disabled>Select a subject…</MenuItem>
                                            {subjects.map((s) => (
                                                <MenuItem key={s} value={s}>{s}</MenuItem>
                                            ))}
                                        </TextField>

                                        <TextField
                                            {...register('message')}
                                            label="Message *"
                                            multiline
                                            rows={6}
                                            fullWidth
                                            error={!!errors.message}
                                            helperText={errors.message?.message}
                                            placeholder="Tell us about your project, location, timeline, and any specific requirements…"
                                            inputProps={{ 'aria-label': 'Message' }}
                                        />

                                        <Button
                                            type="submit"
                                            variant="contained"
                                            size="large"
                                            disabled={isSubmitting}
                                            endIcon={<SendIcon />}
                                            sx={{
                                                background: 'linear-gradient(135deg, #1E3A8A, #2563EB)',
                                                fontWeight: 700,
                                                py: 1.6,
                                                alignSelf: 'flex-start',
                                                minWidth: 220,
                                                '&:hover': {
                                                    background: 'linear-gradient(135deg, #0A1628, #1E3A8A)',
                                                    boxShadow: '0 8px 30px rgba(37,99,235,0.35)',
                                                    transform: 'translateY(-1px)',
                                                },
                                                transition: 'all 0.2s ease',
                                                '&:disabled': { background: '#E5E7EB' },
                                            }}
                                        >
                                            {isSubmitting ? 'Sending…' : 'Send Message'}
                                        </Button>
                                    </Box>
                                )}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Floating WhatsApp Button */}
            <Box
                component="a"
                href="https://wa.me/911234567890?text=Hello%20Niraj,%20I%20would%20like%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                sx={{
                    position: 'fixed',
                    bottom: 28,
                    right: 28,
                    zIndex: 1000,
                    width: 58,
                    height: 58,
                    borderRadius: '50%',
                    background: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        background: '#128C7E',
                        transform: 'scale(1.08)',
                        boxShadow: '0 6px 28px rgba(37,211,102,0.6)',
                    },
                    textDecoration: 'none',
                }}
            >
                <WhatsAppIcon sx={{ color: 'white', fontSize: '1.8rem' }} />
            </Box>
        </Box>
    );
}
