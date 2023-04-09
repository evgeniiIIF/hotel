<template>
  <div class="wrapper">
    <vHeader />
    <VMain />
  </div>
</template>
<script>
import mobileMixin from './mixins/mobileMode';
import vHeader from './components/layout/vHeader.vue';
import VMain from './components/layout/vMain.vue';


export default {
  mixins: [mobileMixin],
  components: {
    vHeader,
    VMain
  },

}
</script>
<style lang="scss">
@import '@/assets/scss/settings.scss';
</style>
