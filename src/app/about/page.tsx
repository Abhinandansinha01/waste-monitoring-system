'use client';
import { Target, Lightbulb, Zap, Rocket, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function About() {
    return (
        <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
            <header style={{ padding: '2rem', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link href="/" className="btn" style={{ padding: '0.5rem 1rem', background: '#334155' }}>
                    <ChevronLeft className="w-5 h-5 mr-2" /> Back to Dashboard
                </Link>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Project Overview</h1>
                <div style={{ width: '100px' }}></div> {/* Spacer */}
            </header>

            <main className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem 2rem' }}>

                {/* Title Section */}
                <section style={{ marginBottom: '5rem', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, background: 'linear-gradient(to right, #22c55e, #3b82f6)', WebkitBackgroundClip: 'text', color: 'transparent', marginBottom: '1rem' }}>
                        EcoSort AI
                    </h1>
                    <p style={{ fontSize: '1.5rem', color: '#94a3b8', maxWidth: '700px', margin: '0 auto' }}>
                        AI-Powered Smart Waste Segregation & Monitoring System
                    </p>
                </section>

                {/* Problem Statement */}
                <section style={{ marginBottom: '5rem' }}>
                    <div className="flex-center gap-2" style={{ marginBottom: '1rem', justifyContent: 'flex-start' }}>
                        <Target className="text-danger w-8 h-8" size={32} />
                        <h2 className="text-danger" style={{ fontSize: '2rem' }}>The Problem</h2>
                    </div>
                    <div className="card" style={{ padding: '2rem' }}>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#cbd5e1' }}>In our daily lives, waste management faces critical challenges:</p>
                        <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'grid', gap: '1rem' }}>
                            <li style={{ background: '#1e293b', padding: '1rem', borderRadius: 'var(--radius)', borderLeft: '4px solid #ef4444' }}>
                                <strong>1. Improper Segregation:</strong> Recyclables contaminated with organic waste become landfill material.
                            </li>
                            <li style={{ background: '#1e293b', padding: '1rem', borderRadius: 'var(--radius)', borderLeft: '4px solid #ef4444' }}>
                                <strong>2. Inefficient Collection:</strong> Trucks visit empty bins or ignore overflowing ones, wasting fuel and causing health hazards.
                            </li>
                            <li style={{ background: '#1e293b', padding: '1rem', borderRadius: 'var(--radius)', borderLeft: '4px solid #ef4444' }}>
                                <strong>3. Lack of Data:</strong> No insights into waste generation patterns for better city planning.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* The Solution */}
                <section style={{ marginBottom: '5rem' }}>
                    <div className="flex-center gap-2" style={{ marginBottom: '1rem', justifyContent: 'flex-start' }}>
                        <Lightbulb className="text-primary w-8 h-8" size={32} />
                        <h2 className="text-primary" style={{ fontSize: '2rem' }}>Our Solution</h2>
                    </div>
                    <div className="dashboard-grid">
                        <div className="card" style={{ textAlign: 'center' }}>
                            <Zap className="text-accent w-12 h-12 mb-4" size={48} style={{ margin: '0 auto 1rem' }} />
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>AI Intelligence</h3>
                            <p style={{ color: '#94a3b8' }}>Automated classification using Computer Vision to remove human error.</p>
                        </div>
                        <div className="card" style={{ textAlign: 'center' }}>
                            <Target className="text-secondary w-12 h-12 mb-4" size={48} style={{ margin: '0 auto 1rem' }} />
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Smart Monitoring</h3>
                            <p style={{ color: '#94a3b8' }}>Real-time sensors track bin levels and alert collection services only when needed.</p>
                        </div>
                    </div>
                </section>

                {/* Future Scope */}
                <section style={{ marginBottom: '5rem' }}>
                    <div className="flex-center gap-2" style={{ marginBottom: '1rem', justifyContent: 'flex-start' }}>
                        <Rocket className="text-secondary w-8 h-8" size={32} />
                        <h2 className="text-secondary" style={{ fontSize: '2rem' }}>Future Scope</h2>
                    </div>
                    <div className="card" style={{ padding: '2rem', backgroundImage: 'linear-gradient(to bottom right, #1e293b, #0f172a)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            <div>
                                <h3 className="text-primary" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Smart City Integration</h3>
                                <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>Connect bins with municipal trucks for dynamic route optimization.</p>
                            </div>
                            <div>
                                <h3 className="text-primary" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Gamification</h3>
                                <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>Reward users with "Green Points" for correct segregation to encourage participation.</p>
                            </div>
                            <div>
                                <h3 className="text-primary" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>IoT Hardware</h3>
                                <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>Implement robotic arms and sorting mechanisms for fully automated physical segregation.</p>
                            </div>
                            <div>
                                <h3 className="text-primary" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Advanced Analytics</h3>
                                <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>Predictive analysis to identify high-waste zones and optimize localized policies.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
