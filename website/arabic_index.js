var form = document.createElement('form');
form.setAttribute('action', '/some_path');
form.setAttribute('method', 'post');

var text_field = document.createElement('input');
text_field.setAttribute('type', 'text');
text_field.setAttribute('value', 'enter something here...');

var button = document.createElement('input');
button.setAttribute('type', 'submit');
button.setAttribute('value', 'Go!');

form.appendChild(text_field);
form.appendChild(button);

document.body.appendChild(form);
