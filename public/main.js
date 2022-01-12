/*const update = document.querySelector('#update-button')


update.addEventListener('click', _ => {
  fetch('/quotes', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Darth Vadar',
      quote: 'I find your lack of faith disturbing.'
    })
  })
})
*/


function changeText(id) {
  var elementExists = document.getElementById("update_form_id");
  if (!elementExists) {
  	    console.log("elementExists", elementExists);
	    var span_quote= document.getElementById(id.id);
	    var name = span_quote.id.replace("quote_", "")
	    // form 
	    var form = document.createElement("form");
	    form.setAttribute("method", "post");
	    form.setAttribute("id", "update_form_id");
	    form.setAttribute("action", "/update_quotes");
    	    // input name box
	    var nm = document.createElement("INPUT");
	    //nm.setAttribute("id", "updating_name");
	    nm.setAttribute("name", "updating_name");
	    nm.setAttribute("readonly", true);
	    var quotename = document.getElementById(name);
	    nm.setAttribute("value", name);
  	    console.log(name);
	    form.appendChild(nm);
    	    // input edit box
	    var para = document.createElement("INPUT");
	    para.setAttribute("id", "update_quote_text");
	    para.setAttribute("name", "update_quote_text");
	    para.setAttribute("value", id.innerHTML);
  	    console.log(id.id);
	    form.appendChild(para);
	    // submit button
	    var submit = document.createElement("INPUT");
	    submit.setAttribute("value", "Update Quote");
	    submit.setAttribute("type", "submit");
	    form.appendChild(submit);
	    
	    span_quote.append(form);
  }
}
function deleteit(obj) {
  var elementExists = document.getElementById("delete_button");
  if (!elementExists) {
	    //var span_quote= document.getElementById(.id);
	    var name = obj.id.replace("name_", "");
	    // add delete method
	    var form = document.createElement("form");
	    form.setAttribute("method", "post");
	    form.setAttribute("id", "delete_button");
	    form.setAttribute("action", "/delete_quote");

	    var nm = document.createElement("INPUT");
	    nm.setAttribute("value", name);
	    nm.setAttribute("name", "updating_name");
	    nm.setAttribute("type", "hidden");
	    form.appendChild(nm);

	    var submit = document.createElement("INPUT");
	    submit.setAttribute("value", "Delete Quote");
	    submit.setAttribute("type", "submit");
	    form.appendChild(submit);

	    obj.prepend(form);
  }
}
