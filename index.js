let result = "";
var fresult;
var hasResult;
// var operators=["*","-","/"]
let buttons = document.querySelectorAll(".button");
var a = document.getElementsByClassName("output");
Array.from(buttons).forEach((button) => {
	button.addEventListener("click", (e) => {
		if (e.target.innerHTML == "=") {
            
		

			// validation for "Syntax ERROR"
			var lastVal;
			fresult = result.split("");
			lastVal = fresult[fresult.length - 1];
			switch (lastVal) {
				case "*":
					document.querySelector(".input").value = "Syntax ERROR";
					break;
				case "-":
					document.querySelector(".input").value = "Syntax ERROR";
					break;
				case "/":
					document.querySelector(".input").value = "Syntax ERROR";
					break;
				case "+":
					document.querySelector(".input").value = "Syntax ERROR";
					break;

				default:
					break;
			}

			// fresult.forEach((item)=>{
			//     if (item==="*") {
			//         console.log("yesss")
			//     }
			// })

			result = eval(result);

			// validation for "Math ERROR"
			if (!isFinite(result)) {
				// console.log("isFinite")
				document.querySelector(".input").value = "Math ERROR";
				return;
			}
			document.querySelector("input").value = result;
		} else if (e.target.innerHTML == "C") {
			result = "";
			document.querySelector("input").value = result;
			document.querySelector("input").value = result;
		} else {
			// console.log(e.target.innerHTML);
			result = result + e.target.innerHTML;
			document.querySelector("input").value = result;
		}
	});
});
