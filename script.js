const ratingBtns = document.querySelectorAll(".rate");
const submitBtn = document.querySelector("#submit");
const mainCard = document.querySelector(".main-card");
const thankYouCard = document.querySelector(".thank-you-card");
const rated = document.querySelector("#rating-submitted");
let currentlySelectedBtn = null;

const modifyPrevBtns = () =>{

    for(let i=0; i<ratingBtns.length; i++){
        if(ratingBtns[i] === currentlySelectedBtn){
            break;
        }
        else{
            ratingBtns[i].style.backgroundColor = "#fc7613";
            ratingBtns[i].style.color = "white";
        }
    }

}


const rating = (evt) =>{
    const clickedBtn = evt.target;

    ratingBtns.forEach((btn)=>{
        btn.style.backgroundColor = "rgba(39,46,56,255)";
        btn.style.color = "hsl(217, 12%, 63%)";
    })

    clickedBtn.style.backgroundColor = "#fc7613";
    clickedBtn.style.color = "white";
    currentlySelectedBtn = clickedBtn;

    modifyPrevBtns()
}

const submit = (evt) => {
    rated.innerText = currentlySelectedBtn.innerText
    mainCard.style.display = "None";
    thankYouCard.style.display = "Block";

}


ratingBtns.forEach((btn)=>{
    btn.addEventListener("click",rating)
})

submitBtn.addEventListener("click",submit)