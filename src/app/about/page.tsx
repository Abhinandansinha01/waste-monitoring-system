'use client';
import { useState, useEffect, useCallback } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    Zap,
    BarChart3,
    Brain,
    Recycle,
    Truck,
    Database,
    Home,
    Layers
} from 'lucide-react';
import Link from 'next/link';

export default function Presentation() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 'title',
            content: (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
                    <div className="slide-item" style={{ marginBottom: '2rem', padding: '1.5rem', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                        <Recycle size={80} className="text-primary" />
                    </div>
                    <h1 className="slide-item" style={{ fontSize: '3.5rem', fontWeight: 'bold', background: 'linear-gradient(to right, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', color: 'transparent', marginBottom: '1.5rem' }}>
                        EcoSort AI
                    </h1>
                    <h2 className="slide-item" style={{ fontSize: '1.8rem', color: '#cbd5e1', marginBottom: '2rem', maxWidth: '800px' }}>
                        AI-Powered Smart Waste Segregation & Monitoring System
                    </h2>
                    <div className="slide-item" style={{ color: '#94a3b8', fontSize: '1.2rem' }}>
                        <p>Revolutionizing Waste Management with Artificial Intelligence</p>
                    </div>
                </div>
            )
        },
        {
            id: 'problem',
            title: "The Problem",
            content: (
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2 className="slide-item" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: 'var(--danger)' }}>Why do we need this?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="card slide-item" style={{ background: 'rgba(15, 23, 42, 0.6)', borderColor: 'rgba(239, 68, 68, 0.3)' }}>
                            <div style={{ marginBottom: '1rem', color: 'var(--danger)' }}><Layers size={40} /></div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: 'white' }}>Improper Segregation</h3>
                            <p style={{ color: '#94a3b8' }}>People often mix recyclables with general waste. Result: Contaminated batches and environmental damage.</p>
                        </div>
                        <div className="card slide-item" style={{ background: 'rgba(15, 23, 42, 0.6)', borderColor: 'rgba(239, 68, 68, 0.3)' }}>
                            <div style={{ marginBottom: '1rem', color: 'var(--danger)' }}><Truck size={40} /></div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: 'white' }}>Inefficient Collection</h3>
                            <p style={{ color: '#94a3b8' }}>Trucks visit empty bins or ignore overflowing ones. Result: High costs and public health hazards.</p>
                        </div>
                        <div className="card slide-item" style={{ background: 'rgba(15, 23, 42, 0.6)', borderColor: 'rgba(239, 68, 68, 0.3)' }}>
                            <div style={{ marginBottom: '1rem', color: 'var(--danger)' }}><Database size={40} /></div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: 'white' }}>Lack of Data</h3>
                            <p style={{ color: '#94a3b8' }}>Municipalities lack real-time data on waste generation patterns for better city planning.</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'solution',
            title: "The Solution",
            content: (
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2 className="slide-item" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center', color: 'var(--primary)' }}>EcoSort AI: An Intelligent Ecosystem</h2>
                    <p className="slide-item" style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '3rem', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>Automating the &quot;thinking&quot; process of waste management.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        <div className="card slide-item" style={{ background: 'rgba(30, 41, 59, 1)', borderColor: 'rgba(34, 197, 94, 0.3)', textAlign: 'center' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <Brain size={64} className="text-primary" />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Automated Sorting</h3>
                            <p style={{ color: '#cbd5e1' }}>Uses <strong>Computer Vision</strong> to identify waste types tailored to local needs.</p>
                        </div>

                        <div className="card slide-item" style={{ background: 'rgba(30, 41, 59, 1)', borderColor: 'rgba(59, 130, 246, 0.3)', textAlign: 'center' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <Zap size={64} className="text-secondary" />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Smart Monitoring</h3>
                            <p style={{ color: '#cbd5e1' }}>IoT sensors track bin levels. Alerts authorities <strong>only</strong> when collection is needed.</p>
                        </div>

                        <div className="card slide-item" style={{ background: 'rgba(30, 41, 59, 1)', borderColor: 'rgba(245, 158, 11, 0.3)', textAlign: 'center' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <BarChart3 size={64} className="text-accent" />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Data-Driven Decisions</h3>
                            <p style={{ color: '#cbd5e1' }}>Analytics on waste generation patterns for smarter city planning.</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'features',
            title: "Key Features",
            content: (
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2 className="slide-item" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: 'white' }}>Technical Overview</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
                        <div className="card slide-item" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
                            <div style={{ background: 'rgba(34, 197, 94, 0.2)', padding: '1rem', borderRadius: '0.5rem' }}>
                                <Brain size={32} className="text-primary" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>AI Waste Classifier (MobileNet/TensorFlow)</h3>
                                <p style={{ color: '#94a3b8' }}>Instantly identifies images as Organic, Recyclable, or Hazardous. Runs efficiently in-browser.</p>
                            </div>
                        </div>

                        <div className="card slide-item" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
                            <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '1rem', borderRadius: '0.5rem' }}>
                                <Zap size={32} className="text-secondary" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>Real-Time Bin Monitoring</h3>
                                <p style={{ color: '#94a3b8' }}>Live dashboard showing fill-levels (0% to 100%) with visual alerts for maintenance.</p>
                            </div>
                        </div>

                        <div className="card slide-item" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
                            <div style={{ background: 'rgba(245, 158, 11, 0.2)', padding: '1rem', borderRadius: '0.5rem' }}>
                                <BarChart3 size={32} className="text-accent" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>Analytics Dashboard</h3>
                                <p style={{ color: '#94a3b8' }}>Tracks total waste sorted, contamination rates, and collection schedules.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'future',
            title: "Future Scope",
            content: (
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2 className="slide-item" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: 'var(--secondary)' }}>Where can we take this next?</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="card slide-item">
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '0.5rem' }}>Smart City Integration</h3>
                            <p style={{ color: '#94a3b8' }}>Connect with municipal trucks for <strong>Route Optimization</strong> (Google Maps integration).</p>
                        </div>
                        <div className="card slide-item">
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '0.5rem' }}>Hardware Implementation</h3>
                            <p style={{ color: '#94a3b8' }}>Physical prototype using <strong>Raspberry Pi</strong> and <strong>Servo Motors</strong> for auto-sorting.</p>
                        </div>
                        <div className="card slide-item">
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '0.5rem' }}>Gamification & Rewards</h3>
                            <p style={{ color: '#94a3b8' }}>&quot;Earn while you recycle&quot;: Points or crypto-tokens for correct segregation.</p>
                        </div>
                        <div className="card slide-item">
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '0.5rem' }}>Advanced Plastic Detection</h3>
                            <p style={{ color: '#94a3b8' }}>Upgrade AI to distinguish between plastics (PET, HDPE) for higher recycling values.</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'conclusion',
            title: "Conclusion",
            content: (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
                    <div className="slide-item" style={{ marginBottom: '2rem' }}>
                        <Recycle size={100} className="text-primary" />
                    </div>
                    <h2 className="slide-item" style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white', marginBottom: '2rem' }}>Thank You!</h2>
                    <div className="slide-item" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p style={{ fontSize: '1.5rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                            <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>EcoSort AI</span> is not just a bin; it&apos;s a step towards a cleaner, smarter, and more sustainable future.
                        </p>
                        <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginTop: '1.5rem' }}>
                            Bridging the gap between human behavior and technology.
                        </p>
                    </div>

                    <div className="slide-item" style={{ marginTop: '4rem' }}>
                        <Link href="/" className="btn" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                            Launch Live Demo
                        </Link>
                    </div>
                </div>
            )
        }
    ];

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }, [slides.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    return (
        <div style={{ minHeight: '100vh', background: 'var(--background)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {/* Top Navigation Bar */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 2rem',
                borderBottom: '1px solid #1e293b',
                background: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(8px)',
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 50
            }}>
                <Link href="/" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                    <Home size={20} />
                    <span style={{ display: 'none', '@media (min-width: 768px)': { display: 'inline' } }}>Exit Presentation</span>
                </Link>
                <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', color: '#64748b', fontFamily: 'monospace' }}>
                    {currentSlide + 1} / {slides.length}
                </div>
                <div style={{ width: '100px' }}></div>
            </div>

            {/* Main Content Area */}
            <main style={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                marginTop: '4rem',
                position: 'relative'
            }}>
                <div key={currentSlide} className="slide-content" style={{ width: '100%', maxWidth: '1200px', height: '80vh' }}>
                    {slides[currentSlide].content}
                </div>
            </main>

            {/* Bottom Controls */}
            <div style={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
                padding: '1.5rem',
                background: 'linear-gradient(to top, #0f172a, transparent)',
                zIndex: 50
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
                    <button
                        onClick={prevSlide}
                        style={{ background: '#1e293b', border: 'none', color: 'white', padding: '1rem', borderRadius: '50%', cursor: 'pointer', transition: 'transform 0.2s' }}
                        title="Previous Slide"
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                style={{
                                    height: '0.5rem',
                                    borderRadius: '999px',
                                    border: 'none',
                                    padding: 0,
                                    transition: 'all 0.3s',
                                    width: idx === currentSlide ? '2rem' : '0.5rem',
                                    backgroundColor: idx === currentSlide ? 'var(--primary)' : '#475569',
                                    cursor: 'pointer'
                                }}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="btn"
                        style={{ padding: '1rem', borderRadius: '50%', boxShadow: '0 4px 14px 0 rgba(34, 197, 94, 0.39)' }}
                        title="Next Slide"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
}
