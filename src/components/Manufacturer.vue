<template>
  <div class="grid grid-cols-2 gap-4 border-black">
    <div class="ml-10 mr-0">
      <h1 class="font-black mb-3">Manufacturer</h1>
      <ul
        class="border border-black"
        v-for="manufacture in manufacturer"
        :key="manufacture.id"
      >
        <li>
          <button @click="changeManufacturerId(manufacture.id)">
            <img :src="manufacture.Logo" width="100" />
          </button>
        </li>
      </ul>
    </div>
    <div>
      <slot :factId="currentManufactId"></slot>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    currentManufactId: 0,
    manufacturer: [
      { id: 1, Title: "DELL" },
      { id: 2, Title: "ASUS" },
    ],
  }),
  created() {
    axios.get(`https://service2.ahead-coop.work/manufacturers`).then((res) => {
      this.manufacturer = res.data;
    });
  },
  methods: {
    changeManufacturerId(id) {
      this.currentManufactId = id;
      console.log(`id : ${this.currentManufactId}`);
    },
  },
};
</script>