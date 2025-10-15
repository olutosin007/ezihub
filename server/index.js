const express = require('express');
const path = require('path');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const app = express();

const DATA_DIR = path.join(__dirname, '../data');
const DB_FILE = path.join(DATA_DIR, 'ezihub_leads.sqlite');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
const db = new sqlite3.Database(DB_FILE);

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    email TEXT NOT NULL,
    company TEXT,
    roleOrInterest TEXT,
    message TEXT,
    source TEXT,
    createdAt TEXT NOT NULL
  )`);
});

app.use(express.json());

app.post('/api/leads', (req, res) => {
  const { firstName, lastName, email, company, roleOrInterest, message, source } = req.body || {};
  if (!firstName || !email) return res.status(400).json({ error: 'firstName and email are required' });
  const createdAt = new Date().toISOString();
  db.run(
    `INSERT INTO leads (firstName, lastName, email, company, roleOrInterest, message, source, createdAt)
     VALUES (?,?,?,?,?,?,?,?)`,
    [firstName, lastName||'', email, company||'', roleOrInterest||'', message||'', source||'unknown', createdAt],
    function (err) {
      if (err) return res.status(500).json({ error: 'db_error' });
      res.json({ id: this.lastID, createdAt });
    }
  );
});

app.get('/admin/leads', (req, res) => {
  db.all(`SELECT id, firstName, lastName, email, company, roleOrInterest, source, createdAt FROM leads ORDER BY id DESC LIMIT 500`, [], (err, rows) => {
    if (err) return res.status(500).send('db_error');
    const html = `<!doctype html><html><head><meta charset="utf-8"><title>EziHub Leads</title>
    <style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;padding:24px;background:#0f315b;color:#fff}table{width:100%;border-collapse:collapse}th,td{padding:8px;border-bottom:1px solid #21466f}th{text-align:left}caption{margin-bottom:12px;font-weight:700}</style></head>
    <body><h1>Leads</h1><table><thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Company</th><th>Role</th><th>Source</th><th>Created</th></tr></thead><tbody>
    ${rows.map(r=>`<tr><td>${r.id}</td><td>${(r.firstName||'')+' '+(r.lastName||'')}</td><td>${r.email}</td><td>${r.company||''}</td><td>${r.roleOrInterest||''}</td><td>${r.source||''}</td><td>${r.createdAt}</td></tr>`).join('')}
    </tbody></table></body></html>`;
    res.send(html);
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Lead capture server running on :${PORT}`));


