// Profile Picture

r = document.getElementById("pp_r")
g = document.getElementById("pp_g")
b = document.getElementById("pp_b")

onmousemove = function (e) {
    if (this.window.innerWidth > 600) {
        center = {}
        center.x = window.innerWidth / 2
        center.y = window.innerHeight / 2

        cursor = {}
        cursor.x = e.clientX - center.x
        cursor.y = e.clientY - center.y

        r.style.transform = 'rotate(' + cursor.x / 50 + 'deg)';
        g.style.transform = 'rotate(' + cursor.x / 100 + 'deg)';
        b.style.transform = 'rotate(' + cursor.x / 150 + 'deg)';
        r.style.left = cursor.x / center.x * 20 + "px"
        r.style.top = cursor.y / center.y * 15 + "px"

        g.style.left = cursor.x / center.x * 10 + 8 + "px"
        g.style.top = cursor.y / center.y * 12.5 + 8 + "px"

        b.style.left = cursor.x / center.x * 5 + 16 + "px"
        b.style.top = cursor.y / center.y * 6.25 + 16 + "px"
    }
}