<template>
  <div class="index">
     <Carousel v-model="value1" loop autoplay>
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0
    };
  },
};
</script>
<style lang="less" scoped>
</style>