<template>
  <main>
    <h1>
      {{ $t("hero.h1") }}
    </h1>

    <button @click="setLocale('en')">English</button>
    <button @click="setLocale('es')">Spanish</button>
  </main>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { setLocale } = useI18n();
</script>
