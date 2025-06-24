<script setup lang="ts">
const supabase = useSupabaseClient();
const email = ref("");
const otp = ref("");
const user = useSupabaseUser();

console.log("app mounted");

const signInWithOtp = async () => {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
  });
  if (error) console.log(error);
};

const verifyOtp = async () => {
  const { error } = await supabase.auth.verifyOtp({
    email: email.value,
    token: otp.value,
    type: "email",
  });
  if (error) {
    throw new Error("User not loaded correctly.");
  }
};

async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  }
}
</script>
<template>
  <div>
    <div>
      <button @click="signInWithOtp">Sign In with E-Mail</button>
      <input v-model="email" type="email" style="border: 1px solid black" />
    </div>

    <div>
      <input v-model="otp" type="text" style="border: 1px solid black" />
      <button @click="verifyOtp">verifyOtp</button>
    </div>

    <div>
      <button @click="signOut">Sign out</button>
    </div>

    <p>{{ user || "empty" }}</p>
  </div>
</template>
