'use client';

import { useCallback, useEffect, useRef } from 'react';

type DemoSignaturePadProps = {
  value: string;
  onChange: (dataUrl: string) => void;
  error?: boolean;
};

export default function DemoSignaturePad({ value, onChange, error }: DemoSignaturePadProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawing = useRef(false);
  const hasInk = useRef(Boolean(value));

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ratio = window.devicePixelRatio || 1;
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    if (canvas.width !== width * ratio || canvas.height !== height * ratio) {
      const snapshot = value;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.scale(ratio, ratio);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = '#111827';
      ctx.lineWidth = 2;
      if (snapshot) {
        const image = new Image();
        image.onload = () => {
          ctx.drawImage(image, 0, 0, width, height);
        };
        image.src = snapshot;
      }
    }
  }, [value]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resizeCanvas]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !value) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const image = new Image();
    image.onload = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      ctx.drawImage(image, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
    };
    image.src = value;
    hasInk.current = true;
  }, [value]);

  const pointFromEvent = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    drawing.current = true;
    canvas.setPointerCapture(event.pointerId);
    const point = pointFromEvent(event);
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    const point = pointFromEvent(event);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
    hasInk.current = true;
  };

  const handlePointerUp = () => {
    if (!drawing.current) return;
    drawing.current = false;
    const canvas = canvasRef.current;
    if (!canvas || !hasInk.current) return;
    onChange(canvas.toDataURL('image/png'));
  };

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-40 sm:h-44 cursor-crosshair touch-none ${error ? 'bg-red-50' : 'bg-white'}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    />
  );
}
