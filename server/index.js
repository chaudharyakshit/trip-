import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Placeholder search endpoint
app.post('/api/search', (req, res) => {
  const { destination, checkin, checkout, guests } = req.body || {};
  // TODO: Integrate with real booking/search service
  res.json({
    ok: true,
    received: { destination, checkin, checkout, guests },
    message: 'Search endpoint not yet connected to a provider.'
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
