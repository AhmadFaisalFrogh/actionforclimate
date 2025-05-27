
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll("nav ul li a");

    navItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            const sectionId = this.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
function openForm() {
    document.getElementById("joinUsForm").style.display = "block";
}

function openModal() {
    document.getElementById("joinUsModal").style.display = "block";
}

function closeModal() {
    document.getElementById("joinUsModal").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("joinUsModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

