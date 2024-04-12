const { createFriggBackend } = require('@friggframework/core');
const HubSpotIntegration = require('./src/integrations/HubSpotIntegration');
const LinearIntegration = require('./src/integrations/LinearIntegration');
const AsanaIntegration = require('./src/integrations/AsanaIntegration');

const appDefinition = {
    integrations:[
        LinearIntegration,
        HubSpotIntegration,
				AsanaIntegration
    ],
    user: {
        password: true
    }
}
const backend = createFriggBackend(appDefinition);
module.exports = {...backend}
