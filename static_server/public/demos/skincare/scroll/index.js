import LocomotiveScroll from 'locomotive-scroll';

// Initialize Locomotive Scroll (horizontal direction)
const lscroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'horizontal'
});