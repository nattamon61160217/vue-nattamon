<template>
  <h1 class="font-black mb-3">Devices</h1>
  <div class="grid grid-cols-3 gap-4 border border-black ml-0 mr-5 p-3">
    <ul v-for="device in devices" :key="device.id">
      <li>
      <router-link :to="{
            name: 'device',
            params: { id: device.id },
          }">
      <img :src="device.Photo" />
      </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  //รับค่าจะภายนอกเข้ามาใช้ในcomponent
  props: {
    manufacturerId: Number,
  },
  data() {
    return {
      devices: [
        { id: 1, DeviceName: 'DELL XP13' },
        { id: 2, DeviceName: 'ASUS ROG' },
      ],
    };
  },
  created() {
    console.log('props: ', this.manufacturerId);
    //เงื่อนไข ถ้าส่งค่าเข้ามาจริงถึงจะquery string
    if (this.manufacturerId !== 0) {
      axios
        .get(
          `https://service2.ahead-coop.work/devices?ManufacturerID=${this.manufacturerId}`
        )
        .then((res) => {
          this.devices = res.data;
        });
    } else {
      axios.get(`https://service2.ahead-coop.work/devices`).then((res) => {
        this.devices = res.data;
      });
    }
  },
  // เวลาที่เรากดที่รูปจะได้ไอดีมา
  watch: {
    manufacturerId: function (newId, oldId) {
      // id เก่า ใหม่ที่รับมาคืออะไร
      console.log('Prop changed: ', newId, '+', oldId);
      // this เรียกตัวแปรมาใช้ในฟังก์ชันอื่นได้ในcomponentนั้น
      this.getDeviceByManufacturer(newId);
    },
  },
  methods: {
    getDeviceByManufacturer(id) {
      axios
        .get(
          `https://service2.ahead-coop.work/devices?ManufacturerID=${this.manufacturerId}`
        )
        .then((res) => {
          this.devices = res.data;
        });
    },
  },
};
</script>
