  const btn = document.getElementById("readMoreBtn");
  const text = document.getElementById("moreText");

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    text.classList.toggle("hidden");

    btn.textContent = text.classList.contains("hidden")
      ? "بیشتر"
      : "کمتر";
  });