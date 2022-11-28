let timeoutID = 0;
// import answers from "./list.json"
let answers = import("./list.json");

async function listener() {
  const lotteryElement = document.querySelector<HTMLDivElement>(".lottery");
  const textChance = document.querySelector<HTMLDivElement>(".textChance");
  const background = document.querySelector<HTMLDivElement>(".bg");
  const text = document.querySelector<HTMLDivElement>(".text");
  if (text && background && textChance && lotteryElement) {
    let { percentageChance, randomPick } = await import("./helper");
    clearTimeout(timeoutID);
    const picked = percentageChance(
      ["common", "rare", "epic", "legendary"],
      [60, 25, 10, 5]
    ) as never;
    lotteryElement.classList.add("lotteryfocus");
    textChance.innerHTML = picked;
    const colors = {
      common: "rgb(50, 50, 50)",
      rare: "rgb(215, 104, 0)",
      epic: "rgb(190, 0, 215)",
      legendary: "rgb(0, 208, 215)",
    };
    document.body.style.background = `linear-gradient(180deg, rgb(0, 0, 0), ${colors[picked]})`;
    background.style.opacity = "0";

    text.innerHTML = randomPick((await answers).default[picked]);
    text.style.opacity = "1";
    textChance.style.opacity = "1";
    timeoutID = setTimeout(async () => {
      document.querySelector<HTMLButtonElement>(".lottery")?.blur();
      text.style.opacity = "0";
      textChance.style.opacity = "0";
      lotteryElement.classList.remove("lotteryfocus");
      background.style.opacity = "1";
      setTimeout(async () => {
        document.body.style.background = `linear-gradient(180deg, rgb(0, 0, 0), rgb(21, 21, 21))`;
      }, 500);
    }, 3000);
  }
}
