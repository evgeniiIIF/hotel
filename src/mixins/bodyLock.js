const bodyLockMixin = {
  methods: {
    lockBody() {
      const body = document.querySelector("body");
      body.classList.add("_lock");
    },
    unlockBody() {
      const body = document.querySelector("body");
      body.classList.remove("_lock");
    },
  },
};

export default bodyLockMixin;

// import bodyLockMixin from "@/mixins/bodyLockMixin";

// export default {
//   mixins: [bodyLockMixin],
//   // ...
// };

// methods: {
//   openModal() {
//     this.lockBody(); // блокирует прокрутку на заднем плане
//     this.isModalOpen = true;
//   },
//   closeModal() {
//     this.unlockBody(); // разблокировать прокрутку на заднем плане
//     this.isModalOpen = false;
//   }
// }
