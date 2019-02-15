const data = [
    {
        picture: "data:image/webp;base64,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",
        word: 'Fiets'
    }, 
    {
        picture: 'https://www.ikea.com/PIAimages/0355482_PE547815_S5.JPG',
        word: 'Stoel'
    }, 
    {
        picture: 'https://cdn-images.article.com/products/SKU45/2890x1500/image26307.jpg?w=2890',
        word: 'Tafel'
    }, 
    {
        picture: 'http://bus-and-coach-photos.com.s3.amazonaws.com/1654.jpg',
        word: 'Bus'
    }, 
    {
        picture: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/51882_XXX_v1.tif&wid=650&cvt=jpeg',
        word: 'Beker'
    }, 
    {
        picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Amstelpark_entrance1.jpg/266px-Amstelpark_entrance1.jpg',
        word: 'Park'
    }, 
    {
        picture: 'https://kids.licg.nl/media/2972/als-een-hond-dreigt740x433.jpg',
        word: 'Hond'
    }, 
    {
        picture: 'https://dierenverzekering-vergelijken.nl/wp-content/uploads/2018/07/echo-kat.jpg',
        word: 'Kat'
    }, 
    {
        picture: 'https://discus-1.cdn.prod.mas2.media-artists.nl/image/cb2d11d0-96e1-413f-b281-a18a916a637a/6ab9ff80-de7a-11e7-8c26-88a08bd89a7b?rev=1546931855&widthParam=0&heightParam=0',
        word: 'Vogel'
    }, 
    {
        picture: 'https://s3-eu-central-1.amazonaws.com/penny-live/wp-content/uploads/2017/07/24173654/foto-enquete.jpg',
        word: 'Paard'
    }, 
    {
        picture: 'data:image/jpeg;base64,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',
        word: 'Water'
    }
]

let currentMode = "";

function getRandomNumber() {
    const number = Math.floor(Math.random()*data.length)
    return number;
}

function createFlashcard(mode) {
    currentMode = mode
    const flashcard = document.getElementById('flashcard');
    while (flashcard.firstChild){
        flashcard.removeChild(flashcard.firstChild);
    }
    console.log(mode);

    const number = getRandomNumber();

    if (mode === 'picture') {
        //console.log(data[number].picture);
        const img = document.createElement('img')
        img.src = data[number].picture;
        img.setAttribute('class','visible')
        flashcard.appendChild(img);
        const word = document.createElement('span');
        word.innerText = data[number].word
        word.setAttribute('class', 'invisible')
        flashcard.appendChild(word)

    } 

    if (mode === 'word') {
        console.log(data[number].word);
        const word = document.createElement('span');
        word.innerText = data[number].word
        word.setAttribute('class', 'visible')
        flashcard.appendChild(word)
        const img = document.createElement('img')
        img.src = data[number].picture;
        img.setAttribute('class','invisible')
        flashcard.appendChild(img);
    }
        
}

function flipCard() {
    const flashcard = document.getElementById('flashcard');
    const childs = flashcard.childNodes

   for (let i = 0; i < childs.length; i++) {
       const element = childs[i];
       if(element.className === "visible") {
           element.classList.add("invisible")
           element.classList.remove("visible")
       } else {
           element.classList.add("visible") 
           element.classList.remove("invisible")
       }
   }
    // if(visibleElement.lenght > 0){
    // visibleElement.forEach((element) => {element.classList.replace('visible', 'invisible')
    // })} else {
    
    // const invisibleElement = document.getElementsByClassName('invisible')

    // invisibleElement.forEach((element) => {element.classList.replace('invisible','visible')})
    // }
}

