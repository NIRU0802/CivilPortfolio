'use client';

import { create } from 'zustand';

interface VisualState {
    intensity: number;
    opacity: number;
    setIntensity: (i: number) => void;
    setOpacity: (o: number) => void;
}

// Global state for site-wide SVG 3D visual behavior
export const useVisualStore = create<VisualState>((set) => ({
    intensity: 1,
    opacity: 0.1, // Default site-wide opacity
    setIntensity: (i) => set({ intensity: i }),
    setOpacity: (o) => set({ opacity: o }),
}));
