---
title: "Optimizing GPU Resources on Arch Linux"
date: "2025-10-28"
excerpt: "A deep dive into configuring CUDA and managing GPU resources for high-performance computing tasks on Arch Linux."
tags: ["Linux", "GPU", "Performance", "Arch"]
---

## Introduction

When building high-performance computing systems, specifically for AI video synthesis, efficient resource management is critical. In this post, I'll share how I optimized GPU usage on an Arch Linux environment for my capstone project.

## The Challenge

Running a 3-layer AI system requires significant VRAM and compute capability. Standard drivers often come with bloat or suboptimal configurations for specific workloads.

![Network Topology Diagram](/images/network-diagram.svg)

## The Solution: Custom CUDA Configuration

Arch Linux allows for granular control over system packages. By manually configuring the NVIDIA drivers and CUDA toolkit, we can strip away unnecessary background processes.

```bash
# Example of checking GPU status
nvidia-smi
```

### Key Steps

1. **Kernel Selection**: Using the `linux-zen` kernel for better desktop responsiveness and lower latency.
2. **Driver Installation**: Installing `nvidia-dkms` to ensure compatibility with custom kernels.
3. **CUDA Toolkit**: Setting up the environment variables correctly in `.bashrc`.

## Results

After these optimizations, I observed a **15% increase** in inference speed and more stable VRAM usage during prolonged rendering sessions.

## Conclusion

Engineering isn't just about writing code; it's about understanding the hardware constraints and architecting the software to work harmoniously within them.
