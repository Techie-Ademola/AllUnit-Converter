var inputValue = document.getElementById('inputTask');
var meter = document.getElementById('mtr');
var feet = document.getElementById('ft');
var liter = document.getElementById('ltr');
var gallon = document.getElementById('gal');
var kilo = document.getElementById('kg');
var pound = document.getElementById('pound');

var toUnitmeter = document.getElementById('Tomtr');
var toUnitfeet = document.getElementById('Toft');
var toUnitliter = document.getElementById('Toltr');
var toUnitgallon = document.getElementById('Togal');
var toUnitkilo = document.getElementById('Tokg');
var toUnitpound = document.getElementById('Topound');

function convertInput() {
    let smash = inputValue.value;

    if (smash == '') {
        // alert("C'mon, Add a valid value to the Input field!");
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-center',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: false,
            didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            title: 'Warning!',
            text: "C'mon, Add a valid value to the Input field!",
            icon: 'warning',
            confirmButtonText: 'Okay'
        });

        meter.innerHTML = '0'; toUnitmeter.innerHTML = "0"

        liter.innerHTML = '0'; toUnitliter.innerHTML = "0"

        kilo.innerHTML = '0'; toUnitkilo.innerHTML = "0"

        feet.innerHTML = '0'; toUnitfeet.innerHTML = "0"

        gallon.innerHTML = '0'; toUnitgallon.innerHTML = "0"

        pound.innerHTML = '0'; toUnitpound.innerHTML = "0"

        pound.innerHTML = '0'; toUnitpound.innerHTML = "0"
    } 
    else {
        meter.innerHTML = smash; toUnitmeter.innerHTML = smash;
        feet.innerHTML = smash * 3.281; toUnitfeet.innerHTML = smash * 3.281;

        liter.innerHTML = smash; toUnitliter.innerHTML = smash;
        gallon.innerHTML = smash * 0.220; toUnitgallon.innerHTML = smash * 0.220;

        kilo.innerHTML = smash; toUnitkilo.innerHTML = smash;
        pound.innerHTML = smash * 2.205; toUnitpound.innerHTML = smash * 2.205;
    }
    inputValue.value = '';
}