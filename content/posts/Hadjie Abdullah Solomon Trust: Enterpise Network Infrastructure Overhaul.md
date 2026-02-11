---
title: "Building Digital Resilience: A Multi-Year Infrastructure Overhaul for the Hadjie Abdullah Solomon Family Trust"
date: "2025-12-11"
excerpt: "From emergency power systems to self-hosted AI surveillance—engineering a scalable, fault-tolerant IT ecosystem that has delivered 99.9% uptime over three years."
tags: ["Network Architecture", "Synology NAS", "Docker/Frigate", "Power Systems", "Debian Linux"]
---

## The Vision

Digital infrastructure is the silent backbone of any organization. When it works, it is invisible; when it fails, operations grind to a halt. The Hadjie Abdullah Solomon Family Trust (HAS Trust) required a network architecture that moved beyond basic connectivity to offer guaranteed resilience, security, and scalability. Facing the complexities of managing mixed-vendor environments and critical server uptime, the goal was clear: design a system where hardware and software constraints no longer dictated performance. This report outlines the engineering decisions behind deploying a robust ecosystem designed for 99.9% reliability.

## The Challenge: Growing Pains

This project wasn't a single ticket fix; it was a multi-year partnership. Initially, the Trust struggled with the instability caused by South Africa's volatile power grid (load shedding), which threatened data integrity and physical security. As their operations grew, so did their digital footprint—resulting in fragmented data storage, unmanaged endpoints, and blind spots in their physical security.

## The Solution: An Evolving Ecosystem

Over a three-year period, I architected a phased modernization plan that prioritized **uptime, data sovereignty, and security.**

### 1. Power & Physical Resilience (Phase 1)

Before we could protect the data, we had to keep the lights on.

* **Emergency Power:** I designed and installed a distributed DC-DC backup solution. By fabricating custom power rails and calibrating voltage regulators, we interfaced standard network equipment with high-capacity EcoFlow DC outputs.
* **Outcome:** This ensured the core network and emergency lighting remained operational during extended grid failures, preventing hard shutdowns of critical servers.

### 2. Data Sovereignty & Disaster Recovery (Phase 2)

Data loss was a critical risk. Relying on individual laptop hard drives was a single point of failure.

* **Centralized Storage:** I deployed a **Synology NAS** architecture to act as a private cloud.
* **Automated Backups:** We configured automated, background backups for all fleet laptops and workstations.
* **Proven Reliability:** This system has been running continuously for three years. It has successfully rescued critical operational data on multiple occasions where endpoints failed, turning potential disasters into minor inconveniences.

### 3. Advanced Security & Surveillance (Phase 3)

The Trust needed a discreet but powerful security solution without the recurring costs of cloud NVRs.

* **Edge Computing:** I utilized **Raspberry Pi** units as discreet, network-attached IP cameras.
* **AI-Powered NVR:** Instead of standard recording software, I deployed a headless **Debian server running Docker**. Inside, we orchestrated **Frigate**, an open-source NVR with real-time object detection.
* **Remote Access:** To allow secure monitoring from off-site, I configured **WireGuard** VPN tunnels, ensuring encrypted access without exposing ports to the open web.

### 4. Continuous IT Operations (Ongoing)

Beyond the architecture, a healthy network require maintenance.

* **Endpoint Management:** Regular maintenance of Windows user accounts and firewall policies to ensure visibility and security.
* **Hardware Repair:** Component-level repairs on fleet laptops (screen and keyboard replacements) to extend hardware lifecycles and reduce e-waste.
* **Network Expansion:** continuous upgrades to Mikrotik routers and TP-Link access points, routing permanent cabling through masonry to ensure robust signal coverage across the complex.

## Technologies Deployed

* **Server/Virt:** Debian Linux (Headless), Docker, Frigate NVR.
* **Network:** Mikrotik Routers, TP-Link APs, WireGuard VPN.
* **Storage:** Synology NAS (RAID configuration).
* **Hardware:** Raspberry Pi (Edge Cam), Custom DC-DC Power Rails.

## The Results

What started as an emergency lighting project evolved into a sophisticated IT environment. The custom NVR and NAS solutions have maintained **100% uptime** since deployment three years ago. By moving away from off-the-shelf, subscription-based products to engineered, self-hosted Linux solutions, the HAS Trust now owns a secure, resilient infrastructure that scales with their needs—proof that open-source engineering can outperform proprietary legacy systems.
