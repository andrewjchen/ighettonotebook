console.log('hello, world from client.js');

var request = window.superagent;



$(document).ready( function () {

	Mousetrap.bind('shift+enter', function(){
	console.log("running your important program:");
	console.log($('#programfield').val());
	request.post('/program')
		.send({program: $('#programfield').val(),
				name : 'andrew'
				})
		.type('json')
		.end(function (resp) {
			console.log("response:");
			console.log(resp.text);
			var report = JSON.parse(resp.text)
			console.log(report)
			var text = '';
			for(var i = 0; i< report.prints.length; i++) {
				text+=report.prints[i] + "\n";
			}
			//text+=report.retu
			$('#programresult').text(text);
		});
	});

	$('#myButton').click(function () {
		var text = $('#counter').text();
		console.log(text);
		var newtext = String(Number(text) *2);
		$('#counter').text(newtext);
	});

	$('#programfield').text('console.log(\'hello, world\');');

	// $(document).keypress(function(ev) {

	// 	// console.log(ev.key);
	// 	var text = $('#textfield').text();
	// 	if(ev.key == 'Backspace') {
	// 		text = text.substring(0, text.length - 1);
	// 	} else if (ev.key == 'Enter') {
	// 		text = text + '\n';
	// 	} else {
	// 		text = text + ev.key;
	// 	}
	// 	// console.log(text);
	// 	$('#textfield').text(text);
	// })

	// $(document).keypress(function(ev) {

	// 	// console.log(ev.key);
	// 	var text = $('#textfield').text();
	// 	if(ev.key == 'Backspace') {
	// 		text = text.substring(0, text.length - 1);
	// 	} else if (ev.key == 'Enter') {
	// 		text = text + '\n';
	// 	} else {
	// 		text = text + ev.key;
	// 	}
	// 	// console.log(text);
	// 	$('#textfield').text(text);
	// })
});
