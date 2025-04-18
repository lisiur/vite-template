import { nextTick } from "vue";
import { createI18n } from "vue-i18n";
import type { MessageSchema } from "./schema";

const modules = import.meta.glob("./locales/*.ts", {
    import: "default",
});

export const i18n = createI18n({
    legacy: false,
});

export async function setLocale(locale: string) {
    await loadLocaleMessages(locale);
    i18n.global.locale.value = locale;
}

export async function loadLocaleMessages(locale: string) {
    const message: any = await modules[`./locales/${locale}.ts`]();
    i18n.global.setLocaleMessage(locale, message);
    return nextTick();
}

export function toggleLocale() {
    const current = i18n.global.locale.value;
    if (current === "en_US") {
        setLocale("zh_CN");
    } else {
        setLocale("en_US");
    }
}

export function declareLocale(messages: MessageSchema) {
    return messages;
}
