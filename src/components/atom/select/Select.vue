<script setup lang="ts">
import type { SelectRootEmits, SelectRootProps } from "reka-ui";
import { SelectRoot, useForwardPropsEmits } from "reka-ui";
import SelectContent from "./SelectContent.vue";
import SelectValue from "./SelectValue.vue";
import SelectGroup from "./SelectGroup.vue";
import SelectTrigger from "./SelectTrigger.vue";
import SelectItem from "./SelectItem.vue";

const props = withDefaults(
    defineProps<
        SelectRootProps & {
            options?: Array<{
                label: string;
                value: any;
                disabled?: boolean;
            }>;
        }
    >(),
    {
        options: () => [],
    },
);
const emits = defineEmits<SelectRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <SelectRoot data-slot="select" v-bind="forwarded">
        <slot v-if="$slots.default" />
        <template v-else>
            <SelectTrigger>
                <SelectValue></SelectValue>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem
                        v-for="item in props.options"
                        :key="item.label"
                        :value="item.value"
                        :disabled="item.disabled"
                    >
                        {{ item.label }}
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </template>
    </SelectRoot>
</template>
