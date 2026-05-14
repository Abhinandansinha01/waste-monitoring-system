# 🌱 EcoSort AI - Smart Waste Segregation and Monitoring System

![EcoSort AI](public/lpu_logo.png)

Welcome to **EcoSort AI**, an intelligent waste management platform that utilizes advanced Artificial Intelligence (NVIDIA Nemotron Vision & Language Models) to autonomously classify waste into proper categories (Organic, Recyclable, Hazardous, General) and monitor IoT bin fill levels in real-time.

## 🚀 Live Demo & Presentation

This project is deployed live on GitHub Pages:

* **📊 [Live AI Dashboard](https://abhinandansinha01.github.io/waste-monitoring-system/)**
* **▶️ [Project Presentation](https://abhinandansinha01.github.io/waste-monitoring-system/PRESENTATION.html)**

> **Note:** The dashboard comes with built-in AI functionality — just upload or capture a waste image and the Nemotron AI pipeline will analyze it automatically. No setup required!

## ✨ Features

* **AI Waste Classifier (Nemotron Pipeline)**: Uses device cameras or image uploads to scan waste items. It automatically identifies the material and categorizes it using a powerful two-step vision/text AI pipeline.
* **Smart IoT Bin Monitoring**: Real-time visual monitoring of bin capacities with predictive algorithms based on AI classifications.
* **Environmental Impact Tracking**: Automatically calculates toxicity levels, recyclability scores, and estimated CO2 emissions saved from proper segregation.
* **Presentation Mode**: Built-in cinematic presentation system for seminar demonstrations.
* **Secure API Key Handling**: API key is injected at deploy time via GitHub Actions CI/CD — never committed to source code.

## 🛠️ Technology Stack

* **Frontend**: Vanilla JS, HTML5, TailwindCSS, Chart.js, Lucide Icons
* **AI Provider**: OpenRouter API (called directly from client)
* **AI Models**: `meta-llama/llama-3.2-11b-vision-instruct` (Vision) & `nvidia/llama-3.1-nemotron-70b-instruct` (Text Analysis)
* **Deployment**: GitHub Pages (static) with GitHub Actions CI/CD

## 💻 Running Locally

1. Clone this repository.
2. Copy `.env.example` to `.env.local` and add your [OpenRouter API key](https://openrouter.ai/keys).
3. Run `npm install` then `npm run dev`.
4. Open `LIVE_DASHBOARD.html` in your browser.

## 👨‍💻 Developed By

**Project Group Number: 2RGD0045**

**Team Members:**
1. **Satyam Kumar** (12322276)
2. **Abhinandan Sinha** (12303165)
3. **Abhishek** (12221244)
4. **Md Sufyan** (12220667)
5. **Aravind Kosuru** (12214743)

**Guided By:** Mr. Rakshit Bansal
