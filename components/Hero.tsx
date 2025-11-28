import React, { useState, useEffect, useMemo, useRef } from 'react';
import { ArrowRight, Cpu, Activity, Zap, Radio, ScanFace } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

// --- 3D Math Helpers ---

interface Point3D {
  x: number;
  y: number;
  z: number;
}

// Rotate point around Y axis
const rotateY = (p: Point3D, angle: number): Point3D => {
  const rad = (angle * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  return {
    x: p.x * cos - p.z * sin,
    y: p.y,
    z: p.x * sin + p.z * cos,
  };
};

// Rotate point around X axis (for slight tilt)
const rotateX = (p: Point3D, angle: number): Point3D => {
  const rad = (angle * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  return {
    x: p.x,
    y: p.y * cos - p.z * sin,
    z: p.y * sin + p.z * cos,
  };
};

const generateVolumetricPoints = (shape: 'M' | 'HUMAN', count: number): Point3D[] => {
  const points: Point3D[] = [];
  // Adjusted scale to 1.6 to fit within the container without clipping
  const scale = 1.6; 

  if (shape === 'M') {
    // --- Volumetric Letter M ---
    const thickness = 20 * scale;
    
    // Left Leg
    for (let i = 0; i < count * 0.25; i++) {
      points.push({
        x: (-50 + (Math.random() - 0.5) * 15) * scale,
        y: ((Math.random() - 0.5) * 120) * scale,
        z: ((Math.random() - 0.5) * thickness)
      });
    }
    // Right Leg
    for (let i = 0; i < count * 0.25; i++) {
      points.push({
        x: (50 + (Math.random() - 0.5) * 15) * scale,
        y: ((Math.random() - 0.5) * 120) * scale,
        z: ((Math.random() - 0.5) * thickness)
      });
    }
    // Diagonals
    for (let i = 0; i < count * 0.5; i++) {
      const t = Math.random(); 
      const side = Math.random() > 0.5 ? 1 : -1;
      const startX = side * 50 * scale;
      const startY = -60 * scale;
      const endX = 0;
      const endY = 10 * scale; 
      
      points.push({
        x: startX + (endX - startX) * t + (Math.random() - 0.5) * 10,
        y: startY + (endY - startY) * t + (Math.random() - 0.5) * 10,
        z: ((Math.random() - 0.5) * thickness)
      });
    }
  } else {
    // --- Volumetric Full Body Human (Clearer Silhouette) ---
    // Total Height approx 160 units (-75 to +85)

    // 1. Head (Sphere)
    const headCount = Math.floor(count * 0.15);
    const headRadius = 12 * scale;
    const headY = -75 * scale;
    for (let i = 0; i < headCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = headRadius * Math.cbrt(Math.random()); 
      points.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: headY + r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi)
      });
    }

    // 2. Torso (Tapered Block)
    const torsoCount = Math.floor(count * 0.30);
    for (let i = 0; i < torsoCount; i++) {
      const h = Math.random(); // 0(shoulder) to 1(waist)
      const y = (-60 + h * 55) * scale; 
      const w = (18 - h * 6) * scale; // Shoulder width to waist width
      const d = (8 - h * 2) * scale; // Depth
      
      points.push({
        x: (Math.random() - 0.5) * 2 * w,
        y: y,
        z: (Math.random() - 0.5) * 2 * d
      });
    }

    // 3. Arms (Relaxed A-Pose)
    const armCount = Math.floor(count * 0.20);
    for(let i=0; i<armCount; i++) {
        const isLeft = i % 2 === 0;
        const h = Math.random(); // 0(shoulder) to 1(hand)
        const startY = -55 * scale;
        const endY = 0 * scale;
        
        const startX = (isLeft ? -22 : 22) * scale;
        const endX = (isLeft ? -35 : 35) * scale; // Hands slightly out
        
        const r = 4 * scale; // Arm thickness

        const cx = startX + (endX - startX) * h;
        const cy = startY + (endY - startY) * h;
        
        // Random point inside arm cylinder at height h
        const angle = Math.random() * Math.PI * 2;
        const rad = r * Math.sqrt(Math.random());

        points.push({
            x: cx + rad * Math.cos(angle),
            y: cy,
            z: rad * Math.sin(angle)
        });
    }

    // 4. Legs (Standing Apart)
    const legCount = count - headCount - torsoCount - armCount;
    for(let i=0; i<legCount; i++) {
        const isLeft = i % 2 === 0;
        const h = Math.random(); // 0(hip) to 1(foot)
        const startY = -5 * scale;
        const endY = 85 * scale;
        
        const startX = (isLeft ? -10 : 10) * scale;
        const endX = (isLeft ? -18 : 18) * scale;
        
        const r = 6 * scale * (1 - h * 0.4); // Taper leg

        const cx = startX + (endX - startX) * h;
        const cy = startY + (endY - startY) * h;

        const angle = Math.random() * Math.PI * 2;
        const rad = r * Math.sqrt(Math.random());

        points.push({
             x: cx + rad * Math.cos(angle),
             y: cy,
             z: rad * Math.sin(angle)
        });
    }
  }
  return points;
};

// --- Holographic Core Component ---

const HoloCore: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [phase, setPhase] = useState<'M' | 'HUMAN'>('M');
    
    // Increased particle count for better definition
    const particleCount = 700; 
    
    const pointsM = useMemo(() => generateVolumetricPoints('M', particleCount), []);
    const pointsHuman = useMemo(() => generateVolumetricPoints('HUMAN', particleCount), []);
    
    const state = useRef({
        rotationY: 0,
        rotationX: 0,
        morph: 0, 
        targetMorph: 0
    });

    useEffect(() => {
        // 8 seconds per phase = enough time to rotate > 180 degrees
        const interval = setInterval(() => {
            setPhase(prev => {
                const next = prev === 'M' ? 'HUMAN' : 'M';
                state.current.targetMorph = next === 'HUMAN' ? 1 : 0;
                return next;
            });
        }, 8000); 
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.scale(dpr, dpr);

        let animationId: number;
        
        const render = () => {
            // Speed: 0.6 deg/frame * 60 fps = 36 deg/sec
            // 8 seconds * 36 = 288 degrees rotation (satisfies > 180)
            state.current.rotationY += 0.6; 
            state.current.rotationX = Math.sin(Date.now() * 0.001) * 5; 
            
            // Morph Logic
            const diff = state.current.targetMorph - state.current.morph;
            state.current.morph += diff * 0.02; 

            ctx.clearRect(0, 0, rect.width, rect.height);
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const fov = 400;

            const projectedPoints: {x:number, y:number, z:number, alpha:number}[] = [];

            // Compute
            for (let i = 0; i < particleCount; i++) {
                const pM = pointsM[i];
                const pH = pointsHuman[i] || {x:0, y:0, z:0};
                const t = state.current.morph;

                let curr = {
                    x: pM.x + (pH.x - pM.x) * t,
                    y: pM.y + (pH.y - pM.y) * t,
                    z: pM.z + (pH.z - pM.z) * t
                };

                // Add noise
                const time = Date.now() * 0.002;
                const noise = Math.sin(time + i * 0.1) * 1.5;
                curr.x += noise;
                curr.y += noise;

                // Rotate
                curr = rotateY(curr, state.current.rotationY);
                curr = rotateX(curr, state.current.rotationX);

                // Project
                const scale = fov / (fov + curr.z);
                const x2d = curr.x * scale + centerX;
                const y2d = curr.y * scale + centerY;
                const alpha = Math.max(0.1, Math.min(1, (scale - 0.5) * 1.5)); 

                projectedPoints.push({ x: x2d, y: y2d, z: curr.z, alpha });
            }

            // Draw Lines (Selective)
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particleCount; i += 6) { 
                const p1 = projectedPoints[i];
                for (let j = 1; j < 3; j++) {
                    const p2 = projectedPoints[(i + j * 4) % particleCount]; // Random neighbors
                    const distSq = (p1.x - p2.x)**2 + (p1.y - p2.y)**2;
                    
                    if (distSq < 1500) {
                        const lineAlpha = Math.min(p1.alpha, p2.alpha) * 0.15;
                        ctx.strokeStyle = `rgba(41, 121, 255, ${lineAlpha})`;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            // Draw Particles
            projectedPoints.forEach(p => {
                // Color Transition: White (M) -> Electric Blue (Human)
                // R: 255 -> 41, G: 255 -> 121, B: 255 -> 255
                const r = 255 - (state.current.morph * 214);
                const g = 255 - (state.current.morph * 134);
                
                ctx.fillStyle = `rgba(${r}, ${g}, 255, ${p.alpha})`;
                ctx.beginPath();
                const baseSize = state.current.morph > 0.5 ? 1.4 : 1.1;
                const size = baseSize * (p.z < 0 ? 1.6 : 0.9); 
                
                ctx.arc(p.x, p.y, Math.max(0.5, size), 0, Math.PI * 2);
                ctx.fill();
            });

            animationId = requestAnimationFrame(render);
        };
        
        render();
        return () => cancelAnimationFrame(animationId);
    }, [pointsM, pointsHuman]);

    return (
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            {/* HUD Rings (CSS Animation) */}
            <div className="absolute inset-0 border border-electricBlue/20 rounded-full animate-[spin_12s_linear_infinite]" />
            <div className="absolute inset-8 border border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
            <div className="absolute inset-0 bg-electricBlue/5 rounded-full blur-3xl animate-pulse" />
            
            {/* Tech Labels */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black px-3 py-1 border border-electricBlue/30 rounded-full text-[10px] text-electricBlue font-mono flex items-center gap-2 shadow-[0_0_10px_rgba(41,121,255,0.2)]">
                <Cpu className="w-3 h-3" /> NEURAL CORE
            </div>
            
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
                 <div className="flex flex-col items-center">
                    <span className="text-[9px] text-gray-500 font-mono">STATUS</span>
                    <span className="text-[10px] text-white font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"/> ONLINE
                    </span>
                 </div>
                 <div className="w-px h-6 bg-white/10" />
                 <div className="flex flex-col items-center">
                    <span className="text-[9px] text-gray-500 font-mono">MODE</span>
                    <span className="text-[10px] text-electricBlue font-bold animate-pulse">
                        {phase === 'M' ? 'MATRIX' : 'HUMAN'}
                    </span>
                 </div>
            </div>

            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10" />
        </div>
    );
};

// --- Main Hero Component ---

const Hero: React.FC = () => {
  const scrollToSolutions = () => {
    const element = document.getElementById('solutions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper className="bg-darkBg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center h-full md:h-auto min-h-[500px]">
        {/* Left Content */}
        <div className="space-y-6 md:space-y-8 z-10 text-center md:text-left pt-10 md:pt-0">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-electricBlue font-mono tracking-widest text-xs md:text-sm uppercase mb-4 block flex items-center gap-2 justify-center md:justify-start">
               <Radio className="w-4 h-4 animate-pulse" /> Gansu AI Digital Human Solution
            </span>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-6">
              打破人力边界<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                重塑商业效率
              </span>
            </h1>
            <p className="text-base md:text-xl text-textGray max-w-lg leading-relaxed mx-auto md:mx-0">
              从企业降本增效，到个人数字资产变现。<br/>
              AI 数字人全场景解决方案，为您打造永不疲倦的超级员工。
            </p>
          </motion.div>

          <motion.button
            onClick={scrollToSolutions}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-8 py-4 bg-electricBlue text-white font-semibold rounded-full hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(41,121,255,0.3)] mx-auto md:mx-0"
          >
            查看解决方案
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Right Visual: New 3D Holo Core */}
        <div className="relative h-64 md:h-full flex items-center justify-center mt-8 md:mt-0">
           <HoloCore />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;