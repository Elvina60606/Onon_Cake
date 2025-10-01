// JavaScript 程式碼：使用 jQuery UI 啟動日期選擇器

      $(document).ready(function () {
        // 1. 設定日期選擇器功能
        // 這會將日期選擇功能綁定到 id="shipDate" 的輸入欄位
        $("#shipDate").datepicker({
          dateFormat: "yy/mm/dd", // 設定顯示的日期格式 (例如 2025/12/31)
          showOn: "button", // 讓它只在點擊按鈕時顯示
          buttonText: "選擇日期", // 隱藏按鈕文字
          buttonImage: "none", // 隱藏預設按鈕圖片
        });

        // 2. 移除原生按鈕，改用我們手動的按鈕觸發
        // jQuery UI 會自動創建一個按鈕，我們需要將其替換為我們的自訂按鈕
        const $jqueryUIButton = $("#shipDate").siblings(
          ".ui-datepicker-trigger"
        );
        const $customButton = $(".date-text-trigger");

        if ($jqueryUIButton.length && $customButton.length) {
          // 將 jQuery UI 的點擊事件複製到我們的按鈕上
          $customButton.on("click", function (e) {
            e.preventDefault();
            // 觸發原生 jQuery UI 的按鈕點擊事件
            $jqueryUIButton.trigger("click");
          });

          // 隱藏 jQuery UI 自動生成的按鈕，只顯示我們的圖示按鈕
          $jqueryUIButton.hide();
        }
      });