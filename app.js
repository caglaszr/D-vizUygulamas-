const currencyFirst = document.getElementById('currencyFirst');
const currencySecond = document.getElementById('currencySecond');
const count = document.getElementById('count');
const equal = document.getElementById('equal');
const excangeRate = document.getElementById('excangeRate');

updateRate();

function updateRate(){
    fetch(` https://v6.exchangerate-api.com/v6/35b6b2ed5de4deeaa97261c9/latest/${currencyFirst.
    value}`
    ).then((res)=>res.json()).then((data)=>{
        console.log(data);
        const rate = data.conversion_rates[currencySecond.value];

        excangeRate.textContent =`1 ${currencyFirst.value} = ${rate} ${currencySecond.value}`;

        equal.textContent = (count.value * rate).toFixed(2);
    })
}

currencyFirst.addEventListener('change',updateRate);
currencySecond.addEventListener('change',updateRate);
count.addEventListener('input',updateRate);