# m-preview

> M-preview is a plugin for previewing mobile webpage on a large screen.

## Install

    npm install --save m-preview

## Usage

### Broswer
    <script src="dist/m-preview.js"></script>

### UMD
    var mPreview = require('m-preview');

### ES6
	import mPreview from 'm-preview'

----------

    mPreview({
        message: '建议使用手机访问此页面, 或访问此页面的<a href="#">电脑版</a>',
        threshold: 800
    });

## License

MIT © [HeChanglin](mailto://907953320@qq.com)