
const wordList = ["Front-End Developer", "UI/UX Explorer", "Data Analyst", "Video Editor", "Graphic Designer"];
const wordsContainer = document.querySelector(".words");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  let currentWord = wordList[wordIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }
  wordsContainer.textContent = currentWord.substring(0, charIndex);

  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => isDeleting = true, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % wordList.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
type();
/////////
let counters = document.querySelectorAll(".counter");
counters.forEach(function(el) {
  let current = 0;
  let max = el.getAttribute("data-max");

  function updateCounter() {
    if (current < max) {
      current++;
      el.textContent = current;
      setTimeout(updateCounter, 50);
    }
  }
  updateCounter();
});
////////
let loadMore = document.querySelector(".loadmore");
let hiddenProjects = document.querySelectorAll(".projects_section_container_hidden");
let projectsContainer = document.querySelector(".projects_section_containers");
hiddenProjects.forEach(function (el) {
   loadMore.addEventListener ('click', function(){
  el.classList.remove('hidden');
  loadMore.style.display = "none";
  projectsContainer.style.paddingBottom = "40px";
 });
 
});
 
