document.getElementById('btn').addEventListener('click', async function(){
    console.time("answer time");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const users = await response.json();
    // console.log(users);
    console.timeEnd("answer time");
})
  