module.exports.onWindow = browserWindow => browserWindow.setVibrancy('appearance-based');

module.exports.decorateConfig = config => {
  config.backgroundColor = 'rgba(30,30,30,.6)';
  return config;
}
