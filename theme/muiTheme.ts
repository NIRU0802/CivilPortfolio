'use client';
import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#1E3A8A',
            light: '#2563EB',
            dark: '#0A1628',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#6B7280',
            light: '#9CA3AF',
            dark: '#374151',
            contrastText: '#ffffff',
        },
        background: {
            default: '#F8F9FA',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#0A1628',
            secondary: '#6B7280',
        },
        divider: '#E5E7EB',
        error: { main: '#DC2626' },
        success: { main: '#16A34A' },
        warning: { main: '#D97706' },
    },
    typography: {
        fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
        h1: {
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
        },
        h2: {
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            lineHeight: 1.2,
        },
        h3: {
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h4: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700,
            lineHeight: 1.35,
        },
        h5: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 600,
            lineHeight: 1.4,
        },
        h6: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 600,
            lineHeight: 1.5,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.7,
            letterSpacing: '0.005em',
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.6,
        },
        button: {
            fontWeight: 600,
            letterSpacing: '0.04em',
            textTransform: 'none',
        },
        overline: {
            letterSpacing: '0.12em',
            fontWeight: 600,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
        },
    },
    shape: {
        borderRadius: 4,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    padding: '12px 28px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    transition: 'all 0.2s ease',
                },
                containedPrimary: {
                    background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #0A1628 0%, #1E3A8A 100%)',
                        transform: 'translateY(-1px)',
                        boxShadow: '0 8px 25px rgba(30, 58, 138, 0.35)',
                    },
                },
                outlinedPrimary: {
                    borderWidth: 2,
                    '&:hover': {
                        borderWidth: 2,
                        backgroundColor: 'rgba(30, 58, 138, 0.05)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)',
                    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                    '&:hover': {
                        boxShadow: '0 4px 20px rgba(0,0,0,0.12), 0 8px 40px rgba(0,0,0,0.08)',
                        transform: 'translateY(-2px)',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 4,
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#1E3A8A',
                        },
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    letterSpacing: '0.05em',
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: '#E5E7EB',
                },
            },
        },
    },
};

const muiTheme = createTheme(themeOptions);
export default muiTheme;
