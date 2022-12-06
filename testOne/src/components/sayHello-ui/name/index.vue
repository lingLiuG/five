<script setup>
  import { toRefs } from 'vue';
  const props = defineProps({
    userName: {
      type: String,
      default: '12月',
    }
  })

  const { userName } = toRefs(props)

</script>
<script>
export default {
	name: "SayHelloName",
};
</script>

<template>
  <header>
    hello,{{ userName }}
  </header>
</template>