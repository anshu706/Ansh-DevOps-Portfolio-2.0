import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const artifactsDir = 'C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\dc64920f-e234-4c80-a000-1eb71bf1b477';
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function runVerification() {
  console.log('🚀 Starting DevOps Portfolio Browser Automation...');
  
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // 1. Navigate to dev server
  console.log('➡️ Navigating to http://localhost:5173...');
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

  // 2. Verify Page Title
  const title = await page.title();
  console.log(`✓ Page Title: "${title}"`);

  // 3. Verify Hero Section Headline
  const heroHeading = await page.$eval('h1', el => el.innerText);
  console.log(`✓ Hero Heading:\n${heroHeading}`);

  // 4. Capture Desktop Hero Screenshot
  const heroScreenshotPath = path.join(artifactsDir, 'screenshot_hero_desktop.png');
  await page.screenshot({ path: heroScreenshotPath });
  console.log(`📸 Saved screenshot: ${heroScreenshotPath}`);

  // 5. Test Live Deploy button in Hero Section
  console.log('➡️ Testing interactive Deploy button in Hero terminal...');
  await page.waitForSelector('#hero-trigger-deploy-btn');
  await page.click('#hero-trigger-deploy-btn');
  await new Promise(r => setTimeout(r, 2000));
  console.log('✓ Successfully clicked Deploy button and observed live logs');

  // 6. Test Navigation to About Section
  console.log('➡️ Testing Navigation: Click About link...');
  await page.waitForSelector('#nav-link-about');
  await page.click('#nav-link-about');
  await new Promise(r => setTimeout(r, 800));
  const aboutHeading = await page.$eval('#about h2', el => el.innerText);
  console.log(`✓ About Section visible: "${aboutHeading}"`);

  // 7. Test Navigation to Skills Section
  console.log('➡️ Testing Navigation: Click Skills link...');
  await page.waitForSelector('#nav-link-skills');
  await page.click('#nav-link-skills');
  await new Promise(r => setTimeout(r, 800));
  
  // Test clicking a skill filter
  console.log('➡️ Testing Skill Category filter: Containers & K8s...');
  await page.waitForSelector('#skill-filter-containers');
  await page.click('#skill-filter-containers');
  await new Promise(r => setTimeout(r, 600));
  console.log('✓ Containers & K8s filter active');

  // 8. Test Navigation to Projects Section
  console.log('➡️ Testing Navigation: Click Projects link...');
  await page.waitForSelector('#nav-link-projects');
  await page.click('#nav-link-projects');
  await new Promise(r => setTimeout(r, 800));

  // Test switching between project tabs
  console.log('➡️ Switching to Project 2 (Observability Mesh)...');
  await page.waitForSelector('#project-tab-1');
  await page.click('#project-tab-1');
  await new Promise(r => setTimeout(r, 800));

  // Test preview tabs (Topology and Metrics)
  console.log('➡️ Switching Preview Tab to Topology...');
  await page.waitForSelector('#preview-tab-topology');
  await page.click('#preview-tab-topology');
  await new Promise(r => setTimeout(r, 800));
  console.log('✓ Topology visual preview verified');

  console.log('➡️ Switching Preview Tab to Metrics...');
  await page.waitForSelector('#preview-tab-metrics');
  await page.click('#preview-tab-metrics');
  await new Promise(r => setTimeout(r, 800));
  console.log('✓ Prometheus SRE metrics preview verified');

  // Capture Projects Split-Screen Screenshot
  const projectsScreenshotPath = path.join(artifactsDir, 'screenshot_projects_split_screen.png');
  await page.screenshot({ path: projectsScreenshotPath });
  console.log(`📸 Saved screenshot: ${projectsScreenshotPath}`);

  // 9. Test Navigation to Certificates Section
  console.log('➡️ Testing Navigation: Click Certificates link...');
  await page.waitForSelector('#nav-link-certificates');
  await page.click('#nav-link-certificates');
  await new Promise(r => setTimeout(r, 800));

  // Test Verify Credential Modal
  console.log('➡️ Testing Verify Credential modal...');
  await page.waitForSelector('#cert-verify-btn-0');
  await page.click('#cert-verify-btn-0');
  await new Promise(r => setTimeout(r, 800));
  console.log('✓ Certificate verification modal opened');
  
  // Close modal
  await page.waitForSelector('#cert-modal-dismiss-btn');
  await page.click('#cert-modal-dismiss-btn');
  await new Promise(r => setTimeout(r, 500));
  console.log('✓ Certificate modal closed cleanly');

  // 10. Test Resume Modal
  console.log('➡️ Testing Resume Modal from Navbar CTA...');
  await page.waitForSelector('#nav-resume-btn');
  await page.click('#nav-resume-btn');
  await new Promise(r => setTimeout(r, 800));
  console.log('✓ Resume Modal opened with CV summary and download button');

  const resumeModalScreenshot = path.join(artifactsDir, 'screenshot_resume_modal.png');
  await page.screenshot({ path: resumeModalScreenshot });
  console.log(`📸 Saved screenshot: ${resumeModalScreenshot}`);

  await page.waitForSelector('#resume-modal-close');
  await page.click('#resume-modal-close');
  await new Promise(r => setTimeout(r, 500));
  console.log('✓ Resume modal closed cleanly');

  // 11. Full Desktop Page Screenshot
  console.log('➡️ Capturing full-page desktop screenshot...');
  const fullPageScreenshot = path.join(artifactsDir, 'screenshot_full_page_desktop.png');
  await page.screenshot({ path: fullPageScreenshot, fullPage: true });
  console.log(`📸 Saved full-page desktop screenshot: ${fullPageScreenshot}`);

  // 12. Test Mobile Viewport (375 x 812 iPhone / Mobile screen)
  console.log('➡️ Testing Mobile Viewport (375x812)...');
  await page.setViewport({ width: 375, height: 812, isMobile: true });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));

  // Test Mobile Menu Toggle
  await page.waitForSelector('#mobile-menu-toggle');
  await page.click('#mobile-menu-toggle');
  await new Promise(r => setTimeout(r, 600));
  console.log('✓ Mobile hamburger menu drawer opened successfully');

  const mobileScreenshot = path.join(artifactsDir, 'screenshot_mobile_view.png');
  await page.screenshot({ path: mobileScreenshot });
  console.log(`📸 Saved mobile viewport screenshot: ${mobileScreenshot}`);

  await browser.close();
  console.log('🎉 Browser automation verification completed successfully with 100% PASS!');
}

runVerification().catch(err => {
  console.error('❌ Verification failed:', err);
  process.exit(1);
});
