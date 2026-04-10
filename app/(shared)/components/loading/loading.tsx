'use client';

import { useState } from 'react';

import { clsx } from 'clsx';
import { motion } from 'framer-motion';

import styles from './loading.module.scss';

interface LoadingProps {
  className?: string;
}

const RING_VARIANTS = [
  {
    size: 200,
    duration: 2.4,
    dir: 1,
    color: 'rgba(255,42,95,1)',
    opacity: 0.8,
  },
  {
    size: 160,
    duration: 1.8,
    dir: -1,
    color: 'rgba(120,106,255,1)',
    opacity: 0.9,
  },
  { size: 120, duration: 3.2, dir: 1, color: undefined, opacity: 0.45 },
];

const PARTICLE_COUNT = 14;
const BRAND_RED = 'rgba(255,42,95,';
const BRAND_PURPLE = 'rgba(120,106,255,';

function generateParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    left: `${20 + Math.random() * 60}%`,
    bottom: `${8 + Math.random() * 45}%`,
    color: i % 2 === 0 ? BRAND_RED : BRAND_PURPLE,
    duration: 1.8 + Math.random() * 2.2,
    delay: Math.random() * 3,
    drift: (Math.random() - 0.5) * 40,
  }));
}

export default function Loading({ className }: LoadingProps) {
  const [particles] = useState(() => generateParticles());

  return (
    <div className={clsx(styles.root, className)}>
      {/* subtle grid */}
      <div className={styles.grid} aria-hidden="true" />

      {/* floating particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className={styles.particle}
          style={{
            left: p.left,
            bottom: p.bottom,
            background: `${p.color}.9)`,
            boxShadow: `0 0 4px 1px ${p.color}.5)`,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -80, x: p.drift, opacity: [0, 1, 0.5, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      <div className={styles.content}>
        {/* orbital scene */}
        <div className={styles.scene}>
          {/* rings */}
          {RING_VARIANTS.map((ring, i) => (
            <motion.span
              key={i}
              className={styles.ring}
              style={
                {
                  width: ring.size,
                  height: ring.size,
                  '--ring-color': ring.color,
                  opacity: ring.opacity,
                } as React.CSSProperties
              }
              animate={{ rotate: ring.dir === 1 ? 360 : -360 }}
              transition={{
                duration: ring.duration,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}

          {/* orbiting dot — red on outer ring */}
          <motion.span
            className={styles.dotRed}
            animate={{ rotate: 360 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
          />

          {/* orbiting dot — purple on middle ring */}
          <motion.span
            className={styles.dotPurple}
            animate={{ rotate: -360 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
          />

          {/* core orb */}
          <motion.span
            className={styles.core}
            animate={{ scale: [1, 1.09, 1], opacity: [1, 0.85, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </div>
  );
}
