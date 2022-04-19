window.InputEvent = window.Event || window.InputEvent;

  var event = new InputEvent('input', {
    bubbles: true
  });

for(let i=0 ; i <100 ; i++){

  var message = 'BombaSpam';
  var textbox = document.querySelector('div._1UWac._1LbR4>div._13NKt.copyable-text.selectable-text');

  textbox.textContent = message;
  textbox.dispatchEvent(event);

  setTimeout(document.querySelector("button._4sWnG").click(),5000);

}
