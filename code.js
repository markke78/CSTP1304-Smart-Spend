function chartDisplay(){
    let ctx = document.getElementById('chart').getContext('2d');
    let inCart=totalIcome();
    let outCart=totalPrice();
    let chart = new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ["Income", "Expenses"],
        datasets: [{
            label: '',
            data: [inCart, outCart,0],

            backgroundColor: [                
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [                
                'rgba(54, 162, 235, 1)',
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1
            }]
        }
    });

    let goalPrice = document.getElementById('iphone').innerText;
    let goalReached = goalPrice-(inCart-outCart);
    document.getElementById("reached").innerHTML = "You need $"+goalReached + " to reach your goal";

}



chartDisplay();
