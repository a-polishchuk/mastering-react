# Upgrade Minor Dependencies

## Overview

Upgrade minor project dependencies to their latest versions without breaking changes. This command ensures all dependencies are updated, installed, and the project builds and runs successfully.

## Steps

1. **Check current dependencies**
    - Review package.json for outdated dependencies
    - Identify minor version updates available
    - Note any major version changes that should be skipped

2. **Update dependencies**
    - Run `npm update` to update minor versions
    - Use `npm outdated` to check for available updates
    - Update specific packages if needed with `npm install package@latest`

3. **Install dependencies**
    - Run `npm install` to ensure all dependencies are properly installed
    - Verify no dependency conflicts exist
    - Check for any peer dependency warnings

4. **Build project**
    - Run `npm run build` to ensure project builds successfully
    - Fix any build errors if they occur
    - Verify TypeScript compilation passes

5. **Test project functionality**
    - Start development server with `npm run dev`
    - Open project in Cursor Browser
    - Navigate through main sections to verify functionality
    - Check for console errors or runtime issues
    - Test key features and interactions

## Commands

```bash
# Check for outdated dependencies
npm outdated

# Update minor versions
npm update

# Install dependencies
npm install

# Build project
npm run build

# Start development server
npm run dev
```

## Verification Checklist

- [ ] All dependencies updated to latest minor versions
- [ ] No major version changes that could break code
- [ ] `npm install` completes without errors
- [ ] `npm run build` succeeds
- [ ] Development server starts without errors
- [ ] Project loads in browser without console errors
- [ ] Main functionality works as expected
- [ ] No runtime errors or broken features
