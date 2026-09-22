import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve static files from Vite build output
app.use(express.static(path.join(__dirname, 'dist')));

// API Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    service: 'PDAM Tirta Digital API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Single-Page Application (SPA) catch-all handler for client routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`💧 PDAM Tirta Digital Server running on http://localhost:${PORT}`);
});
