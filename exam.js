let date = new Date();
function getTime() {
    let m = date.getMonth();
    let d = date.getDate();
    let h = date.getHours();
    let min = date.getMinutes();
    let s = date.getSeconds();
    if (String(m).length < 2) {
        m = "0" + String(m+1);
    }
    if (String(d).length < 2) {
        d = "0" + String(d);
    }
    if (String(h).length < 2) {
        h = "0" + String(h);
    }
    if (String(min).length < 2) {
        min = "0" + String(min);
    }
    if (String(s).length < 2) {
        s = "0" + String(s);
    }
    return date.getFullYear() + "-" + String(m) + "-" + String(d) + " " + String(h) + ":" + min + ":" + s;
}
setInterval(() => {
    date = new Date();
    document.getElementById("time").textContent = getTime();
}, 10);
let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
let day = date.getDate();
function shade(){
    let today = day + months[date.getMonth()];
    let shade = document.getElementById(today);
    shade.style.backgroundColor = "rgb(169, 216, 116)";
    for (let m = 4; m < (date.getMonth()+2); m++) {
        if (m == 4) {
            for (let d = 28; d < 31; d++) {
                document.getElementById(d + months[m-1]).style.backgroundColor = "rgba(255, 41, 41, 0.5)";
            }
        } else  if(m==5) {
            for (let d = 1; d < day; d++) {
                document.getElementById(d + months[m-1]).style.backgroundColor = "rgba(255, 41, 41, 0.5)";
            }
        } else if(m==6) {
            for (let d = 0; d < day; d++) {
                document.getElementById(d + months[m-1]).style.backgroundColor = "rgba(255, 41, 41, 0.5)";
            }  
        }
        
    }
}
if (+date.getHours < 22) {
    setInterval(() => {
        shade()
    }, 60000) 
} else {
    setInterval(() => {
        shade()
    }, 1000)
}


function biophy() {
    document.getElementById("bio-chem").classList.remove("choosen");
    document.getElementById("Busi-combi-science").classList.remove("choosen");
    document.getElementById("chem-phy").classList.remove("choosen");
    document.getElementById("bio-phy").classList.add("choosen");
    console.log(document.getElementsByClassName("chem"));
    Array.from(document.getElementsByClassName("chem")).forEach(element => {
        element.style.display = "none";
    });
    Array.from(document.getElementsByClassName("phy")).forEach(element => {
        element.style.display = "inline-block";
    });
    Array.from(document.getElementsByClassName("bio")).forEach(element => {
        element.style.display = "inline-block";
    });
    Array.from(document.getElementsByClassName("bus")).forEach(element => {
        element.style.display = "none";
    });
    Array.from(document.getElementsByClassName("comb")).forEach(element => {
        element.style.display = "none";
    });
}
function chemphy() {
    document.getElementById("bio-chem").classList.remove("choosen");
    document.getElementById("Busi-combi-science").classList.remove("choosen");
    document.getElementById("chem-phy").classList.add("choosen");
    document.getElementById("bio-phy").classList.remove("choosen");
    
    Array.from(document.getElementsByClassName("chem")).forEach(element => {
        element.style.display = "inline-block";
    });
    Array.from(document.getElementsByClassName("phy")).forEach(element => {
        element.style.display = "inline-block";
    });
    Array.from(document.getElementsByClassName("bio")).forEach(element => {
        element.style.display = "none";
    });
    Array.from(document.getElementsByClassName("bus")).forEach(element => {
        element.style.display = "none";
    });
    Array.from(document.getElementsByClassName("comb")).forEach(element => {
        element.style.display = "none";
    });
}

function biochem() {
    document.getElementById("Busi-combi-science").classList.remove("choosen");
    document.getElementById("bio-phy").classList.remove("choosen");
    document.getElementById("chem-phy").classList.remove("choosen");
    document.getElementById("bio-chem").classList.add("choosen");
    document.getElementsByClassName("chem")[0].style.display = "inline-block";
    Array.from(document.getElementsByClassName("chem")).forEach(element => {
        element.style.display = "inline-block";
    });
    Array.from(document.getElementsByClassName("phy")).forEach(element => {
        element.style.display = "none";
    });
    Array.from(document.getElementsByClassName("bio")).forEach(element => {
        element.style.display = "inline-block";
    });
    Array.from(document.getElementsByClassName("bus")).forEach(element => {
        element.style.display = "none";
    });
    Array.from(document.getElementsByClassName("comb")).forEach(element => {
        element.style.display = "none";
    });
}

function business() {
    document.getElementById("Busi-combi-science").classList.add("choosen");
    document.getElementById("bio-chem").classList.remove("choosen");
    document.getElementById("chem-phy").classList.remove("choosen");
    document.getElementById("bio-phy").classList.remove("choosen");
    Array.from(document.getElementsByClassName("chem")).forEach(element => {
        element.style.display = "none";
    });
    Array.from(document.getElementsByClassName("phy")).forEach(element => {
        element.style.display = "none";
    });
    Array.from(document.getElementsByClassName("bio")).forEach(element => {
        element.style.display = "none";
    });
    Array.from(document.getElementsByClassName("bus")).forEach(element => {
        element.style.display = "inline-block";
    });
    Array.from(document.getElementsByClassName("comb")).forEach(element => {
        element.style.display = "inline-block";
    });
}