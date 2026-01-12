# Projects For Async In JS

## Project Link - [Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Project 1 - Random Colour Changing Background for Every Second

```javascript
// generate a random color

const randomColor = function(){
  const hex = '0123456789ABCDEF'
  let color = '#'
  for(let i = 0 ; i < 6; i++){
    color += hex[Math.floor(Math.random()*16)]
  }
  return color
};
let intervalID
const startchangingcolor = function(){
  if (!intervalID){
    intervalID =setInterval(changeBGcolor,1000)
  }
  function changeBGcolor(){
    document.body.style.backgroundColor = randomColor()
  }
}

const stopchangingcolor = function(){
  clearInterval(intervalID);
  intervalID = null;
}

document.querySelector('#start').addEventListener('click', startchangingcolor)

document.querySelector('#stop').addEventListener('click', stopchangingcolor)
```