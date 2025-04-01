import { defineComponent } from "vue";
import { Button } from "@/components/atom/button";
import { useTheme } from "./composables/theme";

export default defineComponent({
    setup() {
        const { setTheme } = useTheme();
        return () => (
            <div class="flex flex-col gap-2 p-2">
                <Button
                    onClick={() => {
                        setTheme("light");
                    }}
                >
                    Switch To Light
                </Button>
                <Button
                    onClick={() => {
                        setTheme("dark");
                    }}
                >
                    Switch To Dark
                </Button>
            </div>
        );
    },
});
