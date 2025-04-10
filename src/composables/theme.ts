import { type ColorMode, type Theme } from "@/enums/theme";
import { createGlobalState, useColorMode } from "@vueuse/core";
import { computed } from "vue";

export const useTheme = createGlobalState((initialTheme?: Theme) => {
    const { system, store } = useColorMode();
    if (initialTheme) {
        store.value = initialTheme;
    }
    const theme = computed(() => {
        if (store.value === "auto") {
            return system.value as ColorMode;
        } else {
            return store.value as ColorMode;
        }
    });
    setTheme(theme.value);

    const isLight = computed(() => theme.value === "light");
    const isDark = computed(() => theme.value === "dark");

    function setTheme(newTheme: Theme) {
        store.value = newTheme;
    }

    function toggleTheme() {
        if (isLight.value) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return {
        theme,
        isLight,
        isDark,
        setTheme,
        toggleTheme,
    };
});
