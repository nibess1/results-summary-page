import data from './data.json' assert { type: 'json' };
const summary = document.querySelector('.summaryContainer')
const result = document.querySelector('.result')
let total = 0;

const calcTotal = data.forEach(element => {
    return total += element.score;
})

const colors = ["hsla(0, 100%, 67%, ",
    "hsla(39, 100%, 56%, ",
    "hsla(166, 100%, 37%, ",
    "hsla(234, 85%, 45%, "]

    let count = -1;

    const keys = data.map(element => {
        count++
        return (`<li class="summary-item" style="background: ${colors[count]} 0.09)"><span><img src="${element.icon}"><h3 style ="color:${colors[count]} 1)">${element.category}</h3></span><p><span>${element.score}</span> / 100</p></li>`)
    });





const ul = document.createElement("ul");
ul.classList.add("summary_ul")
ul.innerHTML = keys.join("").split(",")
summary.appendChild(ul);
result.innerText = Math.floor(total/data.length);