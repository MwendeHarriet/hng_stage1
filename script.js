function updateTime() {
    const now = new Date();
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const utcSeconds = now.getUTCSeconds();

    const eatHours = (utcHours + 3) % 24;
    const eatMinutes = utcMinutes < 10 ? `0${utcMinutes}` : utcMinutes;
    const eatSeconds = utcSeconds < 10 ? `0${utcSeconds}` : utcSeconds;

    const eatTime = `${eatHours < 10 ? '0' + eatHours : eatHours}:${eatMinutes}:${eatSeconds}`;
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

    document.querySelector('[data-testid="currentTimeEAT"]').textContent = eatTime;
    document.querySelector('[data-testid="currentDay"]').textContent = dayOfWeek;
}

// Update the time immediately and then every second
updateTime();
setInterval(updateTime, 1000);
