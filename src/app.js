var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color

const helperAdd = function(chocolates,color,count){
    for(let i=0;i<count;i++){chocolates.unshift(color)};
}

function addChocolates(chocolates, color, count){
    return count<=0 ? "Number cannot be zero/negative" : helperAdd(chocolates,color,count);
}


//Progression 2: Remove ___ chocolates from the top the dispenser

const helperRemove = function(chocolates, count){
    var removedChocolates = [];
    while(count>0){
        removedChocolates.push(chocolates.shift());
        count-=1;
    }
    return removedChocolates;
}

function removeChocolates(chocolates, count){
    const lengthOfChocolatesStore = chocolates.length;
    return count<=0 ? "Number cannot be zero/negative" :lengthOfChocolatesStore<count ? 
    "Insufficient chocolates in the dispenser" : helperRemove(chocolates,count);
}


//Progression 3: Dispense ___ chocolates

const helperDispense = function(chocolates, number){
    const dispensedChocolates = [];
    while(number>0){
        number-=1;
        dispensedChocolates.push(chocolates.pop());
    }
    return dispensedChocolates;
}
function dispenseChocolates(chocolates, number){
    const lengthOfChocolatesStore = chocolates.length;
    return number<=0 ? "Number cannot be zero/negative" :lengthOfChocolatesStore<number ? 
    "Insufficient chocolates in the dispenser" : helperDispense(chocolates,number);

}


//Progression 4: Dispense ___ chocolates of ____ color

function dispenseChocolatesOfColor(chocolates, number, color){
    return dispenseChocolates(chocolates,number);
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

const helperNoOfChocolates = function(chocolates){
    const ans = [];
    const referenceChocolates = ["green", "silver", "blue", "crimson", "purple", "red", "pink"];
    referenceChocolates.forEach(refChocolate => {
        let counter = 0;
        chocolates.forEach(chocolate => {
            if(chocolate==refChocolate){
                counter+=1;
            }
        })
        counter>0?ans.push(counter):null;
    });
    return ans;
}
function noOfChocolates(chocolates){
    return helperNoOfChocolates(chocolates);
    
}
//Progression 6: Sort chocolates based on count in each color. Return array of colors

const helperSortChocolates = function(chocolates){
    let ans = [];
    let store = {};
    chocolates.sort();
  
    for(let i=0;i<chocolates.length;i++){
        let counter = 0;
        for(let j=0;j<chocolates.length;j++){
            if(chocolates[i]==chocolates[j]){
                counter+=1;
            }
        }
  
        store[chocolates[i]] = counter;
    }
    const sortable = Object.fromEntries(
        Object.entries(store).sort(([,a],[,b]) => b-a));

      
  
    Object.keys(sortable).forEach(key=>{
        for(let i=0; i<sortable[key]; i++){
          ans.push(key)
        }
    })
  
    return ans;
  
    
  }
  
  function sortChocolateBasedOnCount(chocolates){
    finalAns = helperSortChocolates(chocolates);
    return finalAns;
  }
//Progression 7: Change ___ chocolates of ____ color to ____ color

const helperToChangeChocolateColor = function(chocolates, number, color, finalColor){
    for(let i=0; i<chocolates.length;i++){
        if(chocolates[i]==color){
            chocolates[i] = finalColor;
        }
    }
    return chocolates;
}

function changeChocolateColor(chocolates, number, color, finalColor){
    return number<=0 ? "Number cannot be zero/negative" : color==finalColor ? "Can't replace the same chocolates" : 
    helperToChangeChocolateColor(chocolates, number, color, finalColor);
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]


function changeChocolateColorAllOfxCount(chocolates, color, finalColor){
    const changedColor =  helperToChangeChocolateColor(chocolates,chocolates.length,color,finalColor);
    counter=0;
    changedColor.forEach(chocolate=>{
        chocolate==finalColor?counter+=1:counter+=0;
    })
    return color==finalColor ? "Can't replace the same chocolates" :[counter,changedColor];
}

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
