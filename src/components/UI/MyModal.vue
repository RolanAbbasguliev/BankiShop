<template>
  <div class="modal" v-if="show" @click="hideModal">
    <div @click.stop class="modal_container">
      <h1 class="title">{{ card.title }}</h1>

      <div class="modal_info">
        <div class="content-carousel">
          <v-carousel height="" :show-arrows="false">
            <v-carousel-item
              :src="require(`../../assets/img/${card.id}-1.jpg`)"
              style="width: 300px; height: 200px"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="require(`../../assets/img/${card.id}-2.jpg`)"
              style="width: 400px; height: 200px"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="require(`../../assets/img/${card.id}-3.jpg`)"
              style="width: 400px; height: 200px"
            >
            </v-carousel-item>
          </v-carousel>
        </div>
        <h4 class="description">
          {{ card.description }}
        </h4>
        <h4 class="price">{{ card.price }}$</h4>
      </div>
      <button class="hideBtn">Закрыть</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-modal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    hideModal() {
      this.$emit('ModalShow', false);
    },
  },
};
</script>

<style scoped>
.hideBtn {
  position: absolute;
  bottom: 50px;
  left: 50%;
  font-size: 50px;
  background-color: red;
  margin: 0 auto;
}
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  z-index: 30;
}

.modal_container {
  width: 50%;
  height: 100%;
  margin: 0 auto;
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  background: url(../../assets/img/back-ground.jpeg) no-repeat;
  background-size: cover;
}

.content-carousel {
  max-width: 300px;
}

.modal_info {
  align-items: center;
  margin-top: 20px;
}

.title {
  margin-top: 30px;
}

.description {
  margin-top: 40px;
  max-width: 300px;
}

.image {
  border-radius: 10px;
}

@media (max-width: 910px) {
  .modal_container {
    width: 100%;
    border-radius: 0px;
  }
}
</style>
