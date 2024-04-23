let resume = document.querySelector(".resume");
let about = document.querySelector(".about");
let resumeBtn = document.getElementById("resume-btn")
let aboutBtn = document.getElementById("about-btn");
let showContactsDiv = document.getElementById("show-contacts-div");
let show = document.getElementById("show");
let arrow = document.getElementById("arrow");
showContactsDiv.style.display = "none";
show.addEventListener("click",function(){
    if(showContactsDiv.style.display === "none") {
        showContactsDiv.style.display = "block";
    } else {
        showContactsDiv.style.display = "none";
    }
    
})

let down = document.querySelector(".fa-arrow-down");
arrow.addEventListener("click",function(){
    if(showContactsDiv.style.display === "none") {
        showContactsDiv.style.display = "block";
        down.classList.add( "fa","fa-arrow-up");
    } else {
        showContactsDiv.style.display = "none";
        down.classList.remove("fa","fa-arrow-up")
        down.classList.add("fa","fa-arrow-down")
        
    }
    
})


resume.classList.add("none")
resumeBtn.addEventListener("click",function() {
    about.classList.add("none");
    resume.classList.remove("none");
})

aboutBtn.addEventListener("click",function() {
    resume.classList.add("none");
    about.classList.remove("none");
    progressBarAndCountNumber();
})

    const progress = document.querySelectorAll('.progress-done');

    progress.forEach(progress => {
        progress.style.width = progress.getAttribute('data-done') + '%';
        progress.style.opacity = 1;
      });

      function progressBarAndCountNumber () {
        const progress = document.querySelectorAll('.progress');
        let count = 0;
        let MAX = 90;
    
        let run = setInterval(() => {
            count++;
            progress.forEach(element => {
                if (count <= element.dataset.progress) {
                    element.parentElement.style.background = `conic-gradient(#CEB15A ${count}%, #212428 0)`;
                    element.firstElementChild.textContent = `${count}%`;
                };
                if (count == MAX) {
                    clearInterval(run);
                };
            });
        }, 20);
    }
    
    progressBarAndCountNumber();
    

    
    


