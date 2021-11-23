describe('testing calculate Monthly Payment', function() {
	it('should calculate the monthly rate correctly', function() {
		// ...
		expect(calculateMonthlyPayment({ amount: 100000, years: 10, rate: 0.01 })).toEqual('876.04');
		expect(calculateMonthlyPayment({ amount: 200000, years: 15, rate: 0.0425 })).toEqual('1504.56');
	});

	it('should return a result with 2 decimal places', function() {
		// ..
		const result = calculateMonthlyPayment({ amount: 100000, years: 10, rate: 0.01 });
		expect(parseInt(result) * 100).toEqual(Math.floor(parseInt(result) * 100));
	});

	it('should pop an alert while input value is not a number', function() {
		expect(parseInt(calculateMonthlyPayment({ amount: 'djskl', years: 10, rate: 0.01 }))).toBeNaN();
	});
});
