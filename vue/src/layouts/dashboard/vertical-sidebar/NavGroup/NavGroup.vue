<script setup>
const props = defineProps({ item: Object });
</script>

<template>
  <v-list-subheader color="darksecondary" class="text-body-small text-uppercase">{{ props.item.header }}</v-list-subheader>
</template>
