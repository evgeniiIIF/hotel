const mobileMixin = {
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize(); // проверить при загрузке страницы
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 992;
    },
    setClassMobileBody() {
      const body = document.querySelector("body");
      body.classList.add("_mobile");
    },
    unsetClassMobilekBody() {
      const body = document.querySelector("body");
      body.classList.remove("_mobile");
    },
  },
  watch: {
    isMobile() {
      if (this.isMobile) {
        this.setClassMobileBody();
      } else {
        this.unsetClassMobilekBody();
      }
    },
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};

export default mobileMixin;
