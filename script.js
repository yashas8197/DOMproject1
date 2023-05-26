let btn = document.querySelector("#new-quote");

let quote = document.querySelector(".quote");

let person = document.querySelector('.person');


const quotes = [
 
 {quote: "Good programmers know what to write. Great ones know what to rewrite and reuse" ,
 person: "Eric S. Raymond."
 
 },{quote: "Software and cathedrals are much the same; first we build them, then we pray." ,
 person: "Anonymous."
 
 },{quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
 person: "Martin Fowler"
 
 },{quote: "Real programmers can write assembly code in any language.",
 person: "Larry Wall"
 
 },{quote: "Good programmers use their brains, but good guidelines save us having to think out every case." ,
 person: "Francis Glassborow."
 
 },{quote: "Documentation is the castor oil of programming. Managers think it is good for programmers and programmers hate it." ,
 person: "Gerald Weinberg."
 
 },{quote: "Common programmer thought pattern: there are only three numbers: 0, 1, and n.",
 person: "Joel Spolsky."
 
 },{quote: "The most disastrous thing that you can ever learn is your first programming language" ,
    person: "Alan Kay"

},{quote: "Computer programs are the most complex things that humans make" ,
 person: "Douglas Crockford"
 
},{quote: "FORTRAN was the language of choice for the same reason that three-legged races are popular." ,
 person: "Ken Thompson"

},{quote: "A language that doesnt affect the way you think about programming is not worth knowing", 
 person:  "Alan Perlis"
 
},{quote: "A language that doesnt have everything is actually easier to program in than some that do.", 
 person: "Dennis Ritchie"
 
},{quote: "The central problem of C and C++ is that they require programmers to do their own memory management." ,
 person: "Eric S. Raymond"
},{quote: "Website without visitors is like a ship lost in the horizon.",
person : "Christopher Dayagdag"

},{quote: "SEO is an investment just like a tree that needs effort, patience and time to grow before you can see the result.",
person: "Chris Dayagdag"

},{quote: "Being first in the search result organically in Google is the dream of all website owners.",
person: "Chris Dayagdag"

},{quote: "Getting a quality website is not an expenses but rather an investment.",
person: "Christopher Dayagdag"

},{quote: "Google Analytics is the best friend of all Digital Marketers as it dictates the decision making and success of every websites.",
person: "Chris Dayagdag"

},{quote: "We dont just build websites, we build websites that SELLS",
person: "Chris Dayagdag"

},{quote: "To become successful online, you only need to remember the following : Good Heart + Passion + Web Design + SEO + Digital Marketing + Dedication + Positiveness + Patience = Success",
person: "Christopher Dayagdag"

},{quote: "Great web design without functionality is like a sports car with no engine.",
person: "Paul Cookson"

},{quote: "A website without SEO is like a car with no gas.",
person :"Paul Cookson"

},{quote: "Websites promote you 24/7: No employee will do that.",
person :"Paul Cookson"

},{quote: "Let us take you into a deeper experience, make a moment a lasting conveyable memory. Let us help build your tribe.",
person: "Deep Immersion"

},{quote: "We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites.",
person: "ProWeb365"


},{quote: "Web design is not just about creating pretty layouts. Its about understanding the marketing challenge behind your business.",
person: "Mohamed Saad"

},{quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
person :"Bill Gates"

},{quote: "Digital design is like painting, except the paint never dries.",
person :"Neville Brody"


},{quote: "Responsive Web Design always plays important role whenever going to promote your website.",
person: "Josh Wilson"

},{quote: "There are three responses to a piece of design yes, no, and WOW! Wow is the one to aim for",
person: "Milton Glaser"
}];


 btn.addEventListener('click', function(){
    let randomquote = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[randomquote].quote;
    person.innerText = quotes[randomquote].person;
 })