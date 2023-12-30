document.addEventListener("DOMContentLoaded", function () {
  const snowfallContainer = document.querySelector(".snowfall");
  const numSnowflakes = 80;

  for (let i = 0; i < numSnowflakes; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowfallContainer.appendChild(snowflake);
  }
});
