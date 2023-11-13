const showMoreBtn = document.getElementById("showmore");
const seemore1s = document.getElementsByClassName("seeMore1");
const seemore2s = document.getElementsByClassName("seeMore2");
const boughtItem = document.getElementById("boughtItem");
let showNum = 0;
showMoreBtn.addEventListener("click",()=>{
  if(showNum==0){
    for (let i = 0; i< seemore1s.length; i++) {
        seemore1s[i].style.display = "block";
      }
    showNum++;
  }else if(showNum==1){
    for (let i = 0; i< seemore1s.length; i++) {
        seemore1s[i].style.display = "block";
      }
      for (let i = 0; i< seemore2s.length; i++) {
        seemore2s[i].style.display = "block";
      }
      showNum++;
      showMoreBtn.innerHTML = "See Less"
  }else if(showNum==2){
    for (let i = 0; i< seemore1s.length; i++) {
        seemore1s[i].style.display = "none";
      }
      for (let i = 0; i< seemore2s.length; i++) {
        seemore2s[i].style.display = "none";
      }
      showNum=0;
      showMoreBtn.innerHTML = "See More"
  }
})

const dishes = document.getElementsByClassName("dish");
const tutoH1 = document.getElementsByClassName("tutoH1")
 for (let i = 0; i < dishes.length; i++) {
   dishes[i].addEventListener("click", e =>{
    let tar = e.target;
    let patentEle = tar.parentElement;
    tutoH1.innerHTML= "red";
   })
} 
const sidebar = document.getElementById("sidebar")

function cross(){
   sidebar.style.display = "none";
}
function pricing(){
  sidebar.style.display = "block";
}

