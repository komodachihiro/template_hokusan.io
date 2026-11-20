/**
 * 北産歯科医院｜共通JavaScript
 * 1. スマートフォンのナビゲーション開閉
 * 2. トップページのメインビジュアル自動切り替え
 */

// --------------------------------------------------------------------------
// 1. スマートフォン用ナビゲーション
// --------------------------------------------------------------------------
const menuButton = document.querySelector('.hamb');
const navigation = document.querySelector('nav');

menuButton?.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', () => {
        navigation.classList.remove('menu-open');
    });
});

// --------------------------------------------------------------------------
// 2. メインビジュアルのスライドショー（5.5秒間隔）
// --------------------------------------------------------------------------
const slides = [...document.querySelectorAll('.hero-slide')];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (slides.length > 1 && !reducedMotion) {
    let currentSlide = 0;

    window.setInterval(() => {
        slides[currentSlide].classList.remove('is-active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('is-active');
    }, 5500);
}
