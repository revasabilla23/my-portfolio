const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const links = document.querySelectorAll("#nav-links a");

links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

function openCV() {
  document.getElementById("cvModal").style.display = "block";
}

function closeCV() {
  document.getElementById("cvModal").style.display = "none";
}

function openSertifikat(fileUrl) {
  const container = document.getElementById('sertifikatContainer');
  const extension = fileUrl.split('.').pop().toLowerCase();

  if (extension === 'pdf') {
    container.innerHTML = `<iframe src="${fileUrl}" width="100%" height="500px"></iframe>`;
  } else if (['jpg', 'jpeg', 'png'].includes(extension)) {
    container.innerHTML = `<img src="${fileUrl}" style="width:100%; max-height:500px; object-fit:contain;" />`;
  }

  document.getElementById('sertifikatModal').style.display = 'block';
}

function closeSertifikat() {
  document.getElementById('sertifikatModal').style.display = 'none';
  document.getElementById('sertifikatContainer').innerHTML = '';
}

