
//  Change document background color to  
// silver 

//  Change the font color for h1 title tag to
// green

//  Change the font case for h3 title tags to 
//  uppercase

//  Add one more fruit to the fruits list

// Add one more vegetable to the vegetables 
// list 



// const img = document.createElement("img");
//    document.getElementById('groc').style.width='50%' 
//    document.getElementById('groce').style.height=


document.getElementById("heading").style.backgroundColor="silver";
document.getElementById('title').style.color='green'
document.getElementById('title').style.fontSize='80px'
document.getElementById('fruit').style.uppercase


let list=document.getElementById('fruList')
let newItem=document.createElement('li')
newItem.textContent="StrawBerries"
list.appendChild(newItem)



let vegetable=document.getElementById('vegList')
let newVeg=document.createElement('li')
newVeg.textContent="Spinach"
vegetable.appendChild(newVeg)


let title = document.getElementById("Vegetables");

title.textContent = title.textContent.toUpperCase();





