const wordDictionary = {
    "zonaec": "¡Correcto! Has encontrado la palabra secreta.",
    "escuela": "Estás cerca, sigue intentando.",
    "libro": "Casi lo logras, sigue probando."
};

document.getElementById('wordInput').addEventListener('input', function() {
    const input = this.value.toLowerCase();
    const resultText = document.getElementById('resultText');

    if (wordDictionary[input]) {
        resultText.textContent = wordDictionary[input];
    } else {
        resultText.textContent = '';
    }
});
