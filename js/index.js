document.getElementById('calculate').addEventListener('click', calculateInsurance, false);

function calculateInsurance() {
    var full_name = document.getElementById('full_name').value;
    var age = Number(document.getElementById('age').value);
    var country = document.getElementById('country').value;
    var car_hp = Number(document.getElementById('car_hp').value);
    var insurance;
    switch (country) {
        case 'Austria':
            insurance = car_hp * 100 / age + 50;
            break;
        case 'Hungary':
            insurance = car_hp * 120 / age + 100;
            break;
        case 'Greece':
            insurance = car_hp * 150 / (age + 3) + 50;
            break;
    }
    insurance = Math.round(insurance * 100) / 100;
    var msg = full_name;
    if (isFinite(insurance) && insurance > 100) {
        msg += ", your insurance costs " + insurance + " €";
    } else {
        msg += ", this does not compute. Please recheck your data."
    }
    document.getElementById('info').innerHTML = msg;
}