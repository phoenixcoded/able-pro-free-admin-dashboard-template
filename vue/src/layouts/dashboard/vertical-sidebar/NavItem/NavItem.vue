<script setup>
import { computed } from 'vue';

const props = defineProps({ item: Object, level: Number });
import SvgSprite from '@/components/shared/SvgSprite.vue';

const baseURL = import.meta.env.BASE_URL;

const propsForLink = computed(() => {
  // open in new tab with full URL
  if (props.item.getURL) {
    return {
      href: baseURL + props.item.to.replace(/^\//, ''),
      target: '_blank'
    };
  }

  // external links
  if (props.item.type === 'external') {
    return {
      href: props.item.to,
      target: '_blank'
    };
  }

  // internal vue-router navigation
  return {
    to: props.item.to
  };
});
</script>

<template>
  <!---Single Item-->
  <v-list-item v-bind="propsForLink" rounded class="mb-1" color="primary" :disabled="props.item.disabled">
    <!---If icon-->
    <template v-slot:prepend>
      <SvgSprite :name="props.item.icon || ''" :level="props.level" />
    </template>
    <v-list-item-title>
      {{ item.title }}
      <!---If any chip or label-->
      <v-badge :color="props.item.chipColor" v-if="props.item.chipColor === 'success'" :aria-label="props.item.chip" inline dot></v-badge>
    </v-list-item-title>
    <!---If Caption-->
    <v-list-item-subtitle v-if="item.subCaption" class="text-caption mt-0 hide-menu">
      {{ item.subCaption }}
    </v-list-item-subtitle>
    <!---If any chip or label-->
    <template v-if="props.item.chip && props.item.chipColor !== 'success'" #append>
      <v-chip
        :color="item.chipColor"
        :border="item.chipVariant === 'tonal' ? `${item.chipColor} solid thin opacity-50` : ''"
        class="sidebarchip hide-menu"
        size="x-small"
        :variant="item.chipVariant"
        :prepend-icon="item.chipIcon"
      >
        {{ item.chip }}
      </v-chip>
    </template>
  </v-list-item>
</template>
