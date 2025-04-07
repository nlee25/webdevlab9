function init(){

  const input = document.getElementById("entryinput");
  const button = document.getElementById("entrybutton");
  const output = document.getElementById("textoutput");


  button.addEventListener("click", () => {
    const message = input.value;

    alert("Daniel Krieglstein: " + message);

    output.textContent = message;
  });
}

window.addEventListener('load', init);
