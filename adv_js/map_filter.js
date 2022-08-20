const ar =[1,3,5,7,9];

const a = ar.map(function(element){
    return element*element;
});

const boro =ar.filter(x=>x<7);
console.log(boro);

const students =[
    {id:11,name:'Izaz'},
    {id:21,name:'Akash'},
    {id:31,name:'Lamia'}
];

const st_name=[];
for(let i=0;i<students.length;i++){
    st_name.push(students[i].name);
    const st = "p";
};
const st ="l";
console.log(st_name);

names = students.map(x=>x.name);
console.log(names);