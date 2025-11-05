//антон наведи тут оптимизации, это писал гпт, потому что я не умею

//slide view
document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    const sections = document.querySelectorAll("main > section");
    let current = 0;
    let scrolling = false;
    function scrollToSection(index) {
        if (index < 0 || index >= sections.length) return;
        scrolling = true;
        sections.forEach((sec, i) => {
            sec.style.transition = "transform 1s ease";
            sec.style.transform = `translateY(${(i - index) * 100}vh)`;
        });
        setTimeout(() => scrolling = false, 1);
        current = index;
    }
    requestAnimationFrame(() => {main.classList.add("mathed");});

    window.addEventListener("wheel", e => {
        if (scrolling) return;
        if (e.deltaY > 0) scrollToSection(current + 1);
        else if (e.deltaY < 0) scrollToSection(current - 1);
    });

    window.addEventListener("keydown", e => {
        if (scrolling) return;
        if (e.key === "ArrowDown") scrollToSection(current + 1);
        if (e.key === "ArrowUp") scrollToSection(current - 1);
    });

// touch - beta, леха пофикси цез кал

// let touchStartY = 0;
// let touchEndY = 0;

// window.addEventListener("touchstart", e => {
//     touchStartY = e.touches[0].clientY;
// }, { passive: true });

// window.addEventListener("touchmove", e => {
//     touchEndY = e.touches[0].clientY;
// }, { passive: true });

// window.addEventListener("touchend", () => {
//     if (scrolling) return;
//     const delta = touchStartY - touchEndY;
//     if (Math.abs(delta) < 50) return; // игнорировать короткие движения
//     if (delta > 0) scrollToSection(current + 1);
//     else scrollToSection(current - 1);
// });

    sections.forEach((sec, i) => {
        sec.style.height = "100vh";
        sec.style.width = "100%";
        sec.style.position = "absolute";
        sec.style.top = "0";
        sec.style.left = "0";
        sec.style.transition = "transform 1s ease";
        sec.style.transform = `translateY(${i * 100}vh)`;
    });
    const hash = window.location.hash;if (hash) {
        const targetIndex = Array.from(sections).findIndex(sec => sec.id === hash.slice(1));
        if (targetIndex >= 0) {current = targetIndex;
        sections.forEach((sec, i) => {sec.style.transform = `translateY(${(i - current) * 100}vh)`;});
        } else {scrollToSection(0);}} 
    else {scrollToSection(0);}
    
});