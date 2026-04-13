'use client';
import { useState, useEffect } from 'react';
import { AreaChart, Trash, AlertTriangle, CheckCircle } from 'lucide-react';

interface BinData {
    type: 'Organic' | 'Recyclable' | 'Hazardous' | 'General Waste';
    level: number;
    color: string;
}

const BinMonitor = () => {
    const [bins, setBins] = useState<BinData[]>([
        { type: 'Organic', level: 45, color: '#22c55e' },
        { type: 'Recyclable', level: 12, color: '#3b82f6' },
        { type: 'Hazardous', level: 5, color: '#ef4444' },
        { type: 'General Waste', level: 78, color: '#f59e0b' }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setBins(currentBins => currentBins.map(bin => ({
                ...bin,
                level: Math.min(100, Math.max(0, bin.level + (Math.random() > 0.6 ? 2 : -1)))
            })));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const getStatusIcon = (level: number) => {
        if (level >= 90) return <AlertTriangle className="animate-pulse" color="#ef4444" size={18} />;
        if (level >= 75) return <AlertTriangle color="#f59e0b" size={18} />;
        return <CheckCircle color="#22c55e" size={18} />;
    };

    return (
        <div className="card">
            <h2 className="card-title">
                <AreaChart className="w-6 h-6" />
                Real-Time Bin Status
            </h2>

            <div className="bin-list" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {bins.map((bin) => (
                    <div key={bin.type} className="bin-item">
                        <div className="flex-between" style={{ marginBottom: '0.75rem' }}>
                            <div className="flex-center gap-2">
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '8px',
                                    background: `${bin.color}20`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Trash color={bin.color} size={18} />
                                </div>
                                <span style={{ fontWeight: 600, fontSize: '1rem', color: '#e2e8f0' }}>{bin.type}</span>
                            </div>
                            <div className="flex-center gap-3">
                                <span style={{
                                    fontWeight: '800',
                                    fontSize: '1.25rem',
                                    fontFamily: 'var(--font-heading)',
                                    color: bin.level >= 90 ? '#ef4444' : '#fff'
                                }}>
                                    {bin.level}%
                                </span>
                                {getStatusIcon(bin.level)}
                            </div>
                        </div>

                        <div className="progress-container" style={{ height: '12px', background: 'rgba(255,255,255,0.05)' }}>
                            <div
                                className="progress-bar"
                                style={{
                                    width: `${bin.level}%`,
                                    background: bin.level >= 90
                                        ? 'linear-gradient(90deg, #ef4444, #ff6b6b)'
                                        : `linear-gradient(90deg, ${bin.color}, ${bin.color}cc)`,
                                    boxShadow: bin.level >= 75 ? `0 0 15px ${bin.color}40` : 'none'
                                }}
                            />
                        </div>

                        {bin.level >= 90 && (
                            <div style={{
                                marginTop: '0.75rem',
                                padding: '0.5rem 0.75rem',
                                background: 'rgba(239, 68, 68, 0.1)',
                                border: '1px solid rgba(239, 68, 68, 0.2)',
                                borderRadius: '0.5rem',
                                color: '#ef4444',
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <AlertTriangle size={14} /> ACTION REQUIRED: OPTIMIZE COLLECTION ROUTE
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-4" style={{
                marginTop: '2.5rem',
                padding: '1.25rem',
                background: 'rgba(34, 197, 94, 0.05)',
                border: '1px solid rgba(34, 197, 94, 0.1)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div>
                    <div className="status-badge badge-online mb-4" style={{ marginBottom: '0.5rem' }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />
                        System Online
                    </div>
                    <p style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>All IoT sensors operational</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Last sync</p>
                    <p style={{ fontSize: '0.8125rem', fontWeight: '600', color: '#cbd5e1' }}>Just now</p>
                </div>
            </div>
        </div>
    );
};

export default BinMonitor;
