/* eslint global-require: "off" */
import { configure } from '@kadira/storybook';

const reqireStories = require.context('../src', true, /.stories.js$/);

function loadStories() {
  require('./decorators');

  reqireStories.keys().forEach(filename => reqireStories(filename));
}

configure(loadStories, module);
