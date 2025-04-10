<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Label, type LabelProps } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<LabelProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <Label
        data-slot="label"
        v-bind="delegatedProps"
        :class="
            cn(
                'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:text-disabled peer-disabled:cursor-not-allowed peer-disabled:text-disabled',
                'has-disabled:cursor-not-allowed has-disabled:text-disabled',
                props.class,
            )
        "
    >
        <slot />
    </Label>
</template>
