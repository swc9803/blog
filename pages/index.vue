<template>
  <div>home</div>
</template>

<script setup>
import { createUserWithEmailAndPassword } from 'firebase/auth'

const creds = reactive({
  email: "",
  password: ""
})

const nuxtApp = useNuxtApp()
async function registerUser() {
  try {
    const { user } = await createUserWithEmailAndPassword(
      nuxtApp.$auth,
      creds.email,
      creds.password
    )
  } catch (error: unknown) {
    if (error instanceof Error) {
      // handle error
    }
  }
}
</script>

<style lang="scss" scoped></style>
