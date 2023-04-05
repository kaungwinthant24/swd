// variables
const services = [
    {
        id: 1,
        title: "Domain Service",
        price: 15
    },
    {
        id: 2,
        title: "Hosting Service",
        price: 30
    },
    {
        id: 3,
        title: "Web Design Service",
        price: 150
    },
    {
        id: 4,
        title: "Maintenance Service",
        price: 100
    },
    
];

// selectors
const invoiceForm = document.querySelector("#invoiceForm");
const selectServices = document.querySelector("#selectServices");
const quantity = document.querySelector("#quantity");
const tbody = document.querySelector("#tbody");
const subTotal = document.querySelector("#subTotal");
const tax = document.querySelector("#tax");
const totalCost = document.querySelector("#totalCost");

// function 
const createTr = (service,quantity) => {
    const tr = document.createElement("tr");
    const total = service.price * quantity;
    tr.innerHTML = `
    <td class="d-flex justify-content-between">${service.title}
    <i class="bi bi-trash3 text-danger del-btn"></i></td>
    <td class="text-end">${quantity}</td>
    <td class="text-end">${service.price}</td>
    <td class="text-end each-totals">${total}</td>
    `
    return tr;
}

const findTax = (amount,percentage=5) => {
    return amount * percentage/100;
}

const findSubTotal = () => {
    const eachTotals = document.querySelectorAll(".each-totals");
    // method 1
    // let sumTotal = 0;
    // eachTotals.forEach(each => {
    //     sumTotal += parseFloat(each.innerText);
    // });
    // return sumTotal;

    // method2
    const initialValue = 0;
    const sumTotal = [...eachTotals].reduce((pv,cv)=>pv+parseFloat(cv.innerText),initialValue);

    subTotal.innerText = sumTotal;
    tax.innerText = findTax(sumTotal);
    totalCost.innerText = sumTotal + findTax(sumTotal);
}

// processes or tasks
// service option loop 
services.forEach(service => {
    // selectServices.append(new Option(service.title,service.price));
    selectServices.append(new Option(service.title,service.id));
});

//data collect from form
invoiceForm.addEventListener("submit",event=>{
    event.preventDefault();

    // console.log(selectServices.value,quantity.valueAsNumber,selectServices.querySelector("option:checked").innerText);
    // console.log([...selectServices.children].find(el => el.selected).innerText,selectServices.value,quantity.valueAsNumber);
    // console.log(selectServices.value,quantity.valueAsNumber,services.find(service => service.id == selectServices.value));

    const selectedService = services.find(service => service.id  == selectServices.value);
    // console.log(selectedService);
    tbody.append(createTr(selectedService,quantity.valueAsNumber));

    // subTotal.innerText = findSubTotal();
    // tax.innerText=findTax(findSubTotal());

    findSubTotal();
    invoiceForm.reset(); // we can use reset method only if includes form ele in html
});