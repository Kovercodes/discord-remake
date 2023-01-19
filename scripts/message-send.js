if ("content" in document.createElement("template")) {
  const container = document.querySelector(".chat__direct");
  const template = document.getElementById("message").content;
  const field = document.getElementById("newMessage");

  let messageCount = 0;

  const formSubmit = (event) => {
    console.log("btn");
    if (event.code === "Enter") {
      console.log("ENTER");
      if (field.value !== "") {
        console.log(field.value);
        let clone = template.cloneNode(true);
        container.appendChild(clone);
        messageCount++;
        const text = document.querySelector(
          `#messageText:nth-of-type(${messageCount})`
        );
        console.log(text);
        text.textContent = field.value;
      }
    }
  };

  window.addEventListener("keydown", formSubmit);
}
