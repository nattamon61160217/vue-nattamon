<template>
  <div class="container text-center">
    <h1>Device ID : {{ id }}</h1>
    <p>----------------------</p>
    <p>{{ device.Title }}</p>
    <p>{{ device.Processor }}</p>
    <p>Price : ${{ device.Price }}</p>
    <img class="block mx-auto" :src="device.Photo" />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router/dist/vue-router.esm-bundler';
import axios from 'axios';
export default {
  name: 'Detail',
  // set ข้อมูลที่เป็น wacth computed เพื่อทำcomponentรูปแบบใหม่ได้
  setup() {
    // ดึงid มาเก็บที่ตัวแปรไอดี
    const route = useRoute();
    const id = computed(() => route.params.id);
    return {
      id,
    };
  },
  data: () => ({
    device: [
      {
        Title: '',
        Processor: '',
        Photo: '',
        Price: '',
      },
    ],
  }),
  created() {
    axios
      .get(`https://service2.ahead-coop.work/devices?id=${this.id}`)
      .then((res) => {
        [this.device] = res.data;
        console.log(this.device);
      });
  },
};
</script>
