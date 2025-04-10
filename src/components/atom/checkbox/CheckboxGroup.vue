<script setup lang="ts">
import type { CheckboxGroupRootEmits, CheckboxGroupRootProps } from "reka-ui";
import { cn } from "@/lib/utils";
import { CheckboxGroupRoot, useForwardPropsEmits } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import Checkbox from "./Checkbox.vue";
import { Label } from "../label";

const props = withDefaults(
    defineProps<
        CheckboxGroupRootProps & {
            class?: HTMLAttributes["class"];
            options?: Array<{
                label: string;
                value: any;
                disabled?: boolean;
            }>;
        }
    >(),
    {
        modelValue: () => [],
        options: () => [],
    },
);
const emits = defineEmits<CheckboxGroupRootEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <CheckboxGroupRoot
        v-bind="forwarded"
        :class="cn(props.class, 'grid gap-3')"
    >
        <template v-for="item in props.options" :key="item.label">
            <Label>
                <Checkbox
                    :value="item.value"
                    :disabled="item.disabled"
                ></Checkbox>
                <span> {{ item.label }} </span>
            </Label>
        </template>
    </CheckboxGroupRoot>
</template>
