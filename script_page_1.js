"use strict"

const button=document.getElementById("button_1")
const result_field=document.getElementById("result_field")
const correct_field=document.getElementById("correct_field")
const error_field=document.getElementById("error_field")



button.addEventListener("click", ()=> {

    let n=document.getElementById("input_1")
    let epochs=document.getElementById("epochs_1")

    n=n.value
    epochs=epochs.value

    let x=n/2
    let y=0
    let error=0
    let correct_value=Math.sqrt(n)
    let improvement=0 
    let array_x=[n, x]
    let array_improvement=[((n-x)/x)*100]
    let array_epochs=[]

    for (let i=0; i<epochs; i++) 
    {
        y=(x+(n/x))/2
        improvement=((x-y)/y)*100
        x=y
        array_x.push(y)
        array_improvement.push(improvement)
        array_epochs.push(i)
    }

    error=((y-correct_value)/y)*100

    result_field.textContent= "Approximation: " + y.toFixed(3)
    correct_field.textContent= "Correct value: " + correct_value.toFixed(3)
    error_field.textContent= "Error percentage: " + error.toPrecision(2) + " %"

    const TESTER = document.getElementById('tester');
    
    var layout = {
        title:"Result over epochs",
        xaxis:
        {
            title:"Epochs"
        },
        yaxis:
        {
            title:"Result"
        }
      }

	Plotly.newPlot(TESTER, [{
	x: array_epochs,
	y: array_x}], 
    layout)
    })

