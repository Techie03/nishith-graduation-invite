import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function SplineScene() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0, // Behind the hero content
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      {/* 
        Premium dark interactive 3D Spline scene. 
        You can replace this URL with your own custom Spline design! 
      */}
      <Spline 
        scene="https://prod.spline.design/K8CsMYsBsIOMHBbM/scene.splinecode" 
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Gradient overlay to ensure text stays readable */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(5,5,5,0.1) 0%, rgba(5,5,5,0.9) 100%)',
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  )
}
