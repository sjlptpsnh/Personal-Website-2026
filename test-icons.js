const fs = require('fs');
const content = fs.readFileSync('src/app/FloatingIcons.jsx', 'utf8');
console.log(content.includes('visibility: \'hidden\''));
