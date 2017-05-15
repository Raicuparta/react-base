import { observable, action } from 'mobx'
import { create, persist } from 'mobx-persist'

import i18n from '../i18n'

class LanguageStore {
  DEFAULT_LANG = 'en'
  @persist @observable lang = this.DEFAULT_LANG

  @action setLang = (lang) => this.lang = lang

  // Pass the list of hierarchy items for the text you want, and
  // this gives you that text in the current language.
  // text('home', 'title') is the same as i18n[this.lang].home.title.
  text = (...keys) => {
    let text = this.textFromLang(this.lang, ...keys)
    // If the text we're looking for isn't in the currently selected language,
    // we fallback to the default language.
    if (!text) text = this.textFromLang(this.DEFAULT_LANG, ...keys)
    // If we still don't find it, we print the requested text key and log a warning
    if (!text) {
      text = ('' + keys).replace(',', '.')
      console.warn('Text for "' + text + '" not found in current or default languages.')
    }
    return text
  }

  textFromLang = (lang, ...keys) => {
    let text
    try {
      text = i18n[lang]
      keys.map((key) => text = text[key])
    } finally {
      return text
    }
  }

  language(code) {
    let lang = code || this.lang
    switch (lang) {
      case 'en': return 'English'
      case 'pt': return 'Português'
      default: return 'Unsupported language'
    }
  }
}

const hydrate = create()
const languageStore = new LanguageStore()
hydrate('global', languageStore)

export default languageStore
export { LanguageStore }
