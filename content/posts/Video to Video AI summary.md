---
title: "Engineering Efficiency: Building a Video-to-Video AI Summariser on Legacy Hardware"
date: "2025-10-24"
excerpt: "Architecting a modular AI pipeline to compress hour-long lectures into 5-minute summaries using constrained, non-Tensor Core hardware."
tags: ["Arch Linux", "AI/ML", "Python", "FFmpeg", "GPU Optimization"]
---

## The Challenge

We live in an era of information overload. Whether it’s university lectures, security footage, or corporate town halls, valuable "signal" is often buried in hours of "noise." Manual summarisation is slow, cognitively draining, and unscalable. 

While text summarisation tools exist, they lose the visual context essential for learning and surveillance. The engineering challenge was not just to build an AI that could "watch" and "listen," but to make it generate a coherent *video* summary—and to do it all on 10-year-old legacy university hardware (Dual GTX 1080s) with no Tensor Cores and strict network restrictions. 

## The Vision

The goal was simple but ambitious: **92% time efficiency.** I wanted to build a pipeline that could ingest an hour-long video and autonomously output a 5-minute highlight reel that retained the narrative arc, key visual diagrams, and audio context—turning a 2-hour lecture into a consumable asset in minutes. 

## The Solution: A Three-Layer Architecture

To solve this, I designed a modular, three-layer "Video Understanding System". By decoupling the ingestion, reasoning, and rendering phases, I could optimize each layer independently for the limited hardware. 

### Layer 1: Ingestion & Feature Extraction

* **The "Eyes and Ears":** We used **OpenAI Whisper** for robust speech-to-text transcription and **FFmpeg** for visual feature extraction. 
* **Smart Chunking:** To handle VRAM limitations, the system splits long videos into manageable chunks, filtering out silence and static scenes before they ever hit the heavy AI models. 

### Layer 2: The AI Core (The Brain)

* **Multi-Modal Fusion:** This layer fuses the audio transcripts with visual data. I deployed **GPT-OSS** (swappable with Llama3) to semantically "understand" the content. 
* **Contextual Reasoning:** The system doesn't just cut randomly; it builds a metadata structure to ensure the summary flows logically rather than jumping disjointedly between topics. 

### Layer 3: Synthesis & Delivery

* **Rendering:** Using **LTXVideo** for synthesis, the system renders the final video summary. 
* **Orchestration:** The entire workflow is orchestrated via **ComfyUI**, allowing for visual node-based management of the pipeline. 

## The Engineering Journey: "Making it Scale"

The true success of this project wasn't just the AI—it was the infrastructure engineering required to make it run.

* **Fighting the Hardware:** The university server provided had 10-year-old GPUs (GTX 1080s) which lack modern AI Tensor Cores. To get modern models running, I had to manually pin Python dependencies, emulate Tensor operations, and optimize the **Arch Linux** kernel for minimal overhead. 
* **Network Workarounds:** Standard remote access ports were blocked by the campus firewall. I engineered a workaround using **FRP (Fast Reverse Proxy)** and SSH tunneling to ensure stable, remote access to the web GUIs and CLI without triggering security flags. 
* **Resilience:** I implemented custom Bash scripts and systemd services to monitor GPU thermals and auto-restart processes if the old hardware hanged, ensuring the pipeline could run unattended overnight. 

## Technologies Deployed

* **Infrastructure:** Arch Linux (Custom Optimized), HPE ProLiant Gen9, NVIDIA GTX 1080s 
* **AI & ML:** OpenAI Whisper, GPT-OSS/Llama3, LTXVideo, ComfyUI 
* **DevOps & Backend:** Python (Custom pinning), Docker, FFmpeg, NGINX, Tmux 
* **Networking:** FRP (Reverse Proxy), SSH Tunneling, WireGuard 

## Results

The final prototype achieved the **92% time efficiency** target.  We successfully demonstrated two prototypes: one proving feasibility on the legacy rig, and a second showing high-definition potential on modern H100 hardware. This project proved that with the right engineering rigor, you don't always need the most expensive hardware to build cutting-edge systems—you just need better architecture.