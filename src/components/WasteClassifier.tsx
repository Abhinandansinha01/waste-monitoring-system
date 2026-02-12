'use client';
import { useState, useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import { ScanSearch, Trash2, Camera, Upload } from 'lucide-react';

const WasteClassifier = () => {
    const [model, setModel] = useState<mobilenet.MobileNet | null>(null);
    const [imageURL, setImageURL] = useState<string | null>(null);
    const [prediction, setPrediction] = useState<string | null>(null);
    const [confidence, setConfidence] = useState<number | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Load the MobileNet model
        const loadModel = async () => {
            try {
                const loadedModel = await mobilenet.load();
                setModel(loadedModel);
                console.log('MobileNet model loaded.');
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
        // Simple mapping for demo purposes. In a real scenario, this would be more robust.
        const lowerPred = pred.toLowerCase();
        if (lowerPred.includes('bottle') || lowerPred.includes('can') || lowerPred.includes('paper') || lowerPred.includes('cardboard')) {
            return { category: 'Recyclable', color: '#3b82f6' }; 
        } else if (lowerPred.includes('fruit') || lowerPred.includes('vegetable') || lowerPred.includes('food') || lowerPred.includes('apple') || lowerPred.includes('banana')) {
            return { category: 'Organic', color: '#22c55e' };
        } else if (lowerPred.includes('battery') || lowerPred.includes('chemical')) {
             return { category: 'Hazardous', color: '#ef4444' };
        } else {
            return { category: 'General Waste', color: '#f59e0b' };
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
                        className="upload-placeholder"
                        style={{border: '2px dashed var(--border)', padding: '2rem', borderRadius: 'var(--radius)', cursor: 'pointer'}}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <Upload size={48} color="var(--border)" />
                        <p className="mt-4" style={{color: '#94a3b8'}}>Click to upload an image of waste</p>
                    </div>
                ) : (
                    <div style={{position: 'relative'}}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            ref={imgRef} 
                            src={imageURL} 
                            alt="Waste Preview" 
                            style={{maxWidth: '100%', maxHeight: '300px', borderRadius: 'var(--radius)', display: 'block', margin: '0 auto'}}
                            onLoad={classifyImage}
                        />
                        <button 
                            className="btn" 
                            style={{position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.5)'}}
                            onClick={() => { setImageURL(null); setPrediction(null); }}
                        >
                            Reset
                        </button>
                    </div>
                )}
                
                <input 
                    type="file" 
                    accept="image/*" 
                    ref={fileInputRef} 
                    onChange={handleImageUpload} 
                    style={{display: 'none'}} 
                />
            </div>

            <div className="mt-4">
                {loading && <p className="text-center">Analyzing Image...</p>}
                
                {prediction && categoryInfo && (
                    <div className="result-box" style={{marginTop: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius)'}}>
                        <h3 className="text-center" style={{color: '#94a3b8', fontSize: '0.9rem'}}>Object Detected</h3>
                        <p className="text-center" style={{fontSize: '1.2rem', fontWeight: 'bold'}}>{prediction}</p>
                        
                        <div style={{marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)'}}>
                            <h3 className="text-center" style={{color: '#94a3b8', fontSize: '0.9rem'}}>Suggested Bin</h3>
                            <div className="flex-center gap-2" style={{marginTop: '0.5rem'}}>
                                <Trash2 color={categoryInfo.color} />
                                <span style={{color: categoryInfo.color, fontSize: '1.5rem', fontWeight: 'bold'}}>
                                    {categoryInfo.category}
                                </span>
                            </div>
                            <p className="text-center" style={{fontSize: '0.8rem', color: '#64748b', marginTop: '0.5rem'}}>
                                Confidence: {(confidence! * 100).toFixed(1)}%
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WasteClassifier;
