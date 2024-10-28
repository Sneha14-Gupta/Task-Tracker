export default function (text, isCompleted) {
  const label = document.createElement("label");
  label.classList.add("label", "cursor-pointer");
  if (isCompleted) {
    label.classList.add("bg-slate-200","rounded");
  }
  label.innerHTML = `
     <span class="label-text">${text}</span>
     <input type="checkbox" ${isCompleted && "checked"} class="checkbox" />

    `;
  return label;
}
