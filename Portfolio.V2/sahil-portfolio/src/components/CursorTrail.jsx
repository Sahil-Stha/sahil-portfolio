import { useEffect, useState, useRef } from 'react'

export default function CursorTrail() {
    const [trail, setTrail] = useState([])
    const requestRef = useRef()

    useEffect(() => {
        const handleMouseMove = (e) => {
            setTrail((prev) => {
                const newPoint = { x: e.clientX, y: e.clientY, id: Math.random() }
                // Keep a longer trail for smoother curves, but limit it to prevent lag
                return [...prev.slice(-25), newPoint]
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useEffect(() => {
        const animate = () => {
            setTrail((prev) => {
                if (prev.length === 0) return prev
                // Faster decay for a more responsive feel
                return prev.slice(1)
            })
            requestRef.current = requestAnimationFrame(animate)
        }

        // Slow down the decay slightly to keep the line visible longer
        const interval = setInterval(() => {
            // We use setInterval for the decay trigger to control speed, 
            // but we could use rAF with a timestamp check for smoother 60fps decay.
            // For now, let's stick to a simple interval but slightly faster to avoid "stuck" lines.
        }, 1000) // Unused, just logic placeholder. 

        // Actually, let's just use a simple interval for decay to avoid re-rendering too fast when idle
        const decayInterval = setInterval(() => {
            setTrail((prev) => {
                if (prev.length === 0) return prev
                return prev.slice(1)
            })
        }, 20)

        return () => clearInterval(decayInterval)
    }, [])

    // Create a smooth path using quadratic bezier curves
    const getPath = (points) => {
        if (points.length === 0) return ''
        if (points.length < 2) return ''

        let path = `M ${points[0].x} ${points[0].y}`

        for (let i = 1; i < points.length - 1; i++) {
            const p1 = points[i]
            const p2 = points[i + 1]
            const midX = (p1.x + p2.x) / 2
            const midY = (p1.y + p2.y) / 2
            path += ` Q ${p1.x} ${p1.y} ${midX} ${midY}`
        }

        if (points.length > 1) {
            const last = points[points.length - 1]
            path += ` L ${last.x} ${last.y}`
        }

        return path
    }

    const pathData = getPath(trail)

    return (
        <div className="pointer-events-none fixed inset-0 z-50">
            <svg className="w-full h-full">
                <defs>
                    <linearGradient id="trail-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.8" />
                    </linearGradient>
                </defs>
                <path
                    d={pathData}
                    fill="none"
                    stroke="url(#trail-gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                // Removed transition-all to prevent jittering during rapid updates
                />
            </svg>
        </div>
    )
}
