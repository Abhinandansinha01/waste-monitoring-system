'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Github, BarChart3, Recycle } from 'lucide-react';

const WasteClassifier = dynamic(() => import('../components/WasteClassifier'), { ssr: false });
const BinMonitor = dynamic(() => import('../components/BinMonitor'), { ssr: false });

export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <div className="flex-center mb-4" style={{ marginBottom: '2rem' }}>
          <div style={{ position: 'relative' }}>
            <Recycle size={80} className="text-primary animate-pulse" style={{ filter: 'drop-shadow(0 0 20px var(--primary-glow))' }} />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120px',
              height: '120px',
              background: 'var(--primary-glow)',
              filter: 'blur(40px)',
              zIndex: -1
            }} />
          </div>
        </div>
        <h1>EcoSort AI</h1>
        <p>Advanced Waste Segregation & IoT Monitoring System for a Sustainable Future.</p>
        <div className="flex-center gap-4">
          <Link href="/about" className="btn">
            View Case Study
          </Link>
          <a href="#analytics" className="btn btn-secondary">
            Live Analytics
          </a>
        </div>
      </header>

      <div className="dashboard-grid">
        <WasteClassifier />
        <BinMonitor />
      </div>

      <section id="analytics" className="card" style={{ marginTop: '4rem', padding: '3rem' }}>
        <h2 className="card-title">
          <BarChart3 className="w-6 h-6" />
          Global Environmental Impact
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
          <div className="stat-box">
            <span className="stat-label">Items Sorted Today</span>
            <h3 className="stat-value" style={{ color: 'var(--primary)' }}>1,245</h3>
            <p style={{ color: '#64748b', fontSize: '0.75rem', marginTop: '0.5rem' }}>↑ 12% from yesterday</p>
          </div>
          <div className="stat-box">
            <span className="stat-label">AI Prediction Accuracy</span>
            <h3 className="stat-value" style={{ color: 'var(--secondary)' }}>99.7%</h3>
            <p style={{ color: '#64748b', fontSize: '0.75rem', marginTop: '0.5rem' }}>Based on 50k+ samples</p>
          </div>
          <div className="stat-box">
            <span className="stat-label">Carbon Offset (kg CO2)</span>
            <h3 className="stat-value" style={{ color: 'var(--accent)' }}>342kg</h3>
            <p style={{ color: '#64748b', fontSize: '0.75rem', marginTop: '0.5rem' }}>Equivalent to 15 trees</p>
          </div>
        </div>
      </section>

      <footer style={{ marginTop: '6rem', textAlign: 'center', color: '#64748b', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div className="flex-center gap-6" style={{ marginBottom: '2rem' }}>
          <a href="#" style={{ color: '#94a3b8', transition: 'color 0.3s' }} className="hover:text-white">Documentation</a>
          <a href="#" style={{ color: '#94a3b8', transition: 'color 0.3s' }} className="hover:text-white">Research Paper</a>
          <a href="#" style={{ color: '#94a3b8', transition: 'color 0.3s' }} className="hover:text-white">API Reference</a>
        </div>
        <p style={{ fontSize: '0.875rem' }}>© 2026 EcoSort AI Technologies. All rights reserved.</p>
        <div className="flex-center gap-4" style={{ marginTop: '1.5rem' }}>
          <a href="#" style={{ color: '#475569' }}><Github size={20} /></a>
        </div>
      </footer>
    </main>
  );
}
