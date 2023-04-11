const quoteText=document.querySelector(".quote")
const header=document.querySelector(".header")
authorName=document.querySelector(".author .name");
quoteBtn=document.querySelector("button");
soundBtn=document.querySelector(".sound");
copyBtn=document.querySelector(".copy");
twitterBtn=document.querySelector(".twitter");



function randomQuote()
{
    //console.log('clicked');
    
    quoteBtn.classList.add("loading");
    quoteBtn.innerText="Loading Qoute...";
    fetch("https://api.quotable.io/random").then(ob=>ob.json()).then(result =>{
        console.log(result);
        quoteText.innerHTML=result.content;
        authorName.innerHTML=result.author;
        quoteBtn.innerText="New Quote";
        quoteBtn.classList.remove("loading");
        
    });
}

soundBtn.addEventListener('click',()=>{
    let u=new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`); //WEB SPEECH API that represents a speech req
    speechSynthesis.speak(u); //speak method
    
})

copyBtn.addEventListener('click',()=>{
   // console.log("clicked")
    navigator.clipboard.writeText(quoteText.innerText);
})

twitterBtn.addEventListener('click',()=>{
    let t=`https://twitter.com/compose/tweet?url=${quoteText.innerText}`;
    window.open(t);
})

function getColor()
{
    //Hexadecimal color codes
    const randomNumber=Math.floor(Math.random() * 16777215); //multiplying with this number so that it can become a hexadecimal code
   

    //to convert it to hex code
    const randomCode="#"+randomNumber.toString(16);

    //console.log(randomCode);

    document.body.style.backgroundColor=randomCode;
    quoteBtn.style.backgroundColor=randomCode;
    copyBtn.style.color=randomCode
    soundBtn.style.color=randomCode
    twitterBtn.style.color=randomCode
    quoteText.style.color=randomCode
    authorName.style.color=randomCode
    header.style.color=randomCode


    
}


    randomQuote();
    getColor();


quoteBtn.addEventListener("click",()=>{randomQuote();getColor()}); 