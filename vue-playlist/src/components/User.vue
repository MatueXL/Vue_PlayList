<template>
  <div class="User">
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
  name: 'User',
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