describe('helpers test', function() {
	it('should calculate sum Payment total on sumPaymentTotal(type)', function() {
		allPayments = {
			payment1: { billAmt: '100', tipAmt: '10', tipPercent: 10 },
			payment2: { billAmt: '200', tipAmt: '40', tipPercent: 20 }
		};

		expect(sumPaymentTotal('billAmt')).toEqual(300);
		expect(sumPaymentTotal('tipAmt')).toEqual(50);
		expect(sumPaymentTotal('tipPercent')).toEqual(30);
	});

	it('should return tip bill percentage', function() {
		expect(calculateTipPercent(300, 30)).toEqual(10);
		expect(calculateTipPercent(100, 20)).toEqual(20);
	});

	it('should create table data for provided tr with provided value on appendTd(tr, value)', function() {
		let newTr = document.createElement('tr');
		appendTd(newTr, '100');
		paymentTbody.append(newTr);

		let newTd = document.querySelector('#paymentTable tbody tr td');
		expect(newTd.innerText).toEqual('100');
	});

	it('should create table data X and delete the table row after click on it', function() {
		let newTr = document.createElement('tr');
		appendDeleteBtn(newTr);
		paymentTbody.append(newTr);

		let newTd = document.querySelector('#paymentTable tbody tr td');
		expect(newTd.innerText).toEqual('X');
	});

	afterEach(function() {
		allPayments = {};
		paymentTbody.innerHTML = '';
	});
});
