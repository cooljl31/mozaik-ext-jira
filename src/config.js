var convict = require('convict');

var config = convict({
    jira: {
        baseUrl: {
            doc:    'The sonar API base url.',
            default: null,
            format: String,
            env: 'JIRA_BASE_URL'
        },
        basicAuth: {
            doc:    "Encoded auth creds",
            default: null,
            format: String,
            env: 'JIRA_BASIC_AUTH_TOKEN'
        }
    }
});

module.exports = config;
