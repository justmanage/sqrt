"use strict"

const button=document.getElementById("button_3")
const result_field=document.getElementById("result_field_3")
const correct_field=document.getElementById("correct_field_3")
const error_field=document.getElementById("error_field_3")



button.addEventListener("click", ()=> {

    let n=document.getElementById("input_3")
    let epochs=document.getElementById("epochs_3")

    n=n.value
    epochs=epochs.value


    let x=0.01
    let error=0
    let correct_value=Math.sqrt(n)

    
    let array_x=[n] 
    let array_epochs=[0] 
    
    for (let i=0; i<epochs; i++) 
    {
        x=(1/2)*x*(3-(n*x*x))
        
        array_x.push(1/x) 
        array_epochs.push(i+1) 
    }

    error=(((1/x)-correct_value)/(1/x))*100

    result_field.textContent= "Approximation: " + (1/x).toFixed(3)
    correct_field.textContent= "Correct value: " + correct_value.toFixed(3)
    error_field.textContent= "Error percentage: " + error.toPrecision(2) + " %"

    const TESTER = document.getElementById('tester');
    
    var layout = 
    {
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
