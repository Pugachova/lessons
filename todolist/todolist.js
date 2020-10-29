document.addEventListener("DOMContentLoaded", function(event) { 
	init();
});

function init() {
	const form = document.querySelector('.newform');
	const tablerows = document.querySelector('.tablerows');	
	console.log(tablerows);
	console.log(form);


	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const bookname = form.bookname.value.trim();
		if (bookname.length) {
			form.reset();

			tablerows.innerHTML += `
		  <tr class="listname">
				<td class="border px-16 py-2 booknamepara"><p class="">${bookname}</p></td>
						   
			  <td class="border px-16 py-2">
				  <svg onclick="delElem(this)" class="dltbtn cursor-pointer h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
					  viewBox="0 0 24 24" stroke="currentColor">
					  <path
						  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4">
					  </path>
				  </svg></td>
				 
				</tr>
		  
		  `;					
		}
	});
	
	/*tablerows.addEventListener('click', (e) => {
		e.stopPropagation();
		
		console.log(e.target);
		if (e.target.classList.contains('dltbtn')) {
			e.target.parentElement.parentElement.remove();
		}
	});*/
}

function delElem(elm){
	console.log(elm);
	elm.parentElement.parentElement.remove();
}




/*const form = document.querySelector('.newform');

const tablerows = document.querySelector('.tablerows');



console.log(tablerows);


console.log(form);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const bookname = form.bookname.value.trim();
    if (bookname.length) {
        form.reset();
    }
    tablerows.innerHTML += `
  <tr class="listname">
  <td class="border px-16 py-2 booknamepara"><p class="">${bookname}</p></td>
                   
                      <td class="border px-16 py-2">
                          <svg class="dltbtn cursor-pointer h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                              viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4">
                              </path>
                          </svg></td>
                         
                        </tr>
  
  `;
    tablerows.addEventListener('click', (e) => {
        e.stopPropagation();

        if (e.target.classList.contains('dltbtn')) {
            e.target.parentElement.parentElement.remove();
        }
    });
});
*/