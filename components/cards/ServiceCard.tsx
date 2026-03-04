import React from 'react';
import { Box, Typography } from '@mui/material';
import { Service } from '@/types';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import LandscapeIcon from '@mui/icons-material/Landscape';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ConstructionIcon from '@mui/icons-material/Construction';
import CheckIcon from '@mui/icons-material/Check';

const iconMap: Record<string, React.ReactNode> = {
    home: <HomeIcon />,
    business: <BusinessIcon />,
    landscape: <LandscapeIcon />,
    architecture: <ArchitectureIcon />,
    manage_accounts: <ManageAccountsIcon />,
    construction: <ConstructionIcon />,
};

interface ServiceCardProps {
    service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
    return (
        <Box
            sx={{
                background: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                p: { xs: 3, md: 4 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: 'linear-gradient(90deg, #1E3A8A, #2563EB)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.3s ease',
                },
                '&:hover': {
                    boxShadow: '0 12px 40px rgba(10, 22, 40, 0.1)',
                    transform: 'translateY(-4px)',
                    borderColor: '#DBEAFE',
                    '&::before': { transform: 'scaleX(1)' },
                },
            }}
        >
            {/* Icon */}
            <Box
                sx={{
                    width: 52,
                    height: 52,
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#1E3A8A',
                    mb: 2.5,
                    '& svg': { fontSize: '1.5rem' },
                }}
            >
                {iconMap[service.icon] || <ConstructionIcon />}
            </Box>

            <Typography
                variant="h6"
                sx={{
                    fontWeight: 700,
                    color: '#0A1628',
                    fontSize: '1rem',
                    mb: 0.5,
                }}
            >
                {service.title}
            </Typography>

            <Typography
                variant="overline"
                sx={{ color: '#2563EB', fontSize: '0.68rem', letterSpacing: '0.1em', mb: 1.5, display: 'block' }}
            >
                {service.subtitle}
            </Typography>

            <Typography
                sx={{
                    color: '#6B7280',
                    fontSize: '0.87rem',
                    lineHeight: 1.7,
                    mb: 3,
                    flexGrow: 1,
                }}
            >
                {service.description}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {service.features.map((feat, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                            sx={{
                                width: 18,
                                height: 18,
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #1E3A8A, #2563EB)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                            }}
                        >
                            <CheckIcon sx={{ fontSize: '0.7rem', color: 'white' }} />
                        </Box>
                        <Typography sx={{ color: '#374151', fontSize: '0.82rem' }}>
                            {feat.text}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
