function history() {

    let expense = [{
        "product": "food",
        "price": "2000",
        "category": "grocery",
        "date": "8/19/2020",
        }, {
        "product": "coffee",
        "price": "12",
        "category": "meal",
        "date": "8/16/2020",
        }, {
        "product": "Computer",
        "price": "1500",
        "category": "education",
        "date": "8/15/2020",
    }]
    //Clear the current items
    //clearItems()

    //Add in the new items to localstorage
    localStorage.setItem('items',JSON.stringify(expense))    
    printItemsTable()
}

function clearItems() {
    localStorage.clear()
    console.log("Local storage cleared....")
    printItemsTable();
}

function addItem() {
    console.log("adding Item...")

    //Declare an array for our ed items
    let expense = [];

    //Check if anything is in localStorage
    if (localStorage.getItem('items')) {
        expense = JSON.parse(localStorage.getItem('items'))

        var Table = document.getElementById("table-1");
        Table.innerHTML = "";
    }

    //Declare on object
    expenseItem = {};

    //Pull the values out of the form
    expenseItem.product = document.getElementById("product").value
    expenseItem.price = document.getElementById("expense").value
    expenseItem.category = document.getElementById("category").value
    expenseItem.date = document.getElementById("date").value
    

    //Pushes object to the array
    expense.push(expenseItem)

    //Push the whole array back up to LocalStorage
    localStorage.setItem('items', JSON.stringify(expense))



    //Call print itemsTable
    printItemsTable()
    chartDisplay();

}

let counter = 0;
let newTable = document.createElement("table");
newTable.setAttribute("id", "table-1")

function printItemsTable(){

    localStorage.setItem("th0", "Product");
    localStorage.setItem("th1", "Price");
    localStorage.setItem("th2", "Category");
    localStorage.setItem("th3", "Date");
    let tableDataLength = 4;
    
    const thead = document.createElement("thead");
    for(let i = 0; i < tableDataLength; i++) {
        const th = document.createElement("th");
        th.textContent = localStorage.getItem(`th${i}`);
        thead.appendChild(th);
    }
    newTable.appendChild(thead);
    
    expense = JSON.parse(localStorage.getItem('items'))
    expense.forEach( item => {
       
        let tdClass= counter%2===0 ? "even1" : "odd1";
        counter++;
        let tr = document.createElement("tr");
        for(let i = 0; i < tableDataLength; i++) {
            const td = document.createElement("td");
            td.textContent = item[localStorage.getItem(`th${i}`).toLowerCase()];
            td.setAttribute("class", tdClass);
            tr.appendChild(td);
        }
        newTable.appendChild(tr);
    })    

    const newTableContainer = document.querySelector("#newTableContainer");
    newTableContainer.appendChild(newTable);
    totalPrice();
    
}

function totalPrice(){
    let total = 0;
    expense = JSON.parse(localStorage.getItem('items'))
    expense.forEach( item => {
        total += parseInt(item.price);
    })
    document.getElementById("total").innerHTML = "Your total expenses : $"+total;
    return total;
}

history();

