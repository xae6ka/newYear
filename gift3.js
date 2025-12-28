const ta1 = document.getElementById('ta1');
const btn1 = document.getElementById('btn1');

btn1.onclick = function() {
    localStorage.setItem('data', ta1.value)
    btn1.textContent = 'Сообщение отправлено!'
}

ta1.value = localStorage.getItem('data');
