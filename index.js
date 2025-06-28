const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Replace this with your real TVL calculation or data
const tvlData = {
  tvl: 12345.67
};

app.get('/api/tvl', (req, res) => {
  res.json(tvlData);
});

app.listen(port, () => {
  console.log(`TVL API running on port ${port}`);
});
