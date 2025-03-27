import React, { useState, useEffect } from 'react';

export default function LoadingOverlay({ loading }: { loading: boolean }) {
    const [isFading, setIsFading] = useState(false);

    // Handle the fading transition when loading changes
    useEffect(() => {
        if (!loading) {
            // Start fading out after 1 second if not loading
            const timer = setTimeout(() => {
                setIsFading(true);
            }, 300); // 300ms fade-out delay
            return () => clearTimeout(timer);
        } else {
            // Reset fade state if loading starts again
            setIsFading(false);
        }
    }, [loading]);

    if (!loading && isFading) return null;

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex items-center justify-center transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'
                }`}
        >
            <div className="flex items-center justify-center w-full h-full">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        </div>
    );
}
