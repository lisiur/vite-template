<script setup lang="ts">
import { cn } from "@/lib/utils";
import {
    RadioGroupRoot,
    type RadioGroupRootEmits,
    type RadioGroupRootProps,
    useForwardPropsEmits,
} from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import RadioGroupItem from "./RadioGroupItem.vue";
import { Label } from "../label";

const props = withDefaults(
    defineProps<
        RadioGroupRootProps & {
            class?: HTMLAttributes["class"];
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
const emits = defineEmits<RadioGroupRootEmits>();
const slots = defineSlots();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <RadioGroupRoot
        data-slot="radio-group"
        :class="cn('grid gap-3', props.class)"
        v-bind="forwarded"
    >
        <slot v-if="slots.default" />
        <template v-else>
            <Label v-for="item in props.options" :key="item.label">
                <RadioGroupItem
                    :value="item.value"
                    :disabled="item.disabled"
                ></RadioGroupItem>
                <span>{{ item.label }}</span>
            </Label>
        </template>
    </RadioGroupRoot>
</template>
