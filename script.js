const gameContainer= document.querySelector(".container")
userResult = document.querySelector(".user_result img")
cpuResult = document.querySelector(".cpu_result img")
result = document.querySelector(".result")
optionImages = document.querySelectorAll(".option_image")
userPoints = document.getElementById("points1")
cpuPoints = document.getElementById("points2")
let x,y
x=0
y=0
//loop through each image
optionImages.forEach((image,index) =>{
    image.addEventListener("click", (e) =>{
        image.classList.add("active");
//loop through each image again
        optionImages.forEach((image2, index2)=>{
            index!==index2 &&  image2.classList.remove("active")
        })
        //get the source of clicked option image
        let imageSrc = e.target.querySelector("img").src;
        //set the user image to the clicked image
        userResult.src = imageSrc

        //generate random for cpu choice
        let r = Math.floor(Math.random()*3);
        
        let cpuImages = ["images/rock (1).png", "images/paper.png", "images/scissors (1).png"] 
        cpuResult.src = cpuImages[r];

        //assign letter to cpu option
        let cpuValue= ["R", "P", "S"][r];
        //assign letter on clicked option
        let userValue= ["R", "P", "S"][index]

        let outcomes={
            RR: "DRAW", RP: "CPU WINS", PS: "CPU WINS", SR: "CPU WINS", PR:"USER WINS", SP:"USER WINS", RS:"USER WINS", PP:"DRAW", SS:"DRAW",
        }
        let outcomeValue = outcomes[userValue+cpuValue];

        //display result
        let result = document.getElementById("rtext");
        result.innerText = `${outcomeValue}`
        if(outcomeValue==="CPU WINS")
        {
            x++;
        }
        else if(outcomeValue==="USER WINS"){
            y++;
        }
        cpuPoints.innerText = `${x}`;
        userPoints.innerText = `${y}`;
    })
})