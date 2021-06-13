const game = document.getElementById("game");
const alertMessage = document.getElementById("alert");
const resetBtn = document.getElementById("reset");

for (let i = 0; i < 9; i++) {
  game.innerHTML += '<div class="block"></div>';
}
game.innerHTML+= '<div class="pop"></div>';
let allBlocks = document.querySelectorAll(".block");
let popUp = document.querySelector(".pop");
let step = 0;
game.addEventListener("click", (event) => {
  console.log(event.target.className);
  if (event.target.className == "block") {
    if (step % 2 == 0) {
      step++;
      event.target.innerHTML = "x";
    } else {
      event.target.innerHTML = "o";
      step++;
    }
    winnerCheck();
  }
});
const reset = () => {
  Array.from(allBlocks).forEach((block) => {
    block.innerHTML = null;
  });
  popUp.classList.remove("pop-on");
  alertMessage.textContent = null;
};

const winnerCheck = () => {
  const iteration = (idList, argument) => {
    if (
      allBlocks[idList[0]].innerHTML == argument &&
      allBlocks[idList[1]].innerHTML == argument &&
      allBlocks[idList[2]].innerHTML == argument
    ) {
      alertMessage.textContent = `${argument} won`;
        popUp.classList.add("pop-on");
      return;
    }

    let count = Array.from(allBlocks).filter((block) => {
      return !!block.innerHTML;
    }).length;
    if (count == 9) {
      alertMessage.textContent = "noone won";
      popUp.classList.add("pop-on");
    }
    console.log(
      Array.from(allBlocks).filter((block) => {
        return !!block.innerHTML;
      }).length
    );
  };

  iteration([0, 1, 2], "x");
  iteration([3, 4, 5], "x");
  iteration([6, 7, 8], "x");
  iteration([0, 3, 6], "x");
  iteration([1, 4, 7], "x");
  iteration([2, 5, 8], "x");
  iteration([0, 4, 8], "x");
  iteration([6, 4, 2], "x");

  iteration([0, 1, 2], "o");
  iteration([3, 4, 5], "o");
  iteration([6, 7, 8], "o");
  iteration([0, 3, 6], "o");
  iteration([1, 4, 7], "o");
  iteration([2, 5, 8], "o");
  iteration([0, 4, 8], "o");
  iteration([6, 4, 2], "o");
};
resetBtn.addEventListener("click", reset);
