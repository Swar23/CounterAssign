import { DmartCheckout } from "./counter";

const dmart = new DmartCheckout(3); //can specify no.of counter from here
const itemInput = document.getElementById("itemInput") as HTMLInputElement;
const submitBtn = document.getElementById("submitBtn")!;
const queueContainer = document.getElementById("queueContainer")!;

submitBtn.addEventListener("click", async() => {
  const itemCount = parseInt(itemInput.value, 10);
  if (!isNaN(itemCount) && itemCount > 0) {
    await dmart.assignQueueToCustomer(itemCount);
    renderQueues();
    itemInput.value = "";
  } else {
    alert("Please enter a valid number of items.");
    itemInput.value = "";
  }
});

function renderQueues() {
  const data = dmart.getQueueData();
  queueContainer.innerHTML = "";

  data.forEach((queue, index) => {
    const div = document.createElement("div");
    div.className = "queue-box";
    div.innerHTML = `
      <h3>Counter ${index + 1}</h3>
      <p>Items: [${queue.items.join(", ")}]</p>
      <p>Total Items: ${queue.total}</p>
    `;
    queueContainer.appendChild(div);
  });
}

// Initial render
renderQueues();
