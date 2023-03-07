

document.addEventListener('DOMContentLoaded', run)

function run()
{
    // When the page loads, use fetch to get all of the pup data from your server
    fetch('http://localhost:3000/pups')
    .then(resp => resp.json())
    .then(data => data.forEach(el => addPup(el)))
}

function addPup(pup)
{
// you'll need to add a span with the pup's name to the dog bar
    const dogBar = document.getElementById('dog-bar')
    const spanTag = document.createElement('span')
    spanTag.textContent = pup.name;
    spanTag.dataset.id = pup.id;
    spanTag.addEventListener('click', handleClick)
    dogBar.append(spanTag)
}

function handleClick(e)
{
//add Image, Name, then Button
    const dogContainer = document.getElementById('dog-info')
//should show up in the div with the id of "dog-info"
    dogContainer.innerHTML = "";
//Display the pup's info in the div with the following elements:
    const img = document.createElement('img')
    const name = document.createElement('h2')
    const btn = document.createElement('button')
    fetch(`http://localhost:3000/pups/${e.target.dataset.id}`)
    .then(resp => resp.json())
    .then(d => {
        img.src = d.image;
        name.textContent = d.name;
        if (d.isGoodDog)
            btn.textContent = "Good Dog!"
        else
            btn.textContent = "Bad Dog!"
    })
    btn.addEventListener('click', (e) => {
        if (btn.textContent === 'Good Dog!')
            btn.textContent = 'Bad Dog!'
        else
            btn.textContent = 'Good Dog!'
    })
    dogContainer.append(img,name,btn)
}
