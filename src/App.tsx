import { defineComponent, onMounted, reactive } from "vue";
import { Button } from "@/components/atom/button";
import { useTheme } from "./composables/theme";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./components/atom/popover";
import {
    Sun,
    Moon,
    Home,
    Plus,
    MoreHorizontal,
    Languages,
} from "lucide-vue-next";
import { Checkbox, CheckboxGroup } from "./components/atom/checkbox";
import { Label } from "./components/atom/label";
import { RadioGroup } from "./components/atom/radio-group";
import { Select } from "./components/atom/select";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarFooter,
    SidebarHeader,
    SidebarTrigger,
    SidebarProvider,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarGroupAction,
    SidebarMenuAction,
} from "./components/atom/sidebar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./components/atom/dropdown-menu";
import { useI18n } from "vue-i18n";
import { setLocale, toggleLocale } from "./i18n";

export default defineComponent({
    setup() {
        onMounted(() => setLocale("en_US"));

        const options = [
            {
                label: "A",
                value: "A",
            },
            {
                label: "B",
                value: "B",
                disabled: true,
            },
            {
                label: "C",
                value: "C",
            },
        ];
        const state = reactive({
            checkboxGroup: [],
            radioGroup: "A",
            select: "A",
        });
        const menus = [
            {
                label: "Components",
                children: [
                    {
                        label: "Theme",
                        link: "#theme",
                    },
                    {
                        label: "Locale",
                        link: "#locale",
                    },
                    {
                        label: "Button",
                        link: "#button",
                    },
                    {
                        label: "Popover",
                        link: "#popover",
                    },
                    {
                        label: "Checkbox",
                        link: "#checkbox",
                    },
                    {
                        label: "Radio",
                        link: "#radio",
                    },
                    {
                        label: "Select",
                        link: "#select",
                    },
                ],
            },
        ];

        const { toggleTheme, isLight } = useTheme();
        const { t } = useI18n();
        return () => (
            <SidebarProvider>
                <Sidebar>
                    <SidebarHeader />
                    <SidebarContent>
                        {menus.map((menuGroup) => {
                            return (
                                <SidebarGroup>
                                    <SidebarGroupLabel>
                                        {menuGroup.label}
                                    </SidebarGroupLabel>
                                    <SidebarGroupAction>
                                        <Plus />{" "}
                                        <span class="sr-only">add</span>
                                    </SidebarGroupAction>
                                    <SidebarGroupContent>
                                        <SidebarMenu>
                                            {menuGroup.children.map((menu) => {
                                                return (
                                                    <SidebarMenuItem>
                                                        <SidebarMenuButton
                                                            asChild
                                                        >
                                                            <a href={menu.link}>
                                                                <Home />
                                                                <span>
                                                                    {menu.label}
                                                                </span>
                                                            </a>
                                                        </SidebarMenuButton>
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger
                                                                asChild
                                                            >
                                                                <SidebarMenuAction>
                                                                    <MoreHorizontal />
                                                                </SidebarMenuAction>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent
                                                                side="right"
                                                                align="start"
                                                            >
                                                                <DropdownMenuItem>
                                                                    <span>
                                                                        edit
                                                                    </span>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    <span>
                                                                        delete
                                                                    </span>
                                                                </DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </SidebarMenuItem>
                                                );
                                            })}
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </SidebarGroup>
                            );
                        })}
                        <SidebarGroup />
                    </SidebarContent>
                    <SidebarFooter />
                </Sidebar>
                <main>
                    <SidebarTrigger />
                    <div class="flex flex-col gap-2 p-2">
                        <h2 id="theme">Theme</h2>
                        <div class="flex gap-2">
                            <Button
                                variant="ghost"
                                onClick={() => {
                                    toggleTheme();
                                }}
                            >
                                {isLight.value ? <Moon /> : <Sun />}
                            </Button>
                        </div>

                        <h2 id="locale">Locale</h2>
                        <div class="flex gap-2">
                            <Button
                                variant="ghost"
                                onClick={() => {
                                    toggleLocale();
                                }}
                            >
                                <Languages />
                                <span>{t("common.lang")}</span>
                            </Button>
                        </div>

                        <h2 id="button">Button</h2>
                        <div class="flex gap-2">
                            <Button variant="default">Default</Button>
                            <Button variant="destructive">Destructive</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="link">Link</Button>
                        </div>

                        <h2 id="popover">Popover</h2>
                        <div>
                            <Popover>
                                <PopoverTrigger as-child>
                                    <Button variant="outline">
                                        Open popover
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent>Popover Content</PopoverContent>
                            </Popover>
                        </div>

                        <h2 id="checkbox">Checkbox</h2>
                        <Label class="flex gap-2">
                            <Checkbox disabled id="checkbox" />
                            Accept terms and conditions
                        </Label>

                        <div class="flex gap-2">
                            <CheckboxGroup
                                v-model={state.checkboxGroup}
                                options={options}
                            ></CheckboxGroup>
                        </div>

                        <h2 id="radio">Radio</h2>
                        <div class="flex gap-2">
                            <RadioGroup
                                v-model={state.radioGroup}
                                options={options}
                            ></RadioGroup>
                        </div>

                        <h2 id="select">Select</h2>
                        <div class="flex gap-2">
                            <Select
                                v-model={state.select}
                                options={options}
                            ></Select>
                        </div>
                    </div>
                </main>
            </SidebarProvider>
        );
    },
});
