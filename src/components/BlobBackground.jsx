import { useEffect, useRef } from 'react';
import './BlobBackground.css';

const BlobBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Blob {
      constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.points = 8;
        this.angleOffset = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.angleOffset += 0.01;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.radius);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();

        for (let i = 0; i <= this.points; i++) {
          const angle = (Math.PI * 2 * i) / this.points + this.angleOffset;
          const radiusVariation = this.radius + Math.sin(angle * 3 + this.angleOffset) * 20;
          const x = Math.cos(angle) * radiusVariation;
          const y = Math.sin(angle) * radiusVariation;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }

    const blobs = [
      new Blob(canvas.width * 0.2, canvas.height * 0.3, 200, 'rgba(99, 102, 241, 0.15)'),
      new Blob(canvas.width * 0.8, canvas.height * 0.7, 250, 'rgba(236, 72, 153, 0.15)'),
      new Blob(canvas.width * 0.5, canvas.height * 0.5, 180, 'rgba(20, 184, 166, 0.15)'),
    ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blobs.forEach(blob => {
        blob.update();
        blob.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="blob-background" />;
};

export default BlobBackground;
