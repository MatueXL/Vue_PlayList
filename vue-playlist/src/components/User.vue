<template>
  <div class="User">
    <h1>My App</h1>
    <ul>
      <li
        v-for="(user,i) in User"
        :Key="i"
      >
        {{user}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      User: [
        'MatueXL',
        'Gary',
        'Troy',
        'Emily'
      ]
    }
  }
}
</script>

<style>
h1 {
  color: purple;
}
</style>