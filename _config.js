var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://Peter1:Mongo@123@dev-ip1.zpsrc3l.mongodb.net/?retryWrites=true&w=majority',
    development: 'mongodb+srv://Peter1:Mongo@123@dev-ip1.zpsrc3l.mongodb.net/?retryWrites=true&w=majority',
    test: 'mongodb+srv://Peter1:Mongo@123@dev-ip1.zpsrc3l.mongodb.net/?retryWrites=true&w=majority'
}
module.exports = config;
