<template>
  <select
    v-model="theme"
    class="ml-theme-select"
    :aria-label="t('main.statusBar.theme.label')"
    :title="t('main.statusBar.theme.label')"
  >
    <option value="light">{{ t('main.statusBar.theme.light') }}</option>
    <option value="dark">{{ t('main.statusBar.theme.dark') }}</option>
    <option value="system">{{ t('main.statusBar.theme.system') }}</option>
  </select>
</template>

<script lang="ts" setup>
import { usePreferredDark } from '@vueuse/core'
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  isDark: boolean
  toggleDark: () => void
}>()

const { t } = useI18n()
const prefersDark = usePreferredDark()
const followsSystem = ref(false)

const theme = computed<'light' | 'dark' | 'system'>({
  get: () => {
    if (followsSystem.value) return 'system'
    return props.isDark ? 'dark' : 'light'
  },
  set: value => {
    followsSystem.value = value === 'system'
    if (followsSystem.value) return
    if (props.isDark !== (value === 'dark')) props.toggleDark()
  }
})

watch([followsSystem, prefersDark, () => props.isDark], () => {
  if (followsSystem.value && props.isDark !== prefersDark.value) {
    props.toggleDark()
  }
})
</script>

<style scoped>
.ml-theme-select {
  max-width: 7em;
  height: 100%;
  border: 1px solid var(--el-border-color);
  background: var(--el-bg-color);
  color: var(--el-text-color-regular);
  font: inherit;
}
</style>
