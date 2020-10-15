//Task1
//$("a[href^='https://']").attr('target', '_blank');

//Task2
//$('h2.head').css('background', 'green').find('.inner').css('fontSize', '35px');

/* або  
$('h2.head').css('background-color', 'green');
$('h2.head').find('span.inner').css("font-size", "35px");  */

//Task3

$('div').each(function() {
	if ($(this).prev().prop("tagName") == "H3") {
		$(this).insertBefore($(this).prev());	
	}
});
/*або 
$('div').each(function() {
  $(this).insertBefore($(this).prev());
});

*/

//Task4

function processChkboxes() {

	if($("input:checkbox[name=chk]:checked").length >= 3) {
    $("input:checkbox[name=chk]").each(function(){
      $(this).prop('disabled', true);
    });
  }

}

processChkboxes();
























