'use client';
import dynamic from 'next/dynamic';
import { Github, BarChart3, Recycle } from 'lucide-react';

const WasteClassifier = dynamic(() => import('../components/WasteClassifier'), { ssr: false });
const BinMonitor = dynamic(() => import('../components/BinMonitor'), { ssr: false });

export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <Recycle size={64} className="text-primary" style={{ color: '#22c55e' }} />
        </div>
        <h1>EcoSort AI</h1>
        <p className="mb-4">Smart Waste Segregation & Monitoring System</p>
        <Link href="/about" className="btn" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid var(--border)' }}>
          View Project Presentation
        </Link>
      </header>

      <div className="dashboard-grid">
        <WasteClassifier />
        <BinMonitor />
      </div>

      <div className="card" style={{ marginTop: '2rem' }}>
        <h2 className="card-title">
          <BarChart3 className="w-6 h-6" />
          Analytics Overview
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div className="stat-box" style={{ background: '#0f172a', padding: '1rem', borderRadius: 'var(--radius)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: '#22c55e' }}>1,245</h3>
            <p style={{ color: '#94a3b8' }}>Items Sorted Today</p>
          </div>
          <div className="stat-box" style={{ background: '#0f172a', padding: '1rem', borderRadius: 'var(--radius)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: '#3b82f6' }}>98.5%</h3>
            <p style={{ color: '#94a3b8' }}>AI Accuracy</p>
          </div>
          <div className="stat-box" style={{ background: '#0f172a', padding: '1rem', borderRadius: 'var(--radius)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: '#f59e0b' }}>342kg</h3>
            <p style={{ color: '#94a3b8' }}>Waste Diverted</p>
          </div>
        </div>
      </div>

      <footer style={{ marginTop: '4rem', textAlign: 'center', color: '#64748b', borderTop: '1px solid #334155', paddingTop: '2rem' }}>
        <p>© 2026 EcoSort AI - Capstone Project</p>
        <div className="flex-center gap-2" style={{ justifyContent: 'center', marginTop: '1rem' }}>
          <a href="#" style={{ color: '#94a3b8' }}><Github size={20} /></a>
        </div>
      </footer>
    </main>
  );
}
