import { createI18n } from "vue3-i18n"
import en from '../lang/en'
import ru from '../lang/ru'
import ua from '../lang/ua'

const messages = { en, ru, ua }

export const i18n = createI18n({
    locale: "en",
    messages: messages,
})