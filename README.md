# 🌱 EcoSort AI - Smart Waste Segregation and Monitoring System

![EcoSort AI](public/lpu_logo.png)

Welcome to **EcoSort AI**, an intelligent waste management platform that utilizes advanced Artificial Intelligence (NVIDIA Nemotron Vision & Language Models) to autonomously classify waste into proper categories (Organic, Recyclable, Hazardous, General) and monitor IoT bin fill levels in real-time.

## 🚀 Live Demo & Presentation

This project is deployed live on GitHub Pages:

* **📊 [Live AI Dashboard](https://abhinandansinha01.github.io/waste-monitoring-system/)**
* **▶️ [Project Presentation](https://abhinandansinha01.github.io/waste-monitoring-system/PRESENTATION.html)**

> **Note:** Click the ⚙️ settings icon in the dashboard header to enter your [OpenRouter API key](https://openrouter.ai/keys) for live AI analysis. Without a key, the dashboard runs in demo/fallback mode.

## ✨ Features

* **AI Waste Classifier (Nemotron Pipeline)**: Uses device cameras or image uploads to scan waste items. It automatically identifies the material and categorizes it using a powerful two-step vision/text AI pipeline.
* **Smart IoT Bin Monitoring**: Real-time visual monitoring of bin capacities with predictive algorithms based on AI classifications.
* **Environmental Impact Tracking**: Automatically calculates toxicity levels, recyclability scores, and estimated CO2 emissions saved from proper segregation.
* **Presentation Mode**: Built-in cinematic presentation system for seminar demonstrations.
* **Secure API Key Handling**: API key is stored in browser localStorage only — never committed to source code.

## 🛠️ Technology Stack

* **Frontend**: Vanilla JS, HTML5, TailwindCSS, Chart.js, Lucide Icons
* **AI Provider**: OpenRouter API (called directly from client)
* **AI Models**: `nvidia/nemotron-nano-12b-v2-vl` (Vision) & `nvidia/nemotron-3-super-120b-a12b` (Text Analysis)
* **Deployment**: GitHub Pages (static)

## 💻 Running Locally

1. Clone this repository.
2. Open `docs/index.html` in your browser — that's it!
3. Click the ⚙️ icon to enter your OpenRouter API key for live AI analysis.

### For local Next.js backend (optional):
1. Copy `.env.example` to `.env.local` and add your OpenRouter API key.
2. Run `npm install` then `npm run dev`.
3. Open `LIVE_DASHBOARD.html` in your browser.

## 👨‍💻 Developed By

**Abhinandan Sinha**  
Registration No: **12303165**  
Roll No: **27**  

[🔗 Connect on LinkedIn](https://www.linkedin.com/in/abhinandansinha01/)
