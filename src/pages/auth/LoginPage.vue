<template>
  <q-page>
    <q-btn class="fixed-center" @click="onLogin">Login with Google</q-btn>
  </q-page>
</template>
<script lang="ts" setup>
import { TheWorkflows } from 'src/workflows/the-workflows';
import { useRouter } from 'vue-router';
const $router = useRouter();

function onLogin() {
  TheWorkflows.emit({
    type: 'loginWithGoogle',
    arg: {
      success: async (profile) => {
        if (profile.type == 'anonymous' || !profile.type) {
          await $router.replace({
            name: 'get-started',
          });
        } else {
          await $router.replace({
            name: 'home',
          });
        }
      },
      error: (err) => {
        console.log(err);
      },
    },
  });
}
</script>
