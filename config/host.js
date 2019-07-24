//node.js获取本机IP地址
const os = require('os');
const ifaces = os.networkInterfaces();
let localIp = '';
for (let dev in ifaces) {
  for (let j = 0; j < ifaces[dev].length; j++) {
    if (ifaces[dev][j].family === 'IPv4'&&ifaces[dev][j].address!=='127.0.0.1') {
      localIp=ifaces[dev][j].address
    }
  }
}
module.exports=localIp

