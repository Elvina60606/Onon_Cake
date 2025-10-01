// utils/initManager.js
const initManager = {
  tasks: [],
  add(task) {
    this.tasks.push(task);
  },
  run() {
    this.tasks.forEach((task) => {
      try {
        task();
      } catch (e) {
        console.error("Init task error:", e);
      }
    });
  },
};

document.addEventListener("DOMContentLoaded", () => initManager.run());

export default initManager;
