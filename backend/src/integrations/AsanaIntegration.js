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
                icon: 'https://friggframework.org/assets/img/asana-company-icon.svg',
            }
        });

    static display =  {
        name: 'Asana',
        description: 'Project Planning',
        category: 'Project Planning',
        detailsUrl: 'https://asana.app',
        icon: 'https://friggframework.org/assets/img/asana-company-icon.svg',
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
				console.log('workspaces', JSON.stringify(workspaces, null, 2))
				console.log('user', JSON.stringify(user, null, 2))
				const workspaceId = workspaces.data[0].gid;
				const assigneeId = user.sub;
        const tasks = await this.target.api.listTasks(workspaceId, assigneeId);
        console.log(tasks)
        return tasks

    }
}

module.exports = AsanaIntegration;
