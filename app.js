function Total () {
    const words = document.getElementById('words').value;
    const lengTh = words.length
    const result = document.getElementById('result');
    result.innerHTML = `${lengTh} Words`
}