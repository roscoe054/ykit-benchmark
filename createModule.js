var fs = require('fs-extra');
var path = require('path');

const demoName = 'demo2';
const viewNum = 10;

for(var i = 1; i <= viewNum; i++) {
    var modulePath = `./${demoName}/app/view${i}/modules`;

    for(var j = 0; j < 50; j ++) {
        fs.copySync(
            path.join('./module.jsx'),
            path.join(modulePath, `module${j}.jsx`)
        )
    }
}
