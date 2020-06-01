async function register ({
  registerHook,
  registerSetting,
  settingsManager,
  storageManager,
  videoCategoryManager,
  videoLicenceManager,
  videoLanguageManager
}) {
  registerSetting({
    name: 'custom_links_markdown',
    label: 'Custom Links Markdown',
    type: 'markdown-enhanced',
    private: false,
    default: ''
  })
}

async function unregister () {
  return
}

module.exports = {
  register,
  unregister
}
