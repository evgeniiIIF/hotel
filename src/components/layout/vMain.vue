<template>
  <main class='main'>
    <reservationSection @onShowDialog="$emit('onShowDialog')" />
    <secretSection />
    <questionsSection />
    <FullWidthImage />
    <schemesSection @onShowDialog="$emit('onShowDialog')" />
    <IndividualMenuSection />
    <mainImageSlider />
    <aboutSection />
    <meetSection />
    <contactsSection @onShowDialog="$emit('onShowDialog')" />
  </main>
</template>

<script>
import reservationSection from '../blocks/reservationSection.vue';
import secretSection from '../blocks/secretSection.vue';
import questionsSection from '../blocks/questionsSection.vue';
import FullWidthImage from '../blocks/fullWidthImage.vue';
import schemesSection from '../blocks/schemesSection.vue'
import IndividualMenuSection from '../blocks/individualMenuSection.vue';
import mainImageSlider from '../blocks/mainImageSlider.vue';
import aboutSection from '../blocks/aboutSection.vue';
import meetSection from '../blocks/meetSection.vue';
import contactsSection from '../blocks/contactsSection.vue';

export default {
  name: "vMain",
  components: {
    reservationSection,
    secretSection,
    questionsSection,
    FullWidthImage,
    schemesSection,
    IndividualMenuSection,
    mainImageSlider,
    aboutSection,
    meetSection,
    contactsSection
  },

}
</script>


<style lang='scss'>
@import '@/assets/scss/smart-grid.scss';

.main {
  .reservation {
    margin-bottom: 20px;
  }

  .secret {
    margin-bottom: 64px;
  }

  .questions {
    margin-bottom: 64px;

    @include to(992px) {
      margin-bottom: 40px;
    }
  }

  .full-width-image {
    margin-bottom: 48px;
  }

  .schemes {
    margin-bottom: 48px;

    @include to(992px) {
      margin-bottom: 24px;
    }
  }

  .individual-menu {
    margin-bottom: 48px;
  }

  .main-slider {
    margin-bottom: 48px;

    @include to(992px) {
      margin-bottom: 40px;
    }
  }

  .about {
    margin-bottom: 30px;
  }

  .meet {
    margin-bottom: 20px;
  }

  .contacts {
    margin-bottom: 20px;

    @include to(992px) {
      margin-bottom: 32px;
    }
  }
}
</style>