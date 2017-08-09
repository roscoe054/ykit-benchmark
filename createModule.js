var fs = require('fs-extra');
var path = require('path');

var reactSrcPath = './react/app';
for(var i = 0; i < 300; i ++) {
    fs.copySync(
        path.join(reactSrcPath, 'module.jsx'),
        path.join(reactSrcPath, `modules/module${i}.jsx`)
    )
}
