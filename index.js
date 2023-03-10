function historyIncome() {

    let income = [{
        "income": "salary",
        "amount": "3000",
        "category": "salary",
        "date": "2023-01-16",
        }, {
        "income": "refund",
        "amount": "120",
        "category": "rental",
        "date": "2023-01-14",
        }, {
        "income": "interest",
        "amount": "50",
        "category": "investment",
        "date": "2023-01-31",
    }]
    //Clear the current items
    //clearItems()

    //Add in the new items to localstorage
    console.log(income);
    localStorage.setItem('incomeItems',JSON.stringify(income))    
    printItemsTableIncome()
}

function clearItems() {
    localStorage.clear()
    console.log("Local storage cleared....")
    printItemsTable();
}

function addItemIcome() {
    console.log("adding Item...")

    //Declare an array for our ed items
    let income = [];

    //Check if anything is in localStorage
    if (localStorage.getItem('incomeItems')) {
        income = JSON.parse(localStorage.getItem('incomeItems'))

        var Table2 = document.getElementById("table-2");
        Table2.innerHTML = "";
    }

    //Declare on object
    incomeItem = {};

    //Pull the values out of the form
    incomeItem.income = document.getElementById("incomeName").value
    incomeItem.amount = document.getElementById("money").value
    incomeItem.category = document.getElementById("inCategory").value
    incomeItem.date = document.getElementById("IDate").value
    

    //Pushes object to the array
    income.push(incomeItem)

    //Push the whole array back up to LocalStorage
    localStorage.setItem('incomeItems', JSON.stringify(income))

    //Call print itemsTable
    printItemsTableIncome()
    chartDisplay();

}

let counter1 = 0;
let newTable1 = document.createElement("table");
newTable1.setAttribute("id", "table-2")

function printItemsTableIncome(){

    localStorage.setItem("th0", "Income");
    localStorage.setItem("th1", "Amount");
    localStorage.setItem("th2", "Category");
    localStorage.setItem("th3", "Date");
    let tableDataLength = 4;
    
    const thead = document.createElement("thead");
    for(let i = 0; i < tableDataLength; i++) {
        const th = document.createElement("th");
        th.textContent = localStorage.getItem(`th${i}`);
        thead.appendChild(th);
    }
    newTable1.appendChild(thead);
    
    income = JSON.parse(localStorage.getItem('incomeItems'))
    console.log(income);
    income.forEach( item => {
       
        let tdClass= counter1 %2 === 0 ? "even2" : "odd2";
        counter1++;
        let tr = document.createElement("tr");
        for(let i = 0; i < tableDataLength; i++) {
            const td = document.createElement("td");
            console.log(item[localStorage.getItem(`th${i}`).toLowerCase()]);
            td.textContent = item[localStorage.getItem(`th${i}`).toLowerCase()];
            td.setAttribute("class", tdClass);
            tr.appendChild(td);
        }
        newTable1.appendChild(tr);
    })    

    const newTableContainerIncome = document.querySelector("#newTableContainer-1");
    newTableContainerIncome.appendChild(newTable1);
    totalIcome();
    cleanstring();
    
}


const cleanstring = () =>{
    document.getElementById("money").value = "";
    document.getElementById("incomeName").value = "";
    document.getElementById("inCategory").value = "Choose Category";
    document.getElementById("IDate").value = "";
    
    
}

function totalIcome(){
    let total = 0;
    income = JSON.parse(localStorage.getItem('incomeItems'))
    income.forEach( item => {
        total += parseInt(item.amount);
    })
    document.getElementById("total-1").innerHTML = "Your total income : $"+total;
    return total;
}

historyIncome();