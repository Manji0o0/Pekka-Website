const { test, expect } = require('@playwright/test');

test('chatbot screenshot', async ({ page }) => {
  await page.goto('http://localhost:8000/chatbot_test.html', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/home/swebot/jules-scratch/verification/verification.png' });
});
