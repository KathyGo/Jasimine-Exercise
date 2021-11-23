window.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('calc-form');
	if (form) {
		setupIntialValues();
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +document.getElementById('loan-amount').value,
		years: +document.getElementById('loan-years').value,
		rate: +document.getElementById('loan-rate').value
	};
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	const defaultValues = { amount: 100000, years: 10, rate: 0.01 };
	const loanAmount = document.getElementById('loan-amount');
	loanAmount.value = defaultValues['amount'];
	const loanYears = document.getElementById('loan-years');
	loanYears.value = defaultValues['years'];
	const loanRate = document.getElementById('loan-rate');
	loanRate.value = defaultValues['rate'];
	update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	const inputValues = getCurrentUIValues();
	const monthlyPayment = calculateMonthlyPayment(inputValues);
	updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	const amount = values['amount'];
	const years = values['years'];
	const rate = values['rate'];
	if (!parseInt(amount) || !parseInt(years) || parseInt(rate)) {
		alert('Please enter a number for the requested fields.');
	}
	const monthlyPayment = amount * (rate / 12) / (1 - Math.pow(1 + rate / 12, -(years * 12)));
	return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	document.getElementById('monthly-payment').classList.remove('error');
	if (parseInt(monthly)) {
		document.getElementById('monthly-payment').innerText = `$ ${monthly}`;
	} else {
		document.getElementById('monthly-payment').innerText = 'Error! Try Again!';
		document.getElementById('monthly-payment').classList.add('error');
	}
}
