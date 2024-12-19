$(window).on("load", function () {
    setTimeout(function () {
        $(".loader-wrapper").fadeOut("slow", function() {
            $(this).remove();
            $(".main-content").fadeIn("slow");
        });
    }, 3000); // Delays the fade-out by 3 seconds
});

const icon = document.getElementById("drpdownbtn");
const dropDown = document.getElementById("dropdown-content");
let timer;

icon.addEventListener('mouseover', () => {
    clearTimeout(timer);
    dropDown.style.display = 'block'
    console.log('Icon Hovered');
});

dropDown.addEventListener('mouseover', () => {
    clearTimeout(timer);
    dropDown.style.display = 'block'
    console.log('Icon Hovered');
});

icon.addEventListener('mouseout', () => {
    timer = setTimeout(() => {
        dropDown.style.display = 'none';
    }, 300);
});

dropDown.addEventListener('mouseout', () => {
    timer = setTimeout(() => {
        dropDown.style.display = 'none';
    }, 150);
});



