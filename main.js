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
//    name: 'title',
//    label: 'Links Block Title',
//    type: 'input',
//    private: false,
//    default: 'Links'
//  }, {
    name: 'link-1-text',
    label: 'Link 1 Text',
    type: 'input',
    private: false,
    default: ''
  }, {
    name: 'link-1-url',
    label: 'Link 1 URL',
    type: 'input',
    private: false,
    default: ''
  }, {
    name: 'link-2-text',
    label: 'Link 2 Text',
    type: 'input',
    private: false,
    default: ''
  }, {
    name: 'link-2-url',
    label: 'Link 2 URL',
    type: 'input',
    private: false,
    default: ''
  }, {
    name: 'link-3-text',
    label: 'Link 3 Text',
    type: 'input',
    private: false,
    default: ''
  }, {
    name: 'link-3-url',
    label: 'Link 3 URL',
    type: 'input',
    private: false,
    default: ''
  }, {
    name: 'link-4-text',
    label: 'Link 4 Text',
    type: 'input',
    private: false,
    default: ''
  }, {
    name: 'link-4-url',
    label: 'Link 4 URL',
    type: 'input',
    private: false,
    default: ''
  }, {
    name: 'link-5-text',
    label: 'Link 5 Text',
    type: 'input',
    private: false,
    default: ''
  }, {
    name: 'link-5-url',
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
