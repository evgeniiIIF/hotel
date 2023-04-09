<template>
  <section class='individual-menu'>
    <div class="container">
      <div class="individual-menu__body">
        <div class="individual-menu__left left-individual-menu">
          <h3 class="left-individual-menu__title">Индивидуальное меню для Вашего праздника</h3>
          <div class="left-individual-menu__services">
            <div class="left-individual-menu__service service-menu">
              <div class="service-menu__icon">
                <img src="@/assets/img/main/individual-menu/room_service_24px.svg" alt="service-icon">
              </div>
              <p class="service-menu__text">Составим меню под любые предпочтения</p>
            </div>
            <div class="left-individual-menu__service service-menu">
              <div class="service-menu__icon">
                <img src="@/assets/img/main/individual-menu/service2.svg" alt="service-icon">
              </div>
              <p class="service-menu__text">Можно со своим алкоголем или порекомендуем надёжных поставщиков</p>
            </div>
          </div>
          <form class="left-individual-menu__form form-menu">
            <h5 class="form-menu__title"></h5>
            <div class="form-menu__row">
              <div class="form-menu__input">
                <inputInLabel
                  :opts="{
                    type: 'text',
                    value: 'Иван',
                    label: 'Ваше имя',
                  }" />
              </div>
              <div class="form-menu__input">
                <inputInLabel
                  :opts="{
                    type: 'tel',
                    label: 'Ваш номер телефона',
                    placeholder: '+7 (___) ___-__-__'
                  }" />
              </div>
              <div class="form-menu__button">
                <baseButton tag="button">Забронировать</baseButton>
              </div>
            </div>
          </form>
        </div>
        <div class="individual-menu__right"></div>
      </div>
    </div>
  </section>
</template>

<script>
import inputInLabel from '../UI/input-in-label.vue';
import baseButton from '../UI/base-button.vue';

export default {
  name: 'individualMenu',
  components: {
    inputInLabel,
    baseButton
  }
}
</script>

<style lang='scss'></style>