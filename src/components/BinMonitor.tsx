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

    // Simulate real-time monitoring
    useEffect(() => {
        const interval = setInterval(() => {
            setBins(currentBins => currentBins.map(bin => ({
                ...bin,
                level: Math.min(100, Math.max(0, bin.level + (Math.random() > 0.5 ? 2 : -1)))
            })));
        }, 3000); // Update every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const getStatusIcon = (level: number) => {
        if (level >= 90) return <AlertTriangle color="#ef4444" />;
        if (level >= 75) return <AlertTriangle color="#f59e0b" />;
        return <CheckCircle color="#22c55e" />;
    };

    return (
        <div className="card">
            <h2 className="card-title">
                <AreaChart className="w-6 h-6" />
                Real-Time Bin Status
            </h2>

            <div className="bin-list">
                {bins.map((bin) => (
                    <div key={bin.type} className="bin-item" style={{ marginBottom: '1.5rem' }}>
                        <div className="flex-between" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <div className="flex-center gap-2">
                                <Trash color={bin.color} size={18} />
                                <span style={{ fontWeight: 600 }}>{bin.type}</span>
                            </div>
                            <div className="flex-center gap-2">
                                <span style={{ fontWeight: 'bold', color: bin.level >= 90 ? '#ef4444' : '#94a3b8' }}>
                                    {bin.level}%
                                </span>
                                {getStatusIcon(bin.level)}
                            </div>
                        </div>

                        {/* Progress Bar Container */}
                        <div style={{
                            height: '12px',
                            background: '#334155',
                            borderRadius: '6px',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            {/* Animated Progress Bar */}
                            <div style={{
                                width: `${bin.level}%`,
                                height: '100%',
                                background: bin.level >= 90 ? '#ef4444' : bin.color,
                                borderRadius: '6px',
                                transition: 'width 1s ease-in-out',
                                boxShadow: `0 0 10px ${bin.color}40`
                            }} />
                        </div>

                        {bin.level >= 90 && (
                            <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                <AlertTriangle size={12} /> CRITICAL: BIN FULL - DISPATCH COLLECTION
                            </p>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-4 p-4" style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid #22c55e', borderRadius: 'var(--radius)' }}>
                <h4 style={{ color: '#22c55e', fontWeight: 'bold', marginBottom: '0.5rem' }}>System Status: ONLINE</h4>
                <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>All sensors active. Data sync interval: 3s.</p>
            </div>
        </div>
    );
};

export default BinMonitor;
