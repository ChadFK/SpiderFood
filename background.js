chrome.action.onClicked.addListener(async (tab) => {
  const name = tab.url;
  const category = tab.title;

  await fetch('http://127.0.0.1:8000/food', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'token': '123456'
    },
    body: JSON.stringify({ name, category })
  });

  console.log('URL pushed successfully');
});
