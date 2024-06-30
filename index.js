let buttons = document.querySelector(".buttons");
let screen = document.querySelector(".text");

console.log(buttons);

let currentScreen = " ";

buttons.addEventListener("click",(e) => {

    let clicked = e.target.innerHTML;
    let number;
    let operation;
    switch(clicked)
    {
        case '0':
            number = 0;
            break;
        case '1':
            number = 1
            break;
        case '2':
            number = 2;
            break;
        case '3':
            number = 3;
            break;
        case '4':
            number = 4
            break;
        case '5':
            number = 5
            break;
        case '6':
            number = 6
            break;
        case '7':
            number = 7
            break;
        case '8':
            number = 8
            break;
        case '9':
            number = 9
            break;
    }


     if (operation == "AC")
        {
            screen.innerText = "";
            currentScreen = "";
        }

    else if (number != undefined )
        {screen.innerText=number;currentScreen+=number}

})


let operationButton = document.querySelectorAll(".operation");


operationButton.forEach(button => {

    button.addEventListener("click",(e) => {
        let clicked = e.target.innerHTML;
    
    
        switch(clicked)
        {
            case '+':
                operation = '+';
                break;
            case '-':
                operation = '-';
                break;
            case 'x':
                operation = '*';
                break;
            case '/':
                operation = '/';
                break;
        }
    
        let currentScreenArr = Array.from(currentScreen)
        console.log("this is: " ,currentScreenArr)
        if (currentScreenArr.includes("+") || currentScreenArr.includes("-") || currentScreenArr.includes("/") || currentScreenArr.includes("*"))
            {
            let expression = currentScreen;
            let result = eval(expression);
            console.log(expression)
            screen.innerText = result;
            currentScreen = result;
            }
        
        else if (clicked == '=')
            {
                let expression = currentScreen;

                console.log(expression)
                try{
                let result = eval(expression);

                }
                catch(error){
                    console.log("this is: ", expression)

                }
                console.log(result, "hello")
                screen.innerText = result;
                currentScreen = result;
    
            }
    
        else{
            // screen.innerText += clicked;
            currentScreen += operation;
            console.log(currentScreen)
        }
    
    
    })

})
