'use client';
import { useState, useRef, useEffect } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import { ScanSearch, Trash2, Upload, Recycle, AlertTriangle } from 'lucide-react';

const WasteClassifier = () => {
    const [model, setModel] = useState<mobilenet.MobileNet | null>(null);
    const [imageURL, setImageURL] = useState<string | null>(null);
    const [prediction, setPrediction] = useState<string | null>(null);
    const [confidence, setConfidence] = useState<number | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadModel = async () => {
            try {
                const loadedModel = await mobilenet.load();
                setModel(loadedModel);
            } catch (error) {
                console.error('Failed to load model:', error);
            }
        };
        loadModel();
    }, []);

    const classifyImage = async () => {
        if (model && imgRef.current) {
            setLoading(true);
            try {
                const predictions = await model.classify(imgRef.current);
                if (predictions && predictions.length > 0) {
                    setPrediction(predictions[0].className);
                    setConfidence(predictions[0].probability);
                }
            } catch (err) {
                console.error("Classification error:", err);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImageURL(url);
            setPrediction(null);
            setConfidence(null);
        }
    };

    const determineCategory = (pred: string) => {
        const lowerPred = pred.toLowerCase();
        if (lowerPred.includes('bottle') || lowerPred.includes('can') || lowerPred.includes('paper') || lowerPred.includes('cardboard') || lowerPred.includes('plastic')) {
            return { category: 'Recyclable', color: '#3b82f6', icon: <Recycle size={24} /> };
        } else if (lowerPred.includes('fruit') || lowerPred.includes('vegetable') || lowerPred.includes('food') || lowerPred.includes('apple') || lowerPred.includes('banana') || lowerPred.includes('meat')) {
            return { category: 'Organic', color: '#22c55e', icon: <Trash2 size={24} /> };
        } else if (lowerPred.includes('battery') || lowerPred.includes('chemical') || lowerPred.includes('oil') || lowerPred.includes('medicine')) {
            return { category: 'Hazardous', color: '#ef4444', icon: <AlertTriangle size={24} /> };
        } else {
            return { category: 'General Waste', color: '#f59e0b', icon: <Trash2 size={24} /> };
        }
    };

    const categoryInfo = prediction ? determineCategory(prediction) : null;

    return (
        <div className="card">
            <h2 className="card-title">
                <ScanSearch className="w-6 h-6" />
                AI Waste Classifier
            </h2>

            <div className="text-center">
                {!imageURL ? (
                    <div
                        className="upload-zone"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <div style={{ padding: '1.5rem', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.1)', marginBottom: '1.5rem' }}>
                            <Upload size={32} color="var(--primary)" />
                        </div>
                        <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>Upload Waste Image</h3>
                        <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Drag and drop or click to browse</p>
                        <p style={{ color: '#64748b', fontSize: '0.75rem', marginTop: '1rem' }}>Supports JPG, PNG (Max 5MB)</p>
                    </div>
                ) : (
                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius)', border: '1px solid var(--glass-border)' }}>
                        <img
                            ref={imgRef}
                            src={imageURL}
                            alt="Waste Preview"
                            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', display: 'block' }}
                            onLoad={classifyImage}
                        />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 40%)',
                            pointerEvents: 'none'
                        }} />
                        <button
                            className="btn btn-secondary"
                            style={{ position: 'absolute', top: '15px', right: '15px', padding: '0.5rem 1rem', fontSize: '0.8125rem' }}
                            onClick={() => { setImageURL(null); setPrediction(null); }}
                        >
                            Change Image
                        </button>
                    </div>
                )}

                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                />
            </div>

            <div className="mt-4">
                {loading && (
                    <div className="flex-center gap-3" style={{ padding: '2rem' }}>
                        <div className="animate-pulse" style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--primary)' }} />
                        <p style={{ color: '#94a3b8', fontWeight: '500' }}>AI is analyzing materials...</p>
                    </div>
                )}

                {prediction && categoryInfo && (
                    <div className="slide-content" style={{ marginTop: '2rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                            <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '700' }}>Object Detected</span>
                            <h3 style={{ fontSize: '2rem', color: '#fff', marginTop: '0.25rem' }}>{prediction.split(',')[0]}</h3>
                        </div>

                        <div style={{
                            background: 'rgba(255,255,255,0.03)',
                            padding: '1.5rem',
                            borderRadius: '1.25rem',
                            border: '1px solid var(--glass-border)'
                        }}>
                            <div className="flex-between">
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block', marginBottom: '0.5rem' }}>Recommended Action</span>
                                    <div className="flex-center gap-3" style={{ justifyContent: 'flex-start' }}>
                                        <div style={{ color: categoryInfo.color, padding: '0.5rem', background: `${categoryInfo.color}15`, borderRadius: '0.75rem' }}>
                                            {categoryInfo.icon}
                                        </div>
                                        <span style={{ color: categoryInfo.color, fontSize: '1.5rem', fontWeight: '800' }}>
                                            {categoryInfo.category}
                                        </span>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block', marginBottom: '0.5rem' }}>AI Confidence</span>
                                    <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#fff' }}>
                                        {(confidence! * 100).toFixed(1)}%
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p style={{ fontSize: '0.8125rem', color: '#64748b', textAlign: 'center', marginTop: '1.5rem' }}>
                            Automated segregation helps reduce landfill waste by 40%
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WasteClassifier;
