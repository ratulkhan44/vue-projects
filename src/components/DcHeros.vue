<template>
  <div class="w-full flex">
    <div class="m-auto">
      <h1 class="text-center text-3xl my-3">Dc Heros {{ countHeros }}</h1>
      <ul v-for="(hero, index) in dcHeros" :key="index">
        <li class="my-3">
          {{ hero.name }}
          <button
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded ml-2"
            @click="removeHero(index)"
          >
            x
          </button>
        </li>
      </ul>
      <form @submit.prevent="addHero" class="mt-4">
        <input
          type="text"
          v-model="newHero"
          placeholder="Type Hero"
          class="border rounded p-2 mr-2"
        />
        <button
          type="submit"
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Add Hero
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newHero: "",
      dcHeros: [
        { name: "SuperGirl" },
        { name: "Flash" },
        { name: "Batman" },
        { name: "Arrow" },
        { name: "SuperMan" },
      ],
    };
  },
  methods: {
    addHero() {
      if (this.newHero != "") {
        this.dcHeros.push({ name: this.newHero });
        this.newHero = "";
      }
    },
    removeHero(index) {
      this.dcHeros = this.dcHeros.filter((hero, i) => i != index);
    },
  },
  computed: {
    countHeros() {
      return this.dcHeros.length;
    },
  },
};
</script>

<style>
</style>