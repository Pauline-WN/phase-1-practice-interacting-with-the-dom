document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById('counter');
    let minus = document.getElementById('minus');
    let plus = document.getElementById('plus');
    let heart = document.getElementById('heart');
    let pause = document.getElementById('pause');
    let commentForm = document.getElementById('comment-form');
    let likes = {};
    let isPaused = false;
    let timer;
  
    // Start the counter incrementing every second
    function startCounter() {
      timer = setInterval(() => {
        counter.innerText = parseInt(counter.innerText) + 1;
      }, 1000);
    }
    startCounter();
  
    // Increment counter manually
    plus.addEventListener('click', () => {
      counter.innerText = parseInt(counter.innerText) + 1;
    });
  
    // Decrement counter manually
    minus.addEventListener('click', () => {
      counter.innerText = parseInt(counter.innerText) - 1;
    });
  
    // Like button functionality
    heart.addEventListener('click', () => {
      let count = counter.innerText;
      if (likes[count]) {
        likes[count]++;
      } else {
        likes[count] = 1;
      }
      displayLikes();
    });
  
    function displayLikes() {
      let likesList = document.querySelector('.likes');
      likesList.innerHTML = '';
      for (let count in likes) {
        let li = document.createElement('li');
        li.innerText = `${count} has been liked ${likes[count]} time${likes[count] > 1 ? 's' : ''}`;
        likesList.appendChild(li);
      }
    }
  
    // Pause and Resume button functionality
    pause.addEventListener('click', () => {
      if (isPaused) {
        startCounter();
        pause.innerText = 'pause';
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        isPaused = false;
      } else {
        clearInterval(timer);
        pause.innerText = 'resume';
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        isPaused = true;
      }
    });
  
    // Add comments
    commentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      let commentInput = document.getElementById('comment-input');
      let comment = commentInput.value;
      let commentList = document.getElementById('list');
      let p = document.createElement('p');
      p.innerText = comment;
      commentList.appendChild(p);
      commentInput.value = '';
    });
  });
  