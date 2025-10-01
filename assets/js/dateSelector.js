import initManager from "./initManager.js";

function initDateSelector() {
  // 1. 設定日期選擇器功能
  $("#shipDate").datepicker({
    dateFormat: "yy/mm/dd",
    showOn: "button",
    buttonText: "選擇日期",
    buttonImage: "none",
  });

  // 2. 使用自訂按鈕觸發
  const $jqueryUIButton = $("#shipDate").siblings(".ui-datepicker-trigger");
  const $customButton = $(".date-text-trigger");

  if ($jqueryUIButton.length && $customButton.length) {
    $customButton.on("click", function (e) {
      e.preventDefault();
      $jqueryUIButton.trigger("click");
    });
    $jqueryUIButton.hide();
  }
}

// 註冊初始化函式
initManager.add(initDateSelector);
