window.addEventListener("load", () => {  //after the content is loaded the code in here is gonna run
    const sounds = document.querySelectorAll(".sounds"); //to get each sound from our index.html , all sounds are stored here
    const pads = document.querySelectorAll(".pads div"); // we can also store pads in here and get all the div's
    const visual = document.querySelector(".visual");
    const colors = [
        "black",
        "purple", 
        "green",
        "yellow",
        "red",
        "blue"
    ];

//lets get going with the souunds in here
    pads.forEach((pad, index) => {     // we have access to all the single pads in here
        pad.addEventListener("click", function() { 
            sounds[index].currentTime = 0;
            sounds[index].play();
            
            createBubbles(index);
        });
    });
    
    //create a func that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
    };
});
