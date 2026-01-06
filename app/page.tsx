"use client";

import React, { useState, useEffect } from 'react';

/**
 * mishTee Delivery Mitra - Mobile Dashboard
 * Single-file Next.js Component (App Router)
 * Constraints: Inline Styles only, Mobile-first (500px), Client-side Pulsing logic.
 */
export default function DeliveryMitraDashboard() {
  const [pulse, setPulse] = useState(1);

  // Animation effect for the pulsing green dot
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => (prev === 1 ? 0.3 : 1));
    }, 800000); // Slow pulse effect logic simplified for inline
    
    // Using a CSS transition via inline style for smoothness
    return () => clearInterval(interval);
  }, []);

  // UI Theme Tokens
  const theme = {
    orange: '#FF8C00',
    green: '#27ae60',
    lightBg: '#F8F9FA',
    white: '#FFFFFF',
    textMain: '#333333',
    textMuted: '#666666',
    shadow: '0 8px 24px rgba(0,0,0,0.08)',
  };

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '0 auto',
        minHeight: '100vh',
        backgroundColor: theme.lightBg,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      {/* Header Section */}
      <header style={{ textAlign: 'center', marginTop: '20px', marginBottom: '40px' }}>
        <img
          src="https://raw.githubusercontent.com/sudhir-voleti/mishtee-magic/main/mishTee_logo.png"
          alt="mishTee Logo"
          style={{ width: '80px', marginBottom: '12px' }}
        />
        <h1
          style={{
            color: theme.orange,
            fontSize: '24px',
            fontWeight: '800',
            margin: '0 0 12px 0',
          }}
        >
          mishTee Delivery Mitra
        </h1>
        
        {/* Status Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: theme.white,
            padding: '8px 16px',
            borderRadius: '50px',
            boxShadow: theme.shadow,
            fontSize: '14px',
            fontWeight: '600',
            color: theme.textMain,
          }}
        >
          <span
            style={{
              height: '10px',
              width: '10px',
              backgroundColor: theme.green,
              borderRadius: '50%',
              marginRight: '10px',
              opacity: pulse,
              transition: 'opacity 0.6s ease-in-out',
            }}
          />
          Agent Online
        </div>
      </header>

      {/* Task Card */}
      <div
        style={{
          backgroundColor: theme.white,
          borderRadius: '20px',
          padding: '24px',
          boxShadow: theme.shadow,
          border: '1px solid #eeeeee',
        }}
      >
        <div
          style={{
            fontSize: '12px',
            fontWeight: '700',
            color: theme.textMuted,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '8px',
          }}
        >
          Active Assignment
        </div>
        <div
          style={{
            fontSize: '20px',
            fontWeight: '700',
            color: theme.textMain,
            marginBottom: '16px',
          }}
        >
          Deliver to: Arjun Mehta
        </div>
        
        <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '16px', display: 'flex', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '11px', color: theme.textMuted }}>ESTIMATED TIME</div>
            <div style={{ fontWeight: '600' }}>12 Mins</div>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: theme.textMuted }}>DISTANCE</div>
            <div style={{ fontWeight: '600' }}>3.2 KM</div>
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <div style={{ marginTop: 'auto', paddingBottom: '20px' }}>
        <button
          onClick={() => alert('Redirecting to Google Maps...')}
          style={{
            width: '100%',
            backgroundColor: theme.orange,
            color: theme.white,
            border: 'none',
            borderRadius: '16px',
            padding: '20px',
            fontSize: '18px',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(255, 140, 0, 0.3)',
            transition: 'transform 0.1s active',
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Start Navigation
        </button>
      </div>
    </div>
  );
}
