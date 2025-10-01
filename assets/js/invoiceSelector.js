      const select = document.getElementById("invoiceSelect");
      const personalBlock = document.getElementById("personalBlock");
      const companyBlock = document.getElementById("companyBlock");

      select.addEventListener("change", function () {
        if (this.value === "personalInvoice") {
          personalBlock.style.display = "block";
          companyBlock.style.display = "none";
        } else {
          personalBlock.style.display = "none";
          companyBlock.style.display = "block";
        }
      });