/**
	ID SERIAL PRIMARY KEY, 
	COMPANY TEXT NOT NULL, 
	ROLE TEXT NOT NULL, 
	CITY TEXT,
	STATE TEXT, 
	COUNTRY TEXT,
	JOB_PLATFORM TEXT NOT NULL,
	DESCRIPTION TEXT,
	REQUIREMENTS TEXT,
    POSTING_DATE DATE NOT NULL DEFAULT CURRENT_DATE,
	JOB_STATUS TEXT NOT NULL
**/


$(function() {
	$('.example-popover').popover({
		container: 'body',
		title: 'Test Title',
		content: 'And here some amazing content',
		placement: 'right',
		trigger: 'focus'
	})

	$.ajax({
		url: '/display-table',
		type: 'GET',
		contentType: 'application/json',
		success: function(response){
			// console.log(response)

			const tableElement = $('tbody')
			let tableEntry

			for(const prop in response){
				tableEntry += ',' + response[prop].company
			}

			console.log(tableEntry);

			// for(const prop in response)

			// for(const prop in response){
			// 	const url_link = response[prop].url
			// 	const entry_id = response[prop].id
			// 	tableElement.append('\
			// 		<tr id=" ' + entry_id + ' ">\
			// 	      <th scope="row">' + response[prop].track + '</th>\
			// 	      <td>' + response[prop].artist + '</td>\
			// 	      <td>' + response[prop].genre + '</td>\
			// 	      <td><a target="_blank" rel="noopener noreferrer" href=" ' 
			// 	      + url_link + 
			// 	      ' "><button type="button" class="btn btn-dark"><span class="fas fa-link"></span></button></a>\
			// 	      <td><button type="submit" class="btn btn-default btn-sm delete"><span class="fas fa-trash-alt"></span></button></td>\
			// 	    </tr>\
			// 		')
			// }
		}
	})
});