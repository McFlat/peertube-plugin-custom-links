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
    name: 'title',
    label: 'Links Block Title',
    type: 'input',
    private: false,
    default: 'Links'
  }, {
    name: 'link_1_text',
    label: 'Link 1 Text',
    type: 'input',
    private: false,
    default: ''
  }, {
    name: 'link_1_url',
    label: 'Link 1 URL',
    type: 'input',
    private: false,
    default: ''
  }, {
    name: 'link_2_text',
    label: 'Link 2 Text',
    type: 'input',
    private: false,
    default: ''
  }, {
    name: 'link_2_url',
    label: 'Link 2 URL',
    type: 'input',
    private: false,
    default: ''
  }, {
    name: 'link_3_text',
    label: 'Link 3 Text',
    type: 'input',
    private: false,
    default: ''
  }, {
    name: 'link_3_url',
    label: 'Link 3 URL',
    type: 'input',
    private: false,
    default: ''
  }, {
    name: 'link_4_text',
    label: 'Link 4 Text',
    type: 'input',
    private: false,
    default: ''
  }, {
    name: 'link_4_url',
    label: 'Link 4 URL',
    type: 'input',
    private: false,
    default: ''
  }, {
    name: 'link_5_text',
    label: 'Link 5 Text',
    type: 'input',
    private: false,
    default: ''
  }, {
    name: 'link_5_url',
    label: 'Link 5 URL',
    type: 'input',
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
