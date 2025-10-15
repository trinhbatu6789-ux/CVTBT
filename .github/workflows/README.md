# GitHub Actions Workflows

This repository contains several GitHub Actions workflows to automate CI/CD processes.

## 🔄 Workflows Overview

### 1. CI/CD Pipeline (`ci-cd.yml`)

**Triggers:** Push to main/master, Pull Requests

**Features:**

- ✅ Multi-Node.js version testing (18.x, 20.x)
- 🔍 Code linting and formatting checks
- 🏗️ Build verification
- 📦 Artifact upload for build files
- 🚀 Automatic deployment to GitHub Pages (main/master only)

### 2. Manual Deploy (`deploy.yml`)

**Triggers:** Manual workflow dispatch, Git tags (v\*)

**Features:**

- 🎯 Environment selection (production/staging)
- 🏷️ Tag-based deployments
- 🌐 GitHub Pages deployment
- 🔧 Custom domain support

### 3. Pull Request Check (`pr-check.yml`)

**Triggers:** Pull Request events

**Features:**

- 🔍 Comprehensive PR validation
- 💬 Automatic PR comments with results
- ✅ Status reporting
- 🚫 Prevents merging of broken code

## 🚀 Quick Start

### For Contributors

1. Create a feature branch
2. Make your changes
3. Create a Pull Request
4. The PR check workflow will automatically validate your code
5. Once approved and merged, the CI/CD pipeline will deploy to GitHub Pages

### For Maintainers

- Use manual deploy workflow for production releases
- Monitor workflow runs in the Actions tab
- Configure GitHub Pages settings in repository settings

## ⚙️ Configuration

### Required Secrets

- `GITHUB_TOKEN` (automatically provided)
- `CUSTOM_DOMAIN` (optional, for custom domain setup)

### GitHub Pages Setup

1. Go to repository Settings
2. Navigate to Pages section
3. Set Source to "GitHub Actions"
4. The workflows will automatically deploy to GitHub Pages

## 🔧 Customization

### Adding New Checks

Edit the workflow files to add:

- Unit tests
- Integration tests
- Security scans
- Performance tests

### Environment Variables

Add environment-specific variables in workflow files or repository secrets.

## 📊 Workflow Status

All workflows include comprehensive status reporting and artifact management for easy debugging and deployment tracking.
