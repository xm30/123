// 班级学生名单 - 请替换为实际名单
const students = [
    "电棍", "otto", "♿", "吉吉国王", "    ","炫狗","棍父"
];

// 获取DOM元素
const displayArea = document.getElementById('displayArea');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

let timer = null;
let isRunning = false;

// 开始随机点名
startBtn.addEventListener('click', function() {
    if (isRunning) return;
    
    isRunning = true;
    timer = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * students.length);
        displayArea.textContent = students[randomIndex];
    }, 100);
});

// 停止随机点名
stopBtn.addEventListener('click', function() {
    if (!isRunning) return;
    
    clearInterval(timer);
    isRunning = false;
});