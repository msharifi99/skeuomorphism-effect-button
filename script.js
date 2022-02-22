const button = document.querySelector("#main-button");
const statusText = document.querySelector("#status-text");

const turnOnSound = new Audio("./on.wav");
const turnOffSound = new Audio("./off.wav");
turnOnSound.load();
turnOffSound.load();

const leftPressedClassName = "left-pressed";
const rightPressedClassName = "right-pressed";
const textShadowClassName = "shadow-text";
const textLightClassName = "light-text";

button.onclick = (e) => {
  const isLeftSidePressed =
    e.pointerId === -1
      ? button.classList.contains(rightPressedClassName)
      : e.offsetX < e.target.offsetWidth / 2;

  if (isLeftSidePressed) {
    turnOffSound.play();
  } else {
    turnOnSound.play();
  }

  const newClass = isLeftSidePressed
    ? leftPressedClassName
    : rightPressedClassName;
  const oldClass = isLeftSidePressed
    ? rightPressedClassName
    : leftPressedClassName;
  const text = isLeftSidePressed ? "Let There Be Light" : "Let There Be Shadow";
  const textNewClass = isLeftSidePressed
    ? textLightClassName
    : textShadowClassName;
  const textOldClass = isLeftSidePressed
    ? textShadowClassName
    : textLightClassName;

  statusText.innerHTML = text;
  statusText.classList.add(textNewClass);
  statusText.classList.remove(textOldClass);

  e.target.classList.add(newClass);
  e.target.classList.remove(oldClass);
};
