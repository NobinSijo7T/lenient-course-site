'use client';

import { useEffect, useRef, memo } from 'react';
import './SquareField.css';

const SquareField = memo(({
  squareSize = 6,
  squareSpacing = 20,
  cursorRadius = 400,
  bulgeStrength = 50,
  gradientFrom = 'rgba(154, 230, 0, 0.7)',
  gradientTo = 'rgba(100, 180, 50, 0.6)',
  ...rest
}) => {
  const canvasRef = useRef(null);
  const squaresRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999, prevX: -9999, prevY: -9999, speed: 0 });
  const rafRef = useRef(null);
  const sizeRef = useRef({ w: 0, h: 0, offsetX: 0, offsetY: 0 });
  const engagement = useRef(0);
  const propsRef = useRef({});
  propsRef.current = { squareSize, squareSpacing, cursorRadius, bulgeStrength, gradientFrom, gradientTo };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let resizeTimer;

    function resize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(doResize, 100);
    }

    function doResize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      sizeRef.current = {
        w,
        h,
        offsetX: rect.left + window.scrollX,
        offsetY: rect.top + window.scrollY,
      };

      buildSquares(w, h);
    }

    function buildSquares(w, h) {
      const p = propsRef.current;
      const step = p.squareSize + p.squareSpacing;
      const cols = Math.floor(w / step);
      const rows = Math.floor(h / step);
      const padX = (w % step) / 2;
      const padY = (h % step) / 2;
      const squares = new Array(rows * cols);
      let idx = 0;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const ax = padX + col * step + step / 2;
          const ay = padY + row * step + step / 2;
          squares[idx++] = { ax, ay, sx: ax, sy: ay, x: ax, y: ay };
        }
      }
      squaresRef.current = squares;
    }

    function onMouseMove(e) {
      const s = sizeRef.current;
      mouseRef.current.x = e.pageX - s.offsetX;
      mouseRef.current.y = e.pageY - s.offsetY;
    }

    function onTouchMove(e) {
      if (e.touches.length > 0) {
        const s = sizeRef.current;
        const touch = e.touches[0];
        mouseRef.current.x = touch.pageX - s.offsetX;
        mouseRef.current.y = touch.pageY - s.offsetY;
      }
    }

    function updateMouseSpeed() {
      const m = mouseRef.current;
      const dx = m.prevX - m.x;
      const dy = m.prevY - m.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      m.speed += (dist - m.speed) * 0.5;
      if (m.speed < 0.001) m.speed = 0;
      m.prevX = m.x;
      m.prevY = m.y;
    }

    const speedInterval = setInterval(updateMouseSpeed, 20);

    function tick() {
      const squares = squaresRef.current;
      const m = mouseRef.current;
      const { w, h } = sizeRef.current;
      const p = propsRef.current;
      const len = squares.length;

      const targetEngagement = Math.min(m.speed / 5, 1);
      engagement.current += (targetEngagement - engagement.current) * 0.06;
      if (engagement.current < 0.001) engagement.current = 0;
      const eng = engagement.current;

      ctx.clearRect(0, 0, w, h);

      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, p.gradientFrom);
      grad.addColorStop(1, p.gradientTo);
      ctx.fillStyle = grad;

      const cr = p.cursorRadius;
      const crSq = cr * cr;
      const halfSize = p.squareSize / 2;

      for (let i = 0; i < len; i++) {
        const sq = squares[i];
        const dx = m.x - sq.ax;
        const dy = m.y - sq.ay;
        const distSq = dx * dx + dy * dy;

        if (distSq < crSq && eng > 0.01) {
          const dist = Math.sqrt(distSq);
          const t = 1 - dist / cr;
          const push = t * t * p.bulgeStrength * eng;
          const angle = Math.atan2(dy, dx);
          sq.sx += (sq.ax - Math.cos(angle) * push - sq.sx) * 0.15;
          sq.sy += (sq.ay - Math.sin(angle) * push - sq.sy) * 0.15;
        } else {
          sq.sx += (sq.ax - sq.sx) * 0.1;
          sq.sy += (sq.ay - sq.sy) * 0.1;
        }

        // Draw square
        ctx.fillRect(
          sq.sx - halfSize,
          sq.sy - halfSize,
          p.squareSize,
          p.squareSize
        );
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    doResize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearInterval(speedInterval);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return (
    <div className="square-field-container" {...rest}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
});

SquareField.displayName = 'SquareField';

export default SquareField;
