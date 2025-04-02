import { defineComponent } from "vue";
import { Button } from "@/components/atom/button";
import { useTheme } from "./composables/theme";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./components/atom/popover";

export default defineComponent({
    setup() {
        const { setTheme } = useTheme();
        return () => (
            <div class="flex flex-col gap-2 p-2">
                <p>Button</p>
                <div class="flex gap-2">
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

                <p>Popover</p>
                <div>
                    <Popover>
                        <PopoverTrigger as-child>
                            <Button variant="outline">Open popover</Button>
                        </PopoverTrigger>
                        <PopoverContent>Popover Content</PopoverContent>
                    </Popover>
                </div>
            </div>
        );
    },
});
