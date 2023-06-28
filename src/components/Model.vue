<script lang='ts' setup>
const visible = defineModel<boolean>('visible', { required: true, default: false })
</script>

<template>
  <div v-if="visible" class="transition-all duration-500">
    <Teleport to="body">
      <div class="absolute left-0 top-0 h-full w-full bg-#333 bg-opacity-30" @click.stop="visible = false" />
      <div class="absolute left-1/2 top-200px w-600px overflow-hidden border border-#e5e5e5 rounded-md bg-white px-5 py-3 shadow-md -translate-x-1/2">
        <div class="border-b border-#e5e5e5 pb-3">
          <slot name="header" />
        </div>
        <div class="min-h-100px py-3">
          <slot />
        </div>
        <div class="border-t border-#e5e5e5 py-3">
          <slot name="footer" />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped></style>
