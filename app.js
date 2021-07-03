enquiryBtn.addEventListener("click", () => {
  overlay.classList.remove("hide");
  enquiryForm.classList.remove("hide");
});
overlay.addEventListener("click", () => {
  enquiryForm.classList.add("hide");
  SitePlanImage.classList.add("hide");
  overlay.classList.add("hide");
  showTheVideo.innerHTML = "";
  siteImageContainer.classList.add('hide'); 
});
let number = 0;

document.addEventListener('keydown', (e)=>{
  if(e.key == 'ArrowRight'){
    nextPic();
  }
  console.log(e.key);
})
document.addEventListener('keydown', (e) =>{
  if(e.key == 'ArrowLeft'){
    previousPic();
  }
})
function previousPic(){
  if (number > 0) {
    siteUpdateImage.setAttribute(
      "src",
      `./images/site-update/siteUpdate${number}.jpg`
    );
    number--;
    if (number === 0) {
      setTimeout(()=>{
        number = 3;
      },100);
    }
  }
}
function nextPic() {
  if (number < 4) {
    siteUpdateImage.setAttribute(
      "src",
      `./images/site-update/siteUpdate${number}.jpg`
    );
    number++;
    if (number === 4) {
      setTimeout(() => {
        number = 1;
      }, 100);
    }
  }
}
next.addEventListener("click", nextPic);
previous.addEventListener("click", previousPic);
for (let i = 0; i < siteImage.length; i++) {
  siteImage[i].addEventListener("click", function () {
    number = i + 1;
    setInterval(() => {
      siteUpdateImage.setAttribute(
          "src",
          `./images/site-update/siteUpdate${number}.jpg`
        );
  }, 50);
    setTimeout(()=>{
        siteImageContainer.classList.remove('hide');  
    },100)
    overlay.classList.remove("hide");
  });
}

videoViewer.addEventListener("click", () => {
  overlay.classList.remove("hide");
  showTheVideo.innerHTML = `<div class="video_show text-center animation">
    <video width="100%" controls autoplay>
      <source src="https://kgkrealty.com/jaipurproperty/SRP.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>`;
});

sitePlanViewer.addEventListener("click", () => {
  overlay.classList.remove("hide");
  SitePlanImage.classList.remove("hide");
});

sitePlanImage.addEventListener('click', ()=>{
    window.open(sitePlanImage.getAttribute('src'));
})

