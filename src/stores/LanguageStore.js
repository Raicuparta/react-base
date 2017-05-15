import { observable, action } from 'mobx'
import { create, persist } from 'mobx-persist'

import i18n from '../i18n'

class LanguageStore {
  @persist @observable lang = 'en'

  @action setLang = (lang) => this.lang = lang

  // Pass the list hierarchy items for the text you want,
  // and this gives you that text in the current language
  text(...keys) {
    let text = i18n[this.lang]
    //debugger
    keys.map((key) => text = text[key])
    return text
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