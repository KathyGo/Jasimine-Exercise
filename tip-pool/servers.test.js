describe('Servers test (with setup and tear-down)', function() {
	beforeEach(function() {
		// initialization logic
		serverNameInput.value = 'Alice';
	});

	it('should add a new server to allServers on submitServerInfo()', function() {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers['server' + serverId].serverName).toEqual('Alice');
	});

	it('should add a new row to server table with server name Alice', function() {
		submitServerInfo();

		let serverName = document.querySelector('#serverTable tbody tr td');
		expect(serverName.innerText).toEqual('Alice');
	});

	afterEach(function() {
		// teardown logic
		serverNameInput.value = '';
		serverTbody.innerHTML = '';
		allServers = {};
		serverId = 0;
	});
});
