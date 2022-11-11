let but = document.querySelectorAll("button");

console.log(but);

for (let index = 0; index < but.length; index++) {
  but[index].addEventListener("click", () => {
    console.log(index);
  });
}
