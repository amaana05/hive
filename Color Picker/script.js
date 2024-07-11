document.addEventListener('DOMContentLoaded', function(){

    const colorPicker = document.getElementById('colorPicker');
    const colorDisplay = document.getElementById('colorDisplay');
    const colorText = document.getElementById('color-tag');

    function handleColorChange(event){
        const selectedColor = event.target.value;
        colorDisplay.style.backgroundColor = selectedColor;
        colorText.textContent = `Selected Color: ${selectedColor}`;
    }

    colorPicker.addEventListener('input', handleColorChange);
});