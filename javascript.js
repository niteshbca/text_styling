 let textHistory = [];
    let textIndex = -1;
    const textarea = document.getElementById('textArea');
    let fontSizeHistory = [];
    let fontColorHistory = [];
    let fontFamilyHistory = [];

    function changeFontSize() {
      const fontSize = document.getElementById('fontSize').value;
      fontSizeHistory.push(textarea.style.fontSize);
      textarea.style.fontSize = fontSize + 'px';
      textHistory.push(textarea.value);
      textIndex++;
    }

    function changeFontColor() {
      const fontColor = document.getElementById('fontColor').value;
      fontColorHistory.push(textarea.style.color);
      textarea.style.color = fontColor;
      textHistory.push(textarea.value);
      textIndex++;
    }

    function changeFontFamily() {
      const fontFamily = document.getElementById('fontFamily').value;
      fontFamilyHistory.push(textarea.style.fontFamily);
      textarea.style.fontFamily = fontFamily;
      textHistory.push(textarea.value);
      textIndex++;
    }

    function addText() {
      const newText = prompt("Enter text to add:");
      if (newText !== null) {
        textHistory.push(textarea.value);
        textIndex++;
        textarea.value += newText;
      }
    }

    function undo() {
      if (textIndex > 0) {
        textarea.value = textHistory[textIndex - 1];
        textarea.style.fontSize = fontSizeHistory[textIndex - 1];
        textarea.style.color = fontColorHistory[textIndex - 1];
        textarea.style.fontFamily = fontFamilyHistory[textIndex - 1];
        textIndex--;
      }
    }

    function redo() {
      if (textIndex < textHistory.length - 1) {
        textIndex++;
        textarea.value = textHistory[textIndex];
        textarea.style.fontSize = fontSizeHistory[textIndex];
        textarea.style.color = fontColorHistory[textIndex];
        textarea.style.fontFamily = fontFamilyHistory[textIndex];
      }
    }
