var _activeList = null;

$(document).ready(function(){
	$('#btnSaveList').on('click', function(){
		var client_name = $('#txtListName').val();

		if (client_name === '') {
			alert('BAD');
			return;
		}

		$.ajax({
			type: 'POST',
			url: '/main/savelist',
			data: { server_list_name: client_name }
		}).done(function(data){
			// this can be used to confirm that the save was successful
			if (data === null)
				alert('BAD');
			else
				alert(JSON.stringify(data));
		});
	});

	$('.btnNewItem').on('click', function(){
		var id = $(this).parent().find('.hdnID').val();
		_activeList = id;
		$('#newItem').fadeIn('slow');
	});

	$('#btnSaveNewItem').on('click', function(){
		var text = $('#txtItemText').val();

		// VALIDATION GOES HERE

		$.ajax({
			url: '/main/savenewitem',
			type: 'POST',
			data: { listID: _activeList, server_data:text}
		}).done(function(data){

			if (data === null)
				alert('BAD');
			else {
				// alert(data.text);
			}

			$('#newItem').fadeOut('fast');
		});
	});
});