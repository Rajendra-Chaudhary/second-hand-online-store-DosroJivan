 const btns=[
    {
        id:1,
        name:'Kitchen Appliances'
    },
    {
        id:2,
        name:'Living Room Appliances'
    },
    {
        id:3,
        name:'Bathroom Appliances'
    },
    {
        id:4,
        name:'Laundry Room Appliances'
    },
    {
        id:5,
        name:'Home Office Appliances'
    },
 ]
 const filters=[...new Set(btns.map((btn)=>
    {return btn}))]

document.getElementById('category-btns').innerHTML=filters.map((btn)=>{
    var{name, id}=btn;
    return(
        "<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
    )
}).join('');