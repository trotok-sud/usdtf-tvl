const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/tvl', (req, res) => {
  try {
    const tvlFilePath = path.join(__dirname, 'tvl.json');
    const tvlData = JSON.parse(fs.readFileSync(tvlFilePath, 'utf8'));
    res.json(tvlData);
  } catch (err) {
    console.error('Error reading TVL data:', err);
    res.status(500).json({ error: 'Failed to load TVL data' });
  }
});

app.listen(port, () => {
  console.log(`TVL API running on port ${port}`);
});
