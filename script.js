// Khởi tạo Swiper slider
const swiper = new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-slide-button.swiper-button-next',
        prevEl: '.swiper-slide-button.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

// Thêm sự kiện cho nút Message
document.querySelector('.buttons .btn:first-child').addEventListener('click', () => {
  alert('Gửi tin nhắn đến Nguyễn Lê Huỳnh');
});

// Thêm sự kiện cho nút Follow Me
document.querySelector('.buttons .btn:last-child').addEventListener('click', () => {
  alert('Bạn đã theo dõi Nguyễn Lê Huỳnh');
});
