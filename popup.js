document.addEventListener('DOMContentLoaded', function() {
    var pushButton = document.getElementById('pushButton');
  
    pushButton.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var tab = tabs[0];
        var name = tab.url;
        var category = tab.title;
  
        fetch('http://127.0.0.1:8000/food', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'token': '123456'
          },
          body: JSON.stringify({ name, category })
        })
        .then(response => {
          console.log('URL pushed successfully');
        })
        .catch(error => {
          console.error('Error pushing URL:', error);
        })
        .finally(func => {
            //window.close();
        });
      });
    });
  });
  