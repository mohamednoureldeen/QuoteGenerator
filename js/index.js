let autoGenerateInterval;

function generateQuote() {
    var quoteName = [
        "Albert Camus",
        "Mark Twain",
        "Maya Angelou",
        "C.S. Lewis, The Four Loves"
    ];
    var quoteText = [
        "Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend.",
        "If you tell the truth, you don’t have to remember anything.",
        "I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        "Friendship ... is born at the moment when one man says to another, 'What! You too? I thought that no one but myself . . .'"
    ];
    
    var num = Math.floor(Math.random() * quoteName.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.classList.add("fade-out");
    
    setTimeout(() => {
        quoteElement.innerHTML = `
            <p class="card-text">${quoteText[num]}</p>
            <h3 class="card-title">${quoteName[num]}</h3>
        `;
        quoteElement.classList.remove("fade-out");  
    }, 1000); 
}
function startAutoGenerate() {
    if (!autoGenerateInterval) {
        autoGenerateInterval = setInterval(generateQuote, 5000);
        document.querySelector(".stop-button").classList.remove("d-none");
    }
}
function stopAutoGenerate() {
    clearInterval(autoGenerateInterval);
    autoGenerateInterval = null;
    document.querySelector(".stop-button").classList.add("d-none");
}