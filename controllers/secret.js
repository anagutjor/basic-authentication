const Secret = require('../models/secretModel');

module.exports = {
    async saveSecret(secret) {
        await Secret.findOne(secret, (err, secretFound) => {
            if (!err && !secretFound) {
                Secret.create(secret, err => {
                    if (!err) {
                        console.log('secret successfully submitted');
                    }
                });
            } else if (err) {
                console.error(err);
            } else {
                console.log('Secret already exists');
            }
        })
    },

    async getSecrets() {
        var secrets;
        await Secret.find({}, (err, secretsFound) => {
            if (!err) {
                secrets = secretsFound;
            }
        });
        return secrets;
    },

    async deleteSecret(secret) {
        await Secret.deleteOne({secret: secret}, (err) => {
            if (err) { console.error(err) };
        })
    }
}