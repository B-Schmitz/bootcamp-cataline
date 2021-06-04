<template>
  <div class="services">
    <Service
      title="Front End"
      description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptate. Necessitatibus, sint iste. Quia libero nulla recusandae cupiditate veniam ut at, voluptas ratione animi optio labore fuga quasi perspiciatis amet!"
    ></Service>
    <Service
      title="Back End"
      description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptate. Necessitatibus, sint iste. Quia libero nulla recusandae cupiditate veniam ut at, voluptas ratione animi optio labore fuga quasi perspiciatis amet!"
    ></Service>
    <Service
      title="Manutenção"
      description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptate. Necessitatibus, sint iste. Quia libero nulla recusandae cupiditate veniam ut at, voluptas ratione animi optio labore fuga quasi perspiciatis amet!"
    ></Service>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Service } from '@/components/molecules'

export default defineComponent({
  components: { Service }
})
</script>

<style lang="scss" scoped>
.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
}
</style>
