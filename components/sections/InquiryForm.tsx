'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Box, Button, MenuItem, TextField, Typography, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

const inquirySchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().regex(/^[+\d\s-]{10,15}$/, 'Enter a valid phone number'),
    projectType: z.string().min(1, 'Please select a project type'),
    budget: z.string().min(1, 'Please select a budget range'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type InquiryData = z.infer<typeof inquirySchema>;

const projectTypes = [
    'Residential Villa / House',
    'Apartment Complex',
    'Commercial Building',
    'Land Development / Layout',
    'Structural Design Only',
    'Renovation / Retrofit',
    'Other',
];

const budgets = [
    'Under ₹50 Lakh',
    '₹50L – ₹1 Crore',
    '₹1 – ₹3 Crore',
    '₹3 – ₹10 Crore',
    '₹10 Crore+',
];

interface InquiryFormProps {
    projectId?: string;
    projectTitle?: string;
}

export default function InquiryForm({ projectTitle }: InquiryFormProps) {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<InquiryData>({
        resolver: zodResolver(inquirySchema),
    });

    const onSubmit = async (data: InquiryData) => {
        // Simulate API call
        await new Promise((r) => setTimeout(r, 1000));
        console.log('Inquiry submitted:', data);
        setSubmitted(true);
        reset();
    };

    if (submitted) {
        return (
            <Alert
                severity="success"
                sx={{
                    borderRadius: '8px',
                    '& .MuiAlert-message': { fontWeight: 600, fontSize: '0.88rem' },
                }}
            >
                Thank you! We have received your inquiry about{' '}
                {projectTitle ? `"${projectTitle}"` : 'your project'}. We will contact you within 24 hours.
            </Alert>
        );
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
            <TextField
                {...register('name')}
                label="Full Name"
                size="small"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
                inputProps={{ 'aria-label': 'Full name' }}
            />
            <TextField
                {...register('email')}
                label="Email Address"
                type="email"
                size="small"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
                inputProps={{ 'aria-label': 'Email address' }}
            />
            <TextField
                {...register('phone')}
                label="Phone Number"
                size="small"
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone?.message}
                inputProps={{ 'aria-label': 'Phone number' }}
            />
            <TextField
                {...register('projectType')}
                label="Project Type"
                select
                size="small"
                fullWidth
                error={!!errors.projectType}
                helperText={errors.projectType?.message}
                defaultValue=""
                inputProps={{ 'aria-label': 'Project type' }}
            >
                <MenuItem value="" disabled>Select type…</MenuItem>
                {projectTypes.map((t) => (
                    <MenuItem key={t} value={t}>{t}</MenuItem>
                ))}
            </TextField>
            <TextField
                {...register('budget')}
                label="Estimated Budget"
                select
                size="small"
                fullWidth
                error={!!errors.budget}
                helperText={errors.budget?.message}
                defaultValue=""
                inputProps={{ 'aria-label': 'Budget range' }}
            >
                <MenuItem value="" disabled>Select range…</MenuItem>
                {budgets.map((b) => (
                    <MenuItem key={b} value={b}>{b}</MenuItem>
                ))}
            </TextField>
            <TextField
                {...register('message')}
                label="Message / Requirements"
                multiline
                rows={3}
                size="small"
                fullWidth
                error={!!errors.message}
                helperText={errors.message?.message}
                inputProps={{ 'aria-label': 'Message and requirements' }}
            />
            <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                endIcon={<SendIcon />}
                fullWidth
                sx={{
                    background: 'linear-gradient(135deg, #1E3A8A, #2563EB)',
                    fontWeight: 700,
                    py: 1.3,
                    mt: 0.5,
                    '&:hover': { background: 'linear-gradient(135deg, #0A1628, #1E3A8A)' },
                    '&:disabled': { background: '#E5E7EB' },
                }}
            >
                {isSubmitting ? 'Sending…' : 'Send Inquiry'}
            </Button>
            <Typography sx={{ color: '#9CA3AF', fontSize: '0.72rem', textAlign: 'center' }}>
                We typically respond within 24 hours.
            </Typography>
        </Box>
    );
}
