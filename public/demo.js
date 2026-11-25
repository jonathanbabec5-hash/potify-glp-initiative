const demo = document.querySelector(".demo-card");
const steps = [...demo.querySelectorAll("[data-demo-step]")];
const receiptViews = [...demo.querySelectorAll("[data-receipt-view]")];
const records = [...demo.querySelectorAll("[data-record]")];
const verificationRecord = demo.querySelector(".receipt-proof");

function showReceiptView(name) {
  for (const control of receiptViews) {
    control.setAttribute("aria-pressed", String(control.dataset.receiptView === name));
  }
  for (const record of records) record.hidden = record.dataset.record !== name;
}

function showStep(name, moveFocus = true) {
  if (name === "receipt") {
    showReceiptView("customer");
    verificationRecord.open = false;
  }
  for (const step of steps) step.hidden = step.dataset.demoStep !== name;
  if (!moveFocus) return;
  const visibleStep = steps.find((step) => !step.hidden);
  visibleStep.querySelector("h3[tabindex], button").focus({ preventScroll: true });
}

demo.addEventListener("click", (event) => {
  const stepControl = event.target.closest("button[data-next]");
  if (stepControl) showStep(stepControl.dataset.next);
  const receiptControl = event.target.closest("button[data-receipt-view]");
  if (receiptControl) showReceiptView(receiptControl.dataset.receiptView);
});

const query = new URLSearchParams(window.location.search);
if (query.get("demo") === "scan") showStep("review", false);
