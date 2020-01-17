fetch(
  'https://www.rijksmuseum.nl/api/nl/collection?toppieces=True&key=Q03BAT0l&format=json&type=schilderij&f.normalized32Colors.hex=%20%23367614'
)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    displayContent(data);
  });

const displayContent = (data) => {
  const painting = data.artObjects[0];
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const img = document.createElement('img');
  const content = document.getElementById('content');

  h1.innerHTML = `${painting.longTitle}`;
  p.innerHTML = `Hakan's Gallery App`;
  img.src = `${painting.webImage.url}`;

  content.appendChild(p);
  content.appendChild(h1);
  content.appendChild(img);
};

const submitComment = () => {
  const inputField = document.getElementById('name');
  const name = inputField.value;
  const textArea = document.getElementById('msg');
  const msg = textArea.value;
  const commentSection = document.getElementById('comments');
  const comment = document.createElement('section');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');

  comment.classList.add('comment');
  h3.innerHTML = `${name} said:`;
  p.innerHTML = msg;

  comment.appendChild(h3);
  comment.appendChild(p);

  commentSection.append(comment);

  inputField.value = null;
  textArea.value = null;
};
