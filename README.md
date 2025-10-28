#  Digital Portfolio - Karan Arora

[![Deploy Status](https://github.com/karannarora/digital-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/karannarora/digital-portfolio/actions/workflows/deploy.yml)

Welcome to my **Digital Portfolio Project**!  
This is a personal resume website built using **HTML, CSS, and JavaScript**,  
and deployed for free using **GitHub Pages**.  
The project is also **containerized using Docker** for local development and testing.

---

##  Project Overview

- **Frontend:** HTML, CSS, JavaScript  
- **Containerization:** Docker  
- **Deployment Platform:** GitHub Pages (Free Hosting)  
- **CI/CD Automation:** GitHub Actions  
- **IDE Used:** VS Code / Any text editor  

---

## Live Demo

👉 **Visit Here:** [https://karannarora.github.io/digital-portfolio/](https://karannarora.github.io/digital-portfolio/)

---

## Run Locally with Docker

If you want to test this project on your own machine:

```bash
# Clone the repository
git clone https://github.com/karannarora/digital-portfolio.git

# Move into the project folder
cd digital-portfolio

# Build the Docker image
docker build -t digital-portfolio .

# Run the container
docker run -d -p 8789:80 digital-portfolio
