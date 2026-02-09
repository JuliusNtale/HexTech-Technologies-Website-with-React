'use client';
import { cn } from '@/lib/utils';
import { HTMLMotionProps, motion } from 'motion/react';

export const GRADIENT_ANGLES = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
};

export type ProgressiveBlurProps = {
  direction?: keyof typeof GRADIENT_ANGLES;
  blurLayers?: number;
  className?: string;
  blurIntensity?: number;
} & HTMLMotionProps<'div'>;

export function ProgressiveBlur({
  direction = 'bottom',
  blurLayers = 8,
  className,
  blurIntensity = 0.25,
  ...props
}: ProgressiveBlurProps) {
  const layers = Math.max(blurLayers, 2);
  const segmentSize = 1 / (blurLayers + 1);

  return (
    <div className={cn('relative', className)}>
      {Array.from({ length: layers }).map((_, index) => (
        <motion.div
          key={index}
          className='pointer-events-none absolute inset-0 rounded-[inherit]'
          style={{
            background: 'rgba(0, 40, 85, 0.08)',
            backdropFilter: `blur(${index * blurIntensity}px)`,
            WebkitBackdropFilter: `blur(${index * blurIntensity}px)`,
          }}
          {...props}
        />
      ))}
    </div>
  );
}
