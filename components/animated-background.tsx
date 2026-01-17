"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      pulseOffset: number
      hue: number
    }

    interface CircuitNode {
      x: number
      y: number
      connections: number[]
      pulseOffset: number
      type: "node" | "hub"
    }

    interface EnergyWave {
      x: number
      y: number
      radius: number
      maxRadius: number
      opacity: number
    }

    interface FloatingOrb {
      x: number
      y: number
      radius: number
      speed: number
      angle: number
      pulseOffset: number
    }

    let particles: Particle[] = []
    let circuitNodes: CircuitNode[] = []
    const energyWaves: EnergyWave[] = []
    let floatingOrbs: FloatingOrb[] = []
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    const createElements = () => {
      particles = []
      circuitNodes = []
      floatingOrbs = []

      // Create particles
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000)
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          pulseOffset: Math.random() * Math.PI * 2,
          hue: Math.random() * 30 + 160, // Cyan to teal range
        })
      }

      // Create circuit board nodes
      const gridSpacingX = 150
      const gridSpacingY = 150
      const cols = Math.ceil(canvas.width / gridSpacingX) + 1
      const rows = Math.ceil(canvas.height / gridSpacingY) + 1

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          if (Math.random() > 0.6) {
            const x = col * gridSpacingX + (Math.random() - 0.5) * 50
            const y = row * gridSpacingY + (Math.random() - 0.5) * 50
            circuitNodes.push({
              x,
              y,
              connections: [],
              pulseOffset: Math.random() * Math.PI * 2,
              type: Math.random() > 0.8 ? "hub" : "node",
            })
          }
        }
      }

      // Create connections
      circuitNodes.forEach((node, i) => {
        circuitNodes.forEach((other, j) => {
          if (i !== j && node.connections.length < (node.type === "hub" ? 5 : 3)) {
            const dist = Math.hypot(node.x - other.x, node.y - other.y)
            if (dist < 200 && dist > 50) {
              node.connections.push(j)
            }
          }
        })
      })

      // Create floating orbs
      const orbCount = 8
      for (let i = 0; i < orbCount; i++) {
        floatingOrbs.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 100 + 50,
          speed: Math.random() * 0.0005 + 0.0002,
          angle: Math.random() * Math.PI * 2,
          pulseOffset: Math.random() * Math.PI * 2,
        })
      }
    }

    const addEnergyWave = (x: number, y: number) => {
      if (energyWaves.length < 5) {
        energyWaves.push({
          x,
          y,
          radius: 0,
          maxRadius: 300,
          opacity: 0.3,
        })
      }
    }

    const animate = () => {
      time += 0.016
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mouseX = mouseRef.current.x
      const mouseY = mouseRef.current.y + window.scrollY

      // Draw subtle gradient background orbs
      floatingOrbs.forEach((orb) => {
        orb.angle += orb.speed
        const offsetX = Math.cos(orb.angle) * 100
        const offsetY = Math.sin(orb.angle * 0.7) * 100
        const pulse = Math.sin(time * 0.5 + orb.pulseOffset) * 0.3 + 0.7

        const gradient = ctx.createRadialGradient(
          orb.x + offsetX,
          orb.y + offsetY,
          0,
          orb.x + offsetX,
          orb.y + offsetY,
          orb.radius * pulse,
        )
        gradient.addColorStop(0, "rgba(100, 255, 218, 0.03)")
        gradient.addColorStop(0.5, "rgba(100, 255, 218, 0.01)")
        gradient.addColorStop(1, "rgba(100, 255, 218, 0)")
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      // Draw circuit board pattern
      ctx.lineCap = "round"

      // Draw connections first
      circuitNodes.forEach((node) => {
        const distToMouse = Math.hypot(node.x - mouseX, node.y - mouseY)
        const mouseInfluence = Math.max(0, 1 - distToMouse / 400)

        node.connections.forEach((j) => {
          const other = circuitNodes[j]
          const pulse = Math.sin(time * 2 + node.pulseOffset) * 0.5 + 0.5
          const baseOpacity = 0.03 + pulse * 0.02 + mouseInfluence * 0.15

          // Draw the connection line
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)

          // Create angled circuit-like paths
          const midX = (node.x + other.x) / 2
          const midY = (node.y + other.y) / 2
          const angle = Math.atan2(other.y - node.y, other.x - node.x)

          if (Math.abs(angle) < Math.PI / 4 || Math.abs(angle) > (3 * Math.PI) / 4) {
            // Horizontal dominant
            ctx.lineTo(midX, node.y)
            ctx.lineTo(midX, other.y)
          } else {
            // Vertical dominant
            ctx.lineTo(node.x, midY)
            ctx.lineTo(other.x, midY)
          }
          ctx.lineTo(other.x, other.y)

          ctx.strokeStyle = `rgba(100, 255, 218, ${baseOpacity})`
          ctx.lineWidth = 1 + mouseInfluence * 1.5
          ctx.stroke()

          // Animated data pulse along the line
          const pulsePos = (time * 0.5 + node.pulseOffset) % 1
          const pulseX = node.x + (other.x - node.x) * pulsePos
          const pulseY = node.y + (other.y - node.y) * pulsePos

          if (mouseInfluence > 0.1) {
            ctx.beginPath()
            ctx.arc(pulseX, pulseY, 2 + mouseInfluence * 2, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(100, 255, 218, ${0.3 + mouseInfluence * 0.5})`
            ctx.fill()
          }
        })
      })

      // Draw nodes
      circuitNodes.forEach((node) => {
        const distToMouse = Math.hypot(node.x - mouseX, node.y - mouseY)
        const mouseInfluence = Math.max(0, 1 - distToMouse / 300)
        const pulse = Math.sin(time * 3 + node.pulseOffset) * 0.5 + 0.5
        const size = node.type === "hub" ? 4 : 2
        const nodeOpacity = 0.2 + pulse * 0.2 + mouseInfluence * 0.6

        // Outer glow
        if (node.type === "hub" || mouseInfluence > 0.3) {
          const glowRadius = (size + 10) * (1 + mouseInfluence)
          const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowRadius)
          glow.addColorStop(0, `rgba(100, 255, 218, ${nodeOpacity * 0.5})`)
          glow.addColorStop(1, "rgba(100, 255, 218, 0)")
          ctx.fillStyle = glow
          ctx.fillRect(node.x - glowRadius, node.y - glowRadius, glowRadius * 2, glowRadius * 2)
        }

        // Node core
        ctx.beginPath()
        ctx.arc(node.x, node.y, size + mouseInfluence * 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(100, 255, 218, ${nodeOpacity})`
        ctx.fill()

        // Hub ring
        if (node.type === "hub") {
          ctx.beginPath()
          ctx.arc(node.x, node.y, size + 6 + pulse * 2, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(100, 255, 218, ${0.2 + mouseInfluence * 0.3})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })

      // Draw particles with trails and connections
      particles.forEach((particle, i) => {
        const distToMouse = Math.hypot(particle.x - mouseX, particle.y - mouseY)
        const mouseInfluence = Math.max(0, 1 - distToMouse / 200)

        // Mouse attraction/repulsion
        if (distToMouse < 200 && distToMouse > 5) {
          const angle = Math.atan2(mouseY - particle.y, mouseX - particle.x)
          const force = mouseInfluence * 0.5
          particle.vx += Math.cos(angle) * force
          particle.vy += Math.sin(angle) * force
        }

        // Damping
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        const pulse = Math.sin(time * 2 + particle.pulseOffset) * 0.5 + 0.5
        const size = particle.size * (1 + pulse * 0.3 + mouseInfluence)
        const opacity = particle.opacity * (0.7 + pulse * 0.3) + mouseInfluence * 0.4

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 70%, ${opacity})`
        ctx.fill()

        // Connect nearby particles
        particles.slice(i + 1, i + 10).forEach((other) => {
          const dist = Math.hypot(particle.x - other.x, particle.y - other.y)
          if (dist < 80) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(100, 255, 218, ${0.1 * (1 - dist / 80)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      // Draw energy waves
      energyWaves.forEach((wave, i) => {
        wave.radius += 3
        wave.opacity -= 0.005

        if (wave.opacity > 0) {
          ctx.beginPath()
          ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(100, 255, 218, ${wave.opacity})`
          ctx.lineWidth = 2
          ctx.stroke()
        }

        if (wave.radius > wave.maxRadius || wave.opacity <= 0) {
          energyWaves.splice(i, 1)
        }
      })

      // Scanning beam effect
      const scanY = ((time * 50) % (canvas.height + 600)) - 300
      const scanGradient = ctx.createLinearGradient(0, scanY - 150, 0, scanY + 150)
      scanGradient.addColorStop(0, "rgba(100, 255, 218, 0)")
      scanGradient.addColorStop(0.3, "rgba(100, 255, 218, 0.015)")
      scanGradient.addColorStop(0.5, "rgba(100, 255, 218, 0.03)")
      scanGradient.addColorStop(0.7, "rgba(100, 255, 218, 0.015)")
      scanGradient.addColorStop(1, "rgba(100, 255, 218, 0)")
      ctx.fillStyle = scanGradient
      ctx.fillRect(0, scanY - 150, canvas.width, 300)

      // Mouse glow
      const mouseGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 250)
      mouseGlow.addColorStop(0, "rgba(100, 255, 218, 0.08)")
      mouseGlow.addColorStop(0.3, "rgba(100, 255, 218, 0.03)")
      mouseGlow.addColorStop(1, "rgba(100, 255, 218, 0)")
      ctx.fillStyle = mouseGlow
      ctx.beginPath()
      ctx.arc(mouseX, mouseY, 250, 0, Math.PI * 2)
      ctx.fill()

      // Hexagonal cursor effect
      const hexSize = 30
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3 - Math.PI / 6
        const hx = mouseX + Math.cos(angle + time) * hexSize
        const hy = mouseY + Math.sin(angle + time) * hexSize
        if (i === 0) ctx.moveTo(hx, hy)
        else ctx.lineTo(hx, hy)
      }
      ctx.closePath()
      ctx.strokeStyle = "rgba(100, 255, 218, 0.15)"
      ctx.lineWidth = 1
      ctx.stroke()

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleClick = (e: MouseEvent) => {
      addEnergyWave(e.clientX, e.clientY + window.scrollY)
    }

    const handleResize = () => {
      resize()
      createElements()
    }

    resize()
    createElements()
    animate()

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("click", handleClick)
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", () => {
      canvas.height = document.documentElement.scrollHeight
    })

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("click", handleClick)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 opacity-90" aria-hidden="true" />
}
