function fetchColors() {
  const selectedMode = document.getElementById('color-modes').value;
  const inputColor = document.getElementById('color-input').value.slice(1);
  const url = 'https://www.thecolorapi.com/scheme?';
  const endpoint = `${url}mode=${selectedMode}&hex=${inputColor}`;

  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => renderColors(data.colors))
    .catch((err) => console.log(err));
}

function renderColors(colors) {
  const colorsContainer = document.getElementById('colors-container');
  colorsContainer.innerHTML = '';

  const colorElements = colors.map((color) => {
    const colorCode = color.hex.value;
    const newDiv = document.createElement('div');
    newDiv.className = 'color';
    newDiv.setAttribute('data-color', colorCode);
    newDiv.innerHTML = `
      <div class="colored-div" 
        style="background-color:${colorCode}" 
        data-color="${colorCode}">
      </div>
      
      <div class="color-code">
        <p data-color="${colorCode}">${colorCode}</p>
      </div>`;
    return newDiv;
  });

  colorsContainer.append(...colorElements);
}

document.getElementById('form-color').addEventListener('submit', (e) => {
  e.preventDefault();
  fetchColors();
});

fetchColors();
