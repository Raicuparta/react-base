import { observable, action } from 'mobx'
import { create, persist } from 'mobx-persist'

import i18n from '../i18n'

class GlobalStore {
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
}

const hydrate = create()
const globalStore = new GlobalStore()
hydrate('global', globalStore)

export default globalStore
export { GlobalStore }