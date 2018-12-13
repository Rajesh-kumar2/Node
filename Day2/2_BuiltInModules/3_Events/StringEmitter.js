const EventEmitter = require('events');

class StringEmitter extends EventEmitter {
    constructor() {
        super();
        this.run();
    }

    run() {
        setInterval(() => {
            const strArr = ['NodeJS', 'ReactJS', 'Angular', 'ExtJS', 'jQuery'];
            var str = strArr[Math.floor(Math.random() * strArr.length)];
            this.emit('data', str);
        }, 2000);
    }

    getStringWithCB(cb) {
        setInterval(function () {
            const strArr = ['NodeJS', 'ReactJS', 'Angular', 'ExtJS', 'jQuery'];
            var str = strArr[Math.floor(Math.random() * strArr.length)];
            cb(str);
        }, 2000);
    }

    getString() {
        const strArr = ['NodeJS', 'ReactJS', 'Angular', 'ExtJS', 'jQuery'];
        var str = strArr[Math.floor(Math.random() * strArr.length)];
        return str;
    }
}

module.exports = StringEmitter;