import { useRef, useMemo, useCallback } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

/* ─── Floating Octahedron Crystal ─────────────────────── */
function Crystal() {
  const groupRef = useRef()

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.rotation.y = t * 0.12
    groupRef.current.rotation.x = Math.sin(t * 0.25) * 0.06
    groupRef.current.rotation.z = Math.cos(t * 0.2) * 0.03
  })

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.5} floatingRange={[-0.12, 0.12]}>
      <group ref={groupRef} scale={1.1}>
        {/* Main crystal body */}
        <mesh>
          <octahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial
            color="#0d3d20"
            metalness={0.9}
            roughness={0.15}
            clearcoat={1}
            clearcoatRoughness={0.05}
            reflectivity={1}
            envMapIntensity={1.5}
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* Gold wireframe overlay */}
        <mesh>
          <octahedronGeometry args={[1.02, 0]} />
          <meshBasicMaterial color="#c9a84c" wireframe transparent opacity={0.2} />
        </mesh>

        {/* Inner glow sphere */}
        <mesh scale={0.35}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#c9a84c" transparent opacity={0.06} />
        </mesh>

        {/* Orbital ring 1 */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.6, 0.004, 8, 64]} />
          <meshBasicMaterial color="#c9a84c" transparent opacity={0.18} />
        </mesh>

        {/* Orbital ring 2 - tilted */}
        <mesh rotation={[1.2, 0.5, 0.3]}>
          <torusGeometry args={[1.85, 0.003, 8, 64]} />
          <meshBasicMaterial color="#8a7332" transparent opacity={0.1} />
        </mesh>
      </group>
    </Float>
  )
}

/* ─── Floating Gold Particles ─────────────────────────── */
function ParticleField() {
  const pointsRef = useRef()
  const count = 50

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10
      arr[i * 3 + 2] = (Math.random() - 0.5) * 5
    }
    return arr
  }, [])

  useFrame((state) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015
    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.005
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#c9a84c"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  )
}

/* ─── Exported 3D Scene ───────────────────────────────── */
export default function Scene3D() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 1,
    }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 35 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <color attach="background" args={['#050505']} />

        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#c9a84c" />
        <directionalLight position={[-3, -2, 4]} intensity={0.4} color="#1a9e5a" />
        <pointLight position={[0, 3, 3]} intensity={0.6} color="#d4b968" distance={10} />
        <pointLight position={[-2, -1, 2]} intensity={0.3} color="#00853e" distance={8} />

        <Crystal />
        <ParticleField />
      </Canvas>
    </div>
  )
}
