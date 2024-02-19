let form = document.querySelector('form');

// let submit = document.getElementById('submit');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let msg = document.getElementById('msg');

    if(height==='' || height<=0 || isNaN(height)){
        msg.innerHTML = `Please enter a valid height ${height}`
    }
    else if(weight==='' || weight<=0 || isNaN(weight)){
        msg.innerHTML = `Please enter a valid weight  ${weight}`
    }
         // Convert height from cm to meters
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let conditions = document.getElementById('conditions');
        //show the result
        msg.innerHTML = `BMI : ${bmi}`;
        if(bmi<18.5){
            conditions.innerHTML = `Underweight`;
        }
        else if(bmi>=18.5 && bmi<=24.9){
            conditions.innerHTML = `Normal Weight`;
        }
        else if(bmi>=25 && bmi<=29.9){
            conditions.innerHTML = `Overweight`;
        }
        else if(bmi>=30 && bmi<=34.9){
            conditions.innerHTML = `Obesity Moderate`;
        }
        else if(bmi>=35 && bmi<=39.9){
            conditions.innerHTML = `Obesity Severe`;
        }
        else if(bmi>=40){
            conditions.innerHTML = `Obesity Very Severe`;
        }
    
    }
})