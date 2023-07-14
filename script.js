const spinner = document.getElementById('spinner');
const clickEventBox = document.getElementById('click-event-container');


document.getElementById('btn').addEventListener('click', function(){
    spinner.style.display = 'block';
    setTimeout(() => {
        clickEventBox.style.display = 'flex'   
        spinner.style.display = 'none'
    }, 3000)
})
  