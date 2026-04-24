# 🌱 EcoSort AI - Smart Waste Segregation and Monitoring System

![EcoSort AI](public/lpu_logo.png)

Welcome to **EcoSort AI**, an intelligent waste management platform that utilizes advanced Artificial Intelligence (NVIDIA Nemotron Vision & Language Models) to autonomously classify waste into proper categories (Organic, Recyclable, Hazardous, General) and monitor IoT bin fill levels in real-time.

## 🚀 Live Demo & Presentation

This project is deployed live on Vercel. You can access the demonstration and dashboard from anywhere:

* **▶️ [Project Presentation (Slideshow)](https://waste-monitoring-system.vercel.app/)**
* **📊 [Live AI Dashboard](https://waste-monitoring-system.vercel.app/LIVE_DASHBOARD.html)**

*(Note: The main URL automatically redirects to the presentation. You can launch the Live Dashboard from the final slide of the presentation or via the direct link above.)*

## ✨ Features

* **AI Waste Classifier (Nemotron Pipeline)**: Uses device cameras or image uploads to scan waste items. It automatically identifies the material and categorizes it using a powerful two-step vision/text AI pipeline.
* **Smart IoT Bin Monitoring**: Real-time visual monitoring of bin capacities with predictive algorithms based on AI classifications.
* **Environmental Impact Tracking**: Automatically calculates toxicity levels, recyclability scores, and estimated CO2 emissions saved from proper segregation.
* **Presentation Mode**: Built-in cinematic presentation system for seminar demonstrations.

## 🛠️ Technology Stack

* **Frontend**: Vanilla JS, HTML5, TailwindCSS, Chart.js, Lucide Icons
* **Backend**: Next.js App Router (API Proxy)
* **AI Provider**: OpenRouter API
* **AI Models**: `nvidia/nemotron-nano-12b-v2-vl` (Vision) & `nvidia/nemotron-3-super-120b-a12b` (Text Analysis)
* **Deployment**: Vercel

## 💻 Running Locally

If you want to run the project entirely on your local machine instead of using the Vercel link:

1. Clone this repository.
2. Open the directory and ensure you have Node.js installed.
3. Rename `.env.example` to `.env.local` and add your OpenRouter API key.
4. Run the `START_ECOSORT.bat` script (Windows) to automatically start the backend server and open the UI.

## 👨‍💻 Developed By

**Abhinandan Sinha**  
Registration No: **12303165**  
Roll No: **27**  

[🔗 Connect on LinkedIn](https://www.linkedin.com/in/abhinandansinha01/)
