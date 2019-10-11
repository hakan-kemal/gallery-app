/* select submit button for a javascript 
event and assign a function to it */

/* A user can leave their name and 
write a comment, when they click submit, 
their name and comment will be displayed 
on the page. */

function doesNotPassAllValidations(name, msg) {
  if (!name || !msg) {
    alert('Oh no! You forgot to write your name or an message!');
    return true;
  }
  
  if (msg.length > 300) {
    alert('Your comment exceeds the 300 character maximum, please write a shorter comment');
    return true;
  }
  /*
  if () { Display a separate message if only the name or the message input field are not filled in.
    
  } 
  if () { If a name does not start with a capital letter, change the first letter to upperCase.
    
  }
  if () { Check whether you message contains inappropriate language. If they do, 
          return the comment with the warning: Warning: this comment has been flagged as offensive. Style it in an appropriate way.
    
  } 
  */
  return false;
}

// add a event handler that the function is executed at form submit 
function submitComment() {
  // gather data from relevant elements/inputs and store these in a variable
  const inputField = document.getElementById('name');
  const name = inputField.value
  // console.log(name);

  const textArea = document.getElementById('msg');
  const msg = textArea.value
  // console.log(msg);

  // Select the section element with id "comments" element using the getElementById-method and store it in the variable commentSection.
  // Log commentSection in the console to see whether you selected the correct element.

  const commentSection = document.getElementById('comments');
  // console.log(comments);

  // the detail-page.html page comment section displayed at refresh is a section with class="comment" and consists of h3 and p elements,
  // h3 and p elements display inputted text and create the elements needed to display the submitted comments, 
  // so createElement should be create a section, a h3, and a p.
  // the section should have a class of comment to be CSS targetted similar to the first comment section.
  const comment = document.createElement('section');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');

  // Let's combine the data we gathered with the elements we just created!
  // inputField.value data = created h3 element with HTML --> name
  // textArea.value data = created p element with HTML --> msg

  h3.innerHTML = `${name} said:`
  p.innerHTML = msg

  //Use the appendChild-method on commentSection to add your comment-variable to commentSection.

  commentSection.appendChild(comment);

  comment.classList.add('comment');
  comment.appendChild(h3);
  comment.appendChild(p);

  // Reassign the value-property of inputField to null.
  // Reassign the value-property of textArea to null.

  inputField.value = null
  textArea.value = null

  // console.log(comment)

  if(doesNotPassAllValidations(name, msg)){
    return null
  }

  // NO EMPTY COMMENTS!!!
  // That is not very useful, so let's do something about it!

  // Use the console.log method to check what the values of your name and msg variables 
  // are if you do not type anything in the the input fields. --> a line is logged, but its an empty line
  // What happens if you put your console.log() statement outside of your submitComment-function? Why?
  // Write a boolean expression which returns true if name or msg return a falsy value. Use console.log 
  // to check whether your logic is correct.

  // console.log( !(name || msg) ); if name and msg are true a false statement is returned 

  // Add an if statement in your submitButton function. If the value of name OR msg have falsy values, 
  // we want to return null. Else, we'll continue with the logic we defined in the last section.
}
