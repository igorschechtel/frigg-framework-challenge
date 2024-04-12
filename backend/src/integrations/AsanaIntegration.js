const { IntegrationBase, Options } = require('@friggframework/core');
const { Definition: AsanaModule } = require('@friggframework/api-module-asana');
const _ = require('lodash');

class AsanaIntegration extends IntegrationBase {
    static Config = {
        name: 'asana',
        version: '1.0.0',
        supportedVersions: ['1.0.0'],
        events: ['GET_USER_DETAILS'],
    };

    static Options =
        new Options({
            module: AsanaModule,
            integrations: [AsanaModule],
            display: {
                name: 'Asana',
                description: 'Project Planning',
                category: 'Project Planning',
                detailsUrl: 'https://app.asana.com/',
                icon: 'https://logosandtypes.com/wp-content/uploads/2020/11/Asana.png',
            }
        });

    static display =  {
        name: 'Asana',
        description: 'Project Planning',
        category: 'Project Planning',
        detailsUrl: 'https://asana.app',
        icon: 'https://logosandtypes.com/wp-content/uploads/2020/11/Asana.png',
    }

    static modules = {
        asana: AsanaModule
    }

    /**
     * HANDLE EVENTS
     */
    async receiveNotification(notifier, event, object = null) {
        if (event === 'GET_USER_DETAILS') {
            return this.target.api.getUserDetails();
        }
    }

    /**
     * ALL CUSTOM/OPTIONAL METHODS FOR AN INTEGRATION
     */
    async getSampleData() {
				const [workspaces, user] = await Promise.all([
					this.target.api.listWorkspaces(),
					this.target.api.getUserDetails(),
				]);
				const workspaceId = workspaces.data[0].gid;
				const assigneeId = user.sub;
        return this.target.api.listTasks({workspaceId, assigneeId});

    }
}

module.exports = AsanaIntegration;
