$(function() {


	$('#contact-form').validate({


		rules: 
		{
			username: {
				required: true,
				nowhitespace: true,
				lettersonly: true,
				minlength: 2
				
			},

			lastname: {
				required: true,
				nowhitespace: true,
				lettersonly: true,
				minlength: 2
			},

			email: {
				required: true,
				email: true
			},

			subject: {
				required: true,
				minlength: 2
			},


			message: {
				required: true,
				minlength: 5
			}

		}, 

		messages: {
			username: {
				required: 'Proszę wpisz imię.',
				lettersonly: 'Niedozwolone znaki.',
				nowhitespace: 'Pole nie może zawierać spacji.',
				minlength: 'Imię musi zawierać przynajmniej 2 znaki.'
			},

			lastname: {
				required: 'Proszę wpisz nazwisko.',
				lettersonly: 'Niedzwolone znaki.',
				nowhitespace: 'Pole nie może zawierać spacji.',
				minlength: 'Nazwisko musi zawierać przynajmniej 2 znaki.'
			},

			email: {
				required: 'Proszę wpisz adres email.',
				email: 'Proszę wpisz <em>poprawny</em> adres email.'
			},
			subject: {
				required: 'Proszę wpisz temat wiadomości.',
				minlength: 'Temat wiadomości musi zawierać przynajmniej 2 znaki.'
			},

			message: {
				required: 'Proszę wpisać treść wiadomości',
				minlength: 'Wiadomość musi zawierać przynajmniej 5 znaków.'

			}


		}

	});

});



















