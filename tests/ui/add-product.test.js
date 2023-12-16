const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page }) => {
    await page.goto('https://skirov992-exam.onrender.com/add-product');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  