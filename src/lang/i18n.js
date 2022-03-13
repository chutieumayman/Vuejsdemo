import { createI18n } from 'vue-i18n'
import enMessage from './en.json';
import vnMessage from './vn.json';
const messages = {
    vn: vnMessage,
    en: enMessage,
    //khai báo thêm ngôn ngữ
}
const i18n = createI18n({
    locale: (localStorage.getItem('lang') || 'vn'), // set locale
    messages,
    fallbackLocale: 'vn',
})

export default i18n;