function updateTime() {
    const now = new Date();
    const utcTime = now.toISOString().split('T')[1].split('.')[0];
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
    
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
    document.querySelector('[data-testid="currentDay"]').textContent = dayOfWeek;
}

// Update the time immediately and then every second
updateTime();
setInterval(updateTime, 1000);
