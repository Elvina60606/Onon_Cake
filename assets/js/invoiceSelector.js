// invoiceSelector.js
import initManager from "./initManage.js";

function initInvoiceSelector() {
  const select = document.getElementById("invoiceSelect");
  const personalBlock = document.getElementById("personalBlock");
  const companyBlock = document.getElementById("companyBlock");

  // 如果頁面沒有這些元素，就不要執行
  if (!select || !personalBlock || !companyBlock) return;

  select.addEventListener("change", function () {
    if (this.value === "personalInvoice") {
      personalBlock.style.display = "block";
      companyBlock.style.display = "none";
    } else {
      personalBlock.style.display = "none";
      companyBlock.style.display = "block";
    }
  });
}

// 把初始化函式註冊給 initManager
initManager.add(initInvoiceSelector);
