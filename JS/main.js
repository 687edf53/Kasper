// Start Global
const toggleMenu = document.querySelector(".toggle-menu");
const bullets = document.querySelectorAll(".bullets li");
const backgroundChangeBtn = document.querySelectorAll(".background-change");
const headerH2 = document.querySelector(".landing .content h2");
const headerP = document.querySelector(".landing .content p");
const imgContainer = document.querySelector('.imgs-container');
const imgContainerBoxes = document.querySelectorAll('.imgs-container .box');
const shuffleLinks = document.querySelectorAll('.shuffle li');
// End Global

// Start Header
let landingContent = [
  {
    0: "Why Do You Choose Us",
    1: "Why Do you Choose Us this is a very important question you can choose use because we are have a very large of experience",
  },
  {
    0: `Hello World! <br> We Are Kasper We Make Art.`,
    1: `Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh
    pulvinar a. Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
    tincidunt.`,
  },
  {
    0: "I Am Mohamed Hossam",
    1: "I am Mohamed Hossam. i am a web developer and i have a lot of projects you can see it on my <a target='_blank' href='https://github.com/687edf53'>Github profile</a> if you like my service you can contact with me",
  },
];
let i = 1;
toggleMenu.onclick = () => {
  toggleMenu.classList.toggle("toggle-active");
};
bullets.forEach((btn) => {
  btn.onclick = () => {
    bullets.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  };
});
backgroundChangeBtn[0].onclick = () => {
  i++;
  if (i === landingContent.length) {
    i = 0;
  }
  dotsActive();
  headerH2.innerHTML = landingContent[i][0];
  headerP.innerHTML = landingContent[i][1];
};
backgroundChangeBtn[1].onclick = () => {
  i--;
  if (i < 0) {
    i = landingContent.length - 1;
  }
  dotsActive();
  headerH2.innerHTML = landingContent[i][0];
  headerP.innerHTML = landingContent[i][1];
};
function dotsActive() {
  bullets.forEach((dot) => {
    dot.classList.remove("active");
    if (i == dot.dataset.index) {
      dot.classList.add("active");
    }
  });
  console.log(i)
}
bullets.forEach((dot) => {
  dot.onclick = () => {
    i = dot.dataset.index;
    bullets.forEach(dot => {
      dot.classList.remove('active')
    })
    dot.classList.add('active')
    headerH2.innerHTML = landingContent[i][0];
    headerP.innerHTML = landingContent[i][1];
    console.log(i)
  };  
});
// End Header


// Start Portfolio
shuffleLinks.forEach(link => {
  link.onclick = () => {
    shuffleLinks.forEach(nestLink => {
      nestLink.classList.remove("active");
    })
    link.classList.add("active");
    let filteredBoxes = Array.from(imgContainerBoxes).filter((box) => {
      if (box.children[1].children[1].innerHTML.includes(link.innerHTML)) {
        return box.children[1].children[1].innerHTML.includes(link.innerHTML);
      } else if (link.innerHTML === 'All') return box.children
      else {
        return null
      }
    });
    imgContainer.innerHTML = "";
    for(let i = 0; i < filteredBoxes.length; i++) {
      imgContainer.appendChild(filteredBoxes[i]);
    }
  }
})
// End Portfolio