document.addEventListener('DOMContentLoaded', function() {
    const lights = document.querySelectorAll('.light');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    let animationId = null;
    let isRunning = false;
    
    // 定义7种颜色
    const colors = [
        '#FF5733', '#33FF57', '#3357FF', 
        '#F3FF33', '#FF33F3', '#33FFF3', '#FF8C33'
    ];
    
    // 启动动画
    function startAnimation() {
        if (isRunning) return;
        isRunning = true;
        
        let currentColorIndex = 0;
        
        function animate() {
            // 为每个灯设置不同的颜色（循环）
            lights.forEach((light, index) => {
                // 计算当前灯应该显示的颜色索引
                const colorIndex = (currentColorIndex + index) % colors.length;
                light.style.backgroundColor = colors[colorIndex];
                
                // 添加闪烁效果（通过改变透明度）
                const opacity = 0.7 + Math.sin(Date.now() / 300 + index * 0.5) * 0.3;
                light.style.opacity = opacity;
                
                // 添加轻微的缩放效果增强视觉效果
                const scale = 1 + Math.sin(Date.now() / 500 + index * 0.3) * 0.05;
                light.style.transform = `scale(${scale})`;
            });
            
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            animationId = requestAnimationFrame(animate);
        }
        
        animate();
    }
    
    // 停止动画
    function stopAnimation() {
        if (!isRunning) return;
        isRunning = false;
        cancelAnimationFrame(animationId);
        
        // 重置灯的初始状态
        lights.forEach((light, index) => {
            light.style.opacity = '0.9';
            light.style.transform = 'scale(1)';
            light.style.backgroundColor = colors[index];
        });
    }
    
    // 按钮事件监听
    startBtn.addEventListener('click', startAnimation);
    stopBtn.addEventListener('click', stopAnimation);
    
    // 初始化时显示初始状态
    lights.forEach((light, index) => {
        light.style.backgroundColor = colors[index];
    });
});