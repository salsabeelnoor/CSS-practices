const spinner = document.getElementById('spinner');
const clickEventBox = document.getElementById('click-event-container');

async function delay (time){
    return new Promise (resolve => {
        setTimeout(resolve, time)
    })
}
document.getElementById('btn').addEventListener('click', async function(){
    spinner.style.display = 'block';
    await delay(3000);
    clickEventBox.style.display = 'flex'; 
    spinner.style.display = 'none';
})

document.getElementById('btn-reset').addEventListener('click', function(){
    spinner.style.display = 'none';
    clickEventBox.style.display = 'none' 
})
  