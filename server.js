const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/plus', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'plus.html'));
});

app.get('/search', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'search.html'));
});

app.get('/me', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'me.html'));
});

app.get('/group', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'group.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
