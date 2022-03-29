'use strict';
require('dotenv').config();
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
const projectId = "my-project-66993-cx2";
const displayName = "test-agent";
async function main() {
  // [START dialogflow_set_agent_sample]
  const parent = 'projects/' + projectId + '/locations/global';
  const api_endpoint = 'global-dialogflow.googleapis.com';
  const agent = {
    displayName: displayName,
    defaultLanguageCode: 'en',
    timeZone: 'America/Los_Angeles',
  };
  const {AgentsClient} = require('@google-cloud/dialogflow-cx');
  const client = new AgentsClient({apiEndpoint: api_endpoint});
  async function setAgentSample() {
    const request = {
      agent,
      parent,
    };
    const [response] = await client.createAgent(request);
    console.log(`response: ${JSON.stringify(response, null, 2)}`);
  }
  await setAgentSample();
  // [END dialogflow_set_agent_sample]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main();