 // 初始化輪播圖，設定為手動控制
      const carousel = new bootstrap.Carousel("#heroCarousel", {
        interval: false, // 關閉自動輪播
        wrap: true, // 允許循環
        keyboard: true, // 允許鍵盤控制
        pause: "hover", // 滑鼠懸停時暫停
        ride: false, // 不自動開始輪播
      });

      // 為訂購按鈕添加點擊事件
      document.querySelectorAll(".hero-button").forEach((button) => {
        button.addEventListener("click", function (e) {
          e.preventDefault();
          alert("訂購功能開發中...");
        });
      });

      // 鍵盤導航支援
      document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
          carousel.prev();
        } else if (event.key === "ArrowRight") {
          carousel.next();
        }
      });