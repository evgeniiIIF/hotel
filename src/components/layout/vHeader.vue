<template>
  <header class="header" :class="{ '_open-menu': showMobileMenu }" ref="header">
    <div class="container">
      <div class="header__body">
        <div class="header__left">
          <div class="header__burger burger-icon"
            @click="showMobileMenu = !showMobileMenu">
            <div class="burger-icon__body">
              <span class="burger-icon__item burger-icon__item--top"></span>
              <span class="burger-icon__item burger-icon__item--middle"></span>
              <span class="burger-icon__item burger-icon__item--bottom"></span>
            </div>
          </div>
          <div class="logo-header">
            <div class="logo-header__stars">
              <img class="logo-header__star-img"
                src="@/assets/img/logo/Star.svg"
                alt="star"
                v-for="star in 4" :key="star">
            </div>
            <div class="logo-header__content" ref="mobileMenu">
              <img class="logo-header__text--big" src="@/assets/img/logo/HOTEL.png" alt="HOTEL">
              <img class="logo-header__text--small" src="@/assets/img/logo/STAVROPOL.png" alt="STAVROPOL">
            </div>
          </div>
        </div>
        <div class="header__content">
          <div class="header__contacts contacts-header">
            <div class="contacts-header__place place-contacts-header">
              <img class="place-contacts-header__image" src="@/assets/img/place/Map_Pin.svg" alt="Map_Pin">
              <div class="place-contacts-header__address">
                <p class="place-contacts-header__city">г. Ставрополь,</p>
                <p class="place-contacts-header__street">ул. Пушкина 272</p>
              </div>
            </div>
            <div class="contacts-header__social">
              <div class="item-social">
                <img class="item-social__image" src="@/assets/img/social/Telegram_20px.svg" alt="Telegram">
              </div>
              <div class="item-social">
                <img class="item-social__image" src="@/assets/img/social/WhatsApp.svg" alt="WhatsApp">
              </div>
            </div>
            <div class="contacts-header__phone phone-header">
              <a class="phone-header__number" href="tel:+7123456789">+7 (123) 45-67-89</a>
              <button class="phone-header__feedback" type="button">Перезвоните мне</button>
            </div>
          </div>
          <nav class="header__menu menu-header">
            <ul class="menu-header__list">
              <li class="menu-header__item"
                v-for="menuItem in menuItems" :key="menuItem">
                <a href="menuItem" class="menu-header__link">{{ menuItem }}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="header__call-button">
          <baseButton tag="a" href="tel:+7123456789">Позвонить</baseButton>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import mobileMixin from '@/mixins/mobileMode';
import bodyLockMixin from "@/mixins/bodyLock";

import baseButton from '../UI/base-button.vue';

export default {
  name: 'vHeader',
  mixins: [mobileMixin, bodyLockMixin],
  components: {
    baseButton
  },
  data() {
    return {
      showMobileMenu: false,
      menuItems: [
        'Расчёт стоимости',
        'О нас',
        'Выездная регистрация',
        'Схемы залов',
        'Меню',
        'Галерея',
        'Отзывы',
        'Контакты',
      ]
    }
  },
  watch: {
    showMobileMenu() {
      if (this.showMobileMenu) {
        this.lockBody()
      } else {
        this.unlockBody()
      }
    }
  },
}
</script>

<style lang='scss'>
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/smart-grid.scss';

.header {
  border: 1px solid #F7F7F8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  &__body {
    display: flex;
    justify-content: space-between;
    padding: 12px 0 0;
  }

  &__left {
    flex: 0 0 108px;
    margin-right: 25px;
  }

  &__burger {}

  &__content {
    flex: 1 1 auto;
  }

  &__contacts {
    @include mr(48px);
    margin-bottom: 40px;
  }

  &__menu {}

  &__call-button {
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 133%;
    border-radius: 4px;
    cursor: pointer;
    color: #FFFFFF;
    background: #C6AF66;

    .base-button {
      padding: 8px 16px;

    }
  }

  &__call-button {
    display: none;
  }
}



.logo-header {
  width: 108px;

  &__stars {
    @include mr(2px);
    margin-bottom: 5px;
  }

  &__star-img {}

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__text--big {
    max-width: 100%;
    margin-bottom: 7px;
  }

  &__text--small {
    max-width: 100%;
  }

}

.contacts-header {
  display: flex;
  justify-content: end;

  &__place {}

  &__social {
    display: flex;
    @include mr(8px)
  }

  &__phone {}
}

.place-contacts-header {
  display: flex;
  align-items: center;

  &__image {
    margin-right: 16px;
  }

  &__address {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    color: #424343;
  }

  &__city {}

  &__street {}
}

.item-social {
  background: #C6AF66;
  border-radius: 4px;
  padding: 12px;

  &__image {
    width: 24px;
    height: 24px;
  }
}

.phone-header {
  display: flex;
  flex-direction: column;

  &__number {
    margin-bottom: 4px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    color: #424343;
  }

  &__feedback {
    text-align: right;
    border: none;
    background: transparent;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 133%;
    text-decoration-line: underline;
    color: #C6AF66;
  }
}

.menu-header {

  &__list {
    display: flex;
    flex-wrap: wrap;
    @include mr(91px)
  }

  &__item {
    padding-bottom: 14px;
  }

  &__link {
    white-space: nowrap;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 175%;
    color: #18191B;
  }
}

.main {
  margin-top: 24px;
}

//+++++++++++++ mobile menu ++++++++++++

.burger-icon {
  display: none;
  align-self: center;

  width: 28px;
  height: 22px;
  padding: 5px;
  cursor: pointer;

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  &__item {
    display: block;
    width: 100%;
    height: 2px;
    background: #C6AF66;
  }

  &__item--top {}

  &__item--middle {}

  &__item--bottom {}
}

._mobile {
  .header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 100;
    background: #fff;

    .header__body {
      align-items: center;
      padding: 16px 0;
    }

    .header__left {
      display: flex;
    }

    .header__burger {
      margin-right: 19px;
    }

    .header__menu {
      margin-bottom: 50px;
    }

    .menu-header__list {
      flex-direction: column;
    }

    .header__call-button {
      display: block;
    }

    .logo-header {
      width: 79px;
    }
  }

  .main {
    margin-top: 80px;
  }

  .header__content {
    position: fixed;
    left: 100%;
    top: 80px;
    width: 100%;
    height: 100%;
    z-index: 100;
    display: flex;
    flex-direction: column;
    padding: 60px 20px;
    overflow: auto;
    background: rgba(0, 0, 0, .9);
    transition: all .3s ease 0s, background 0s ease 0s;
  }

  .header__contacts {
    order: 1
  }

  .burger-icon {
    display: block;
  }

}

._mobile ._open-menu {

  .burger-icon {
    &__body {
      justify-content: center;
    }

    &__item {
      transition: all .3s ease 0s;
    }

    &__item--top {
      transform: translateY(50%) rotate(45deg);
    }

    &__item--middle {
      display: none;
    }

    &__item--bottom {
      transform: translateY(-50%) rotate(-45deg);
    }
  }

  .header__content {
    left: 0
  }

  .contacts-header {
    @include mr(0px);
    flex-direction: column;
    justify-content: center;
    @include mb(40px);
  }

  .phone-header__feedback {
    text-align: left;
  }

  .menu-header {
    &__link {
      font-size: 28px;
      color: #fff;
    }
  }
}
</style>