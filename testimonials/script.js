// TheaterJS typing effect
var theater = theaterJS({ local: 'fr' })
theater.addActor('action-text', { speed: 0.95, accuracy: 0.9 });

const quotes = [
    "A great experience always to be surrounded by educators and different backgrounds.",
    "Attending January’s IgniteSTEM at Princeton University was a game changer for me.",
    "This was a great conference! It has opened up many ideas/discussions to include in the classroom",
    "All of you do an amazing job! I was impressed with all of you at Princeton University in Jan. and even more with IgniteSTEM NY! Kudos to all of you",
];

// Generate scene
for (let i = 0; i < quotes.length; i++) {
    theater.addScene('action-text:' + "\"" + quotes[i] + "\"", 1500);
}
theater.addScene(theater.replay.bind(theater));

const testimonials = [
    "Being able to hear about the innovations by the staff members and speakers were invaluable in seeing STEM being implemented in a variety of ways for all students. This ignited STEM in my thinking and mindset.",
    "It was such an awesome conference and you had the opportunity to network with the presenters along with the attendees. I walked away feeling inspired to bring these ideas to my school district",
    "Having attended the IgniteSTEM conference in April 2017, I learned about hackathons from MLH speakers and a student organizer from Union County VoTech schools. I used this information to solicit additional information and resources from both MLH and HackUC to plan and implement the inaugural Tri-District Hackathon we have scheduled for June 2, 2018, at Liberty Science Center in jersey City, NJ.",
    "I think that IgniteSTEM, as a group/organization is absolutely phenomenal. I have been singing your praises since my return to all who will listen, and have presented to faculty and administrators about the content of the conference, citing how extraordinary you are as a student led-and-run group. Well done!",
    "You guys have always done an awesome job of bringing together high quality, passionate, and motivated STEM individuals. I can honestly say that IgniteSTEM has been the most beneficial conferences I have been to in my 4 years teaching.",
    "This is an exemplary program. All organizers should be proud of their vision, time, and efforts. Kudos!",
    "The conference was a great experience and it had great content. The event was well executed and well communicated. I only wish I had learned about IgniteSTEM sooner. Thank you!",
    "Fantastic keynote speakers with an encouraging and motivating message. People who attended the conference were all like minded...either have a deep seated passion for STEM or who are seeking insight and motivation to take the leap",
]

//  Create a node element from a valid HTML string
function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
}

// When the DOM is ready, run this function
$(document).ready(function() {
    // Inject the other testimonails
    for (let i = 0; i < testimonials.length; i++) {
        const imageSource = "../assets/images/issticker.png";
        const author = "Attendee";
        const testimonial = testimonials[i];

        const activeClass = (i == 0) ? "active" : "";
        var innerHTML = `<div class='item ${activeClass}'><blockquote><div class='row'>`;
        innerHTML += "<div class='col-sm-3 text-center'>";
        innerHTML += `<img class="img-circle testimonials-sticker" src="${imageSource}">`; // Image
        innerHTML += "</div><div class='col-sm-9'>";
        innerHTML += `<p>${testimonial}</p>`; // Quote
        innerHTML += `<small>${author}</small>`; // Author
        innerHTML += "</div></div></blockquote></div>";

        const indicatorHTML = `<li data-target="#quote-carousel" data-slide-to="${i + 1}" class="${activeClass}"></li>`
        const indicator = createElementFromHTML(indicatorHTML);

        const parent = document.getElementById('carousel-inner');
        const newChild = createElementFromHTML(innerHTML);
        parent.appendChild(newChild);
        document.getElementById('carousel-indicators').appendChild(indicator);
    }


    // Set the carousel options
    $('#quote-carousel').carousel({
        pauseOnHover: true,
        interval: 40000,
    });
});
