//check if browser supports template element
if ("content" in document.createElement("template")) {
  const container = document.querySelector("#directContainer");
  const containerHeight = container.offsetHeight;
  const template = document.getElementById("direct");
  console.log(template);

  const friendsAmount = Math.floor(containerHeight / 40);
  console.log(friendsAmount);

  for (let i = 0; i <= friendsAmount; i++) {
    const clone = template.content.cloneNode(true);
    container.appendChild(clone);
  }
}
