const projectTea = document.getElementById("project-tea");
const projectSystem = document.getElementById("reddit-lence");
const projectOil = document.getElementById("project-oil");
const infoTea = document.getElementById("info-tea");
const infoSystem = document.getElementById("reddit-lence-info");
const infoOil = document.getElementById("info-oil");
infoTea.style.display = "none";
infoSystem.style.display = "none";
infoOil.style.display = "none";

projectTea.addEventListener("mouseover", () => {
  infoTea.style.display = "block";
});
projectTea.addEventListener("mouseout", () => {
  infoTea.style.display = "none";
});

projectSystem.addEventListener("mouseover", () => {
  infoSystem.style.display = "block";
});
projectSystem.addEventListener("mouseout", () => {
  infoSystem.style.display = "none";
});

projectOil.addEventListener("mouseover", () => {
  infoOil.style.display = "block";
});
projectOil.addEventListener("mouseout", () => {
  infoOil.style.display = "none";
});

// infoTea.addEventListener('mouseover', () => {
//     infoTea.style.display = 'block';
// });
// infoTea.addEventListener('mouseout', () => {
//     infoTea.style.display = 'none';
// });

// infoSystem.addEventListener('mouseover', () => {
//     infoSystem.style.display = 'block';
// });
// infoSystem.addEventListener('mouseout', () => {
//     infoSystem.style.display = 'none';
// });

// infoOil.addEventListener('mouseover', () => {
//     infoOil.style.display = 'block';
// });
// infoOil.addEventListener('mouseout', () => {
//     infoOil.style.display = 'none';
// });
