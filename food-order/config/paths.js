const path = require('path');
const paths = {
    src:path.join(__dirname,'../src'),
    //for production
    build:path.join(__dirname,'../dist'),
    //for development
    public:path.join(__dirname,'../public')
};
module.exports = paths;