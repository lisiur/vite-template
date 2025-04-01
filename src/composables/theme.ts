import { type Theme } from "@/enums/theme";
import { createGlobalState, useColorMode } from "@vueuse/core";
import { computed } from "vue";

export const useTheme = createGlobalState((initialTheme?: Theme) => {
    const { system, store } = useColorMode();
    if (initialTheme) {
        store.value = initialTheme;
    }
    const theme = computed(() => {
        if (store.value === "auto") {
            return system.value as Theme;
        } else {
            return store.value as Theme;
        }
    });
    setTheme(theme.value);

    function setTheme(newTheme: Theme) {
        store.value = newTheme;
        document.documentElement.setAttribute("data-theme", theme.value);
    }

    return {
        theme,
        setTheme,
    };
});
