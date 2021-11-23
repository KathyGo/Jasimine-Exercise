describe('payments test', function() {
	beforeEach(function() {
		billAmtInput.value = '100';
		tipAmtInput.value = '15';
	});

	it('should add a new payment to allPayments on submitPaymentInfo()', function() {
		submitPaymentInfo();
		expect(Object.keys(allPayments).length).toEqual(1);
		expect(allPayments['payment' + paymentId].billAmt).toEqual('100');
		expect(allPayments['payment' + paymentId].tipAmt).toEqual('15');
		expect(allPayments['payment' + paymentId].tipPercent).toEqual(15);
	});

	it('should not add a new payment to allPayments if bill amount input=""', function() {
		billAmtInput.value = '';
		submitPaymentInfo();
		expect(Object.keys(allPayments).length).toEqual(0);
	});

	it('should return an object with billAmt, billAmt and tipPercent on createCurPayment()', function() {
		expect(createCurPayment().billAmt).toEqual('100');
		expect(createCurPayment().tipAmt).toEqual('15');
		expect(createCurPayment().tipPercent).toEqual(15);
	});

	it('should append a new row for Payment table with payment id', function() {
		let curPayment = createCurPayment();
		appendPaymentTable(curPayment);
		expect(document.querySelector('#paymentTable tbody tr').id).toEqual('payment' + paymentId);
		expect(document.querySelectorAll('#paymentTable tbody tr td')[0].innerText).toEqual('$100');
		expect(document.querySelectorAll('#paymentTable tbody tr td')[1].innerText).toEqual('$15');
		expect(document.querySelectorAll('#paymentTable tbody tr td')[2].innerText).toEqual('15%');
	});

	it('should update summary table td values', function() {
		submitPaymentInfo();
		updateSummary();

		expect(summaryTds[0].innerText).toEqual('$100');
		expect(summaryTds[1].innerText).toEqual('$15');
		expect(summaryTds[2].innerText).toEqual('15%');

		billAmtInput.value = '200';
		tipAmtInput.value = '40';
		submitPaymentInfo();
		updateSummary();

		expect(summaryTds[0].innerText).toEqual('$300');
		expect(summaryTds[1].innerText).toEqual('$55');
		expect(summaryTds[2].innerText).toEqual('18%');
	});

	afterEach(function() {
		billAmtInput.value = '';
		tipAmtInput.value = '';
		paymentTbody.innerHTML = '';
		summaryTds[0].innerHTML = '';
		summaryTds[1].innerHTML = '';
		summaryTds[2].innerHTML = '';
		allPayments = {};
		paymentId = 0;
	});
});
