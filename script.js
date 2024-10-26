let inputbox = document.querySelector("input");
        let fromcurrency = document.getElementById("option1");
        let tocurrency = document.getElementById("option2");
        let btn = document.querySelector("button");
        let ans = document.getElementById("ans");
        

        //data fetch

        fetch("https://api.frankfurter.app/currencies") //https://api.exchangerate-api.com/v4/latest/USD
        .then((data)=> data.json())
        .then((data)=>
        {
            display(data); //console.log(data)
        })
        //display currency data
        function display(data)
        {
            let entries = Object.entries(data); //convert objects into an array
            for(i=0;i<entries.length;i++) //adding an option element
            {
               option1.innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
               option2.innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`; //adding currency on browser
               
            }
        }
        //adding click event for conversion

    btn.addEventListener("click",function()
    {
        let currency1 = option1.value; //hold values in a variable
        let currency2 = option2.value;
        let num = inputbox.value;
        if(currency1!==currency2)
        {
            convert(currency1,currency2,num)
        }
        else
        {
            alert("choose different countries");
        }
        
    })
    

    //converting the currency

    function convert(currency1,currency2,num) //https://api.exchangerate-api.com/v4/latest/USD 
    {
        let host = "api.frankfurter.app";
        fetch(`https://${host}/latest?amount=${num}&from=${currency1}&to=${currency2}`)
        .then((data) => data.json())
        .then((data) => {
            const convertedAmount = Object.values(data.rates)[0]; // Get the conversion rate
            ans.innerHTML = `${num} ${currency1} = ${convertedAmount.toFixed(2)} ${currency2}`; // Display the result
        }) 
    }
    
    
    
    
    
