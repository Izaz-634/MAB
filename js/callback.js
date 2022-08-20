// akta function er vitor parameter pass kore r akta function call kora

const takeOrder =  (customer, izaz)=> {
    console.log(`take order for ${customer}`);
    izaz(customer);
};

const processOrder = (customer,izaz)=> {
    console.log(`Processing order for ${customer}`);

    setTimeout(() => {
        console.log(`Cooking completed`);
        console.log(`Order completed for ${customer}`);
        izaz(customer);
    }, 3000);
}


const completeOrder = (customer)=>{
    console.log(`Completed order for${customer}`);
};

takeOrder("customer1",(customer)=>{
    processOrder(customer,(customer)=>{
        completeOrder(customer);
    });
});


console.log(`hello`);