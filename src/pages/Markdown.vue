<template>
  <div class="flex w-full flex-wrap">
    <h1 class="w-full text-center text-3xl my-4">MarkDown App</h1>
    <section class="flex w-10/12 m-auto h-screen">
      <article class="w-1/2 border">
        <textarea class="w-full h-full" @input="update"></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
export default {
  data() {
    return {
      text: "",
      timeout: "",
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    update(e) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.text = e.target.value;
      }, 1000);
    },
  },
};
</script>

<style>
</style>