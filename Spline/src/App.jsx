import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import './App.css';

// 3D Shape Components
function Cylinder({ position, rotation, scale, mousePosition }) {
  const meshRef = useRef();
  const [distance, setDistance] = useState(0);

  useFrame(({ camera, mouse }) => {
    if (meshRef.current) {
      // Auto rotation
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;

      // Calculate distance from cursor
      const dist = Math.sqrt(mouse.x ** 2 + mouse.y ** 2);
      setDistance(dist);

      // Push away from cursor
      if (dist < 1) {
        const force = (1 - dist) * 5;
        meshRef.current.position.x = position[0] + mouse.x * force;
        meshRef.current.position.y = position[1] + mouse.y * force;
      }
    }
  });

  return (
    <group position={position} scale={scale} rotation={rotation}>
      <mesh ref={meshRef}>
        <cylinderGeometry args={[1, 1, 2, 32]} />
        <meshStandardMaterial
          color="#ec4899"
          metalness={0.8}
          roughness={0.2}
          emissive="#a855f7"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
}

function Cube({ position, rotation, scale }) {
  const meshRef = useRef();

  useFrame(({ mouse }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z += 0.005;

      if (Math.sqrt(mouse.x ** 2 + mouse.y ** 2) < 1) {
        const force = (1 - Math.sqrt(mouse.x ** 2 + mouse.y ** 2)) * 5;
        meshRef.current.position.x = position[0] + mouse.x * force;
        meshRef.current.position.y = position[1] + mouse.y * force;
      }
    }
  });

  return (
    <group position={position} scale={scale} rotation={rotation}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial
          color="#0ea5e9"
          metalness={0.7}
          roughness={0.3}
          emissive="#3b82f6"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

function Cone({ position, rotation, scale }) {
  const meshRef = useRef();

  useFrame(({ mouse }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.008;
      meshRef.current.rotation.x += 0.004;

      if (Math.sqrt(mouse.x ** 2 + mouse.y ** 2) < 1) {
        const force = (1 - Math.sqrt(mouse.x ** 2 + mouse.y ** 2)) * 5;
        meshRef.current.position.x = position[0] + mouse.x * force;
        meshRef.current.position.y = position[1] + mouse.y * force;
      }
    }
  });

  return (
    <group position={position} scale={scale} rotation={rotation}>
      <mesh ref={meshRef}>
        <coneGeometry args={[1, 2.5, 32]} />
        <meshStandardMaterial
          color="#fbbf24"
          metalness={0.6}
          roughness={0.4}
          emissive="#f59e0b"
          emissiveIntensity={0.25}
        />
      </mesh>
    </group>
  );
}

function Sphere({ position, rotation, scale }) {
  const meshRef = useRef();

  useFrame(({ mouse }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.006;

      if (Math.sqrt(mouse.x ** 2 + mouse.y ** 2) < 1) {
        const force = (1 - Math.sqrt(mouse.x ** 2 + mouse.y ** 2)) * 5;
        meshRef.current.position.x = position[0] + mouse.x * force;
        meshRef.current.position.y = position[1] + mouse.y * force;
        meshRef.current.scale.set(
          1 + force * 0.05,
          1 + force * 0.05,
          1 + force * 0.05
        );
      }
    }
  });

  return (
    <group position={position} scale={scale} rotation={rotation}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#ec4899"
          metalness={0.9}
          roughness={0.1}
          emissive="#c084fc"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
}

function Tetrahedron({ position, rotation, scale }) {
  const meshRef = useRef();

  useFrame(({ mouse }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.007;
      meshRef.current.rotation.y += 0.009;
      meshRef.current.rotation.z += 0.005;

      if (Math.sqrt(mouse.x ** 2 + mouse.y ** 2) < 1) {
        const force = (1 - Math.sqrt(mouse.x ** 2 + mouse.y ** 2)) * 5;
        meshRef.current.position.x = position[0] + mouse.x * force;
        meshRef.current.position.y = position[1] + mouse.y * force;
      }
    }
  });

  return (
    <group position={position} scale={scale} rotation={rotation}>
      <mesh ref={meshRef}>
        <tetrahedronGeometry args={[1.2]} />
        <meshStandardMaterial
          color="#4f46e5"
          metalness={0.7}
          roughness={0.3}
          emissive="#6366f1"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

function Octahedron({ position, rotation, scale }) {
  const meshRef = useRef();

  useFrame(({ mouse }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.006;
      meshRef.current.rotation.y += 0.008;

      if (Math.sqrt(mouse.x ** 2 + mouse.y ** 2) < 1) {
        const force = (1 - Math.sqrt(mouse.x ** 2 + mouse.y ** 2)) * 5;
        meshRef.current.position.x = position[0] + mouse.x * force;
        meshRef.current.position.y = position[1] + mouse.y * force;
      }
    }
  });

  return (
    <group position={position} scale={scale} rotation={rotation}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial
          color="#06b6d4"
          metalness={0.8}
          roughness={0.2}
          emissive="#0891b2"
          emissiveIntensity={0.25}
        />
      </mesh>
    </group>
  );
}

function Dodecahedron({ position, rotation, scale }) {
  const meshRef = useRef();

  useFrame(({ mouse }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.004;
      meshRef.current.rotation.y += 0.007;
      meshRef.current.rotation.z += 0.003;

      if (Math.sqrt(mouse.x ** 2 + mouse.y ** 2) < 1) {
        const force = (1 - Math.sqrt(mouse.x ** 2 + mouse.y ** 2)) * 5;
        meshRef.current.position.x = position[0] + mouse.x * force;
        meshRef.current.position.y = position[1] + mouse.y * force;
      }
    }
  });

  return (
    <group position={position} scale={scale} rotation={rotation}>
      <mesh ref={meshRef}>
        <dodecahedronGeometry args={[1]} />
        <meshStandardMaterial
          color="#10b981"
          metalness={0.75}
          roughness={0.25}
          emissive="#34d399"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

function Icosahedron({ position, rotation, scale }) {
  const meshRef = useRef();

  useFrame(({ mouse }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.006;

      if (Math.sqrt(mouse.x ** 2 + mouse.y ** 2) < 1) {
        const force = (1 - Math.sqrt(mouse.x ** 2 + mouse.y ** 2)) * 5;
        meshRef.current.position.x = position[0] + mouse.x * force;
        meshRef.current.position.y = position[1] + mouse.y * force;
      }
    }
  });

  return (
    <group position={position} scale={scale} rotation={rotation}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1]} />
        <meshStandardMaterial
          color="#7c3aed"
          metalness={0.85}
          roughness={0.15}
          emissive="#a78bfa"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
}

// 3D Scene Component
function Scene() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <PerspectiveCamera position={[0, 0, 8]} fov={75} />
      <OrbitControls enableZoom={false} />
      
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -10, 5]} intensity={0.5} color="#a78bfa" />
      <pointLight position={[0, 10, -10]} intensity={0.4} color="#0ea5e9" />

      {/* 3D Shapes with proper spacing */}
      <Cylinder position={[-4, 3, 0]} rotation={[0, 0.5, 0]} scale={0.8} mousePosition={mousePosition} />
      <Cube position={[0, 3.5, 0]} rotation={[0.5, 0.5, 0.2]} scale={0.9} mousePosition={mousePosition} />
      <Cone position={[4, 2.5, 0]} rotation={[0, 0, 0.3]} scale={0.85} mousePosition={mousePosition} />
      
      <Sphere position={[-3.5, -1, 1]} rotation={[0, 0, 0]} scale={0.75} mousePosition={mousePosition} />
      <Tetrahedron position={[0, -2, 1]} rotation={[0.2, 0.5, 0]} scale={0.8} mousePosition={mousePosition} />
      <Octahedron position={[3.5, -1.5, 0.5]} rotation={[0.5, 0, 0.3]} scale={0.85} mousePosition={mousePosition} />
      
      <Dodecahedron position={[-2, 0, -1]} rotation={[0.3, 0.5, 0.2]} scale={0.7} mousePosition={mousePosition} />
      <Icosahedron position={[2, 0.5, -1]} rotation={[0, 0.3, 0.5]} scale={0.75} mousePosition={mousePosition} />
    </>
  );
}

// Main App Component
function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app">
      {/* 3D Canvas */}
      <Canvas className="canvas">
        <Scene />
      </Canvas>

      {/* UI Overlay with Framer Motion */}
      <motion.nav 
        className="navbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="navbar-container">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <svg className="logo-icon" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" fill="#7C3AED" opacity="0.8"/>
              <circle cx="16" cy="16" r="10" fill="#A78BFA" opacity="0.6"/>
              <circle cx="16" cy="16" r="6" fill="#C4B5FD"/>
            </svg>
          </motion.div>

          <ul className="nav-menu">
            {['Product', 'Resources', 'Community', 'Customers', 'Enterprise', 'Pricing'].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <a href="#" className="nav-link">{item}</a>
              </motion.li>
            ))}
          </ul>

          <div className="nav-right">
            <motion.a 
              href="#" 
              className="login-btn"
              whileHover={{ color: '#a78bfa' }}
              transition={{ duration: 0.3 }}
            >
              Log in
            </motion.a>
            <motion.a 
              href="#" 
              className="get-started-btn"
              whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Content with Framer Motion */}
      <motion.div 
        className="hero-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Spline, a place to design<br />and collaborate in 3D.
        </motion.h1>

        <motion.ul 
          className="features-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { icon: '✓', text: 'Web-Based' },
            { icon: '✓', text: 'Real-time' },
            { icon: '✓', text: 'Collaborative' }
          ].map((feature, i) => (
            <motion.li 
              key={i}
              className="feature-item"
              whileHover={{ scale: 1.1 }}
            >
              <span className="checkmark">{feature.icon}</span>
              <span>{feature.text}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.button 
          className="cta-button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(59, 130, 246, 0.5)' }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Get started</span>
          <span className="arrow">→</span>
          <span className="button-hint">it's free</span>
        </motion.button>

        <motion.div 
          className="hero-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="hint-text">Move your cursor to interact with 3D shapes</span>
        </motion.div>
      </motion.div>

      {/* Cursor Dot */}
      <motion.div 
        className="cursor-dot"
        animate={{ x: mousePosition.x - 5, y: mousePosition.y - 5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </div>
  );
}

export default App;
