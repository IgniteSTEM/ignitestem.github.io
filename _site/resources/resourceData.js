// Color scheme
const blue = "#3286A8";
const red = "#D5491F";
const orange = "#DA8D0F";
const green = "#80A454";
const gray = "#9DB7C1";

// Set dictionary values
var categories = new Object(); // Create dictionary of categories
categories["Workshop"] = { name: "Workshop", color: blue };
categories["Speaker"] = { name: "Speaker", color: orange };
categories["New York"] = { name: "New York", color: red };
categories["Keynote"] = { name: "Keynote", color: green };
categories["Other"] = { name: "Other", color: gray };

resourcesData = [
    {
        name: "Opening Keynote NY 2018",
        subtitle: "Pat Yongpradit",
        slug: "https://www.youtube.com/watch?v=UlW6notD24o",
        image: "https://pbs.twimg.com/media/DarW6aAXkAMsQ_E.jpg",
        category: categories[ "Keynote" ].name,
        categoryColor: categories[ "Keynote" ].color,
        description: "IgniteSTEM New York 2018 opening keynote."
    },
    {
        name: "Hackathon 101",
        subtitle: "What is a hackathon?",
        slug: "https://docs.google.com/presentation/d/1FNfcHycjvCt9JaYobSpIjB6Z5F4ZZy9RzdVoSaMICcc/edit",
        image: "./../assets/images/resources/hackathons.jpg",
        category: categories[ "Workshop" ].name,
        categoryColor: categories[ "Workshop" ].color,
        description: "Hackathon presentation at IgniteSTEM New York 2018."
    },
    {
        name: "2018 Schedule",
        subtitle: "Official New York 2018 Schedule",
        slug: "https://files1.mixmaxusercontent.com/qFKk2kJpMAiobyj6z/f/aU9VX610HM7UeIiyu/?messageId=MvztNu6Q1t4bPlnZ2&sc=false&rn=&re=gInJ3buMHc01GQl52bsxWYi1mI ",
        image: "./../assets/images/resources/schedule.jpg",
        category: categories[ "New York" ].name,
        categoryColor: categories[ "New York" ].color,
        description: "Schedule"
    },
    {
        name: "2018 Booklet",
        subtitle: "Booklet with speakers, bios, etc.",
        slug: "https://drive.google.com/file/d/14BlQeVut2lRWtqldVHkZ5S0weVeBhDE7/view",
        image: "./../assets/images/resources/booklet.jpg",
        category: categories[ "New York" ].name,
        categoryColor: categories[ "New York" ].color,
        description: "Booklet"
    },
    {
        name: "Chi Nguyen",
        subtitle: "Project Manager at Major League Hacking",
        slug: "https://drive.google.com/file/d/1Ds622iBeiOsgXLuHkzrgYEQDy6kuy7zk/view",
        image: "https://hackcon.mlh.io/img/talks/faces/chi-nguyen.jpg",
        category: categories[ "Speaker" ].name,
        categoryColor: categories[ "Speaker" ].color,
        description: "Slides"
    },
    {
        name: "Rafe Steinhauer",
        subtitle: "Princeton Design Thinking",
        slug: "https://drive.google.com/file/d/0BxdtRPa7zgRpTlhleHFWb1p5WlRTUlVyTkpOcEFjNXl4U3Rr/view?usp=sharing",
        image: "https://news.virginia.edu/sites/default/files/styles/uva_basic_article/public/article_image/Steinhauer_Rafe_by_JohnRhea.JPG?itok=o3ywvM7y",
        category: categories[ "Speaker" ].name,
        categoryColor: categories[ "Speaker" ].color,
        description: "Slides"
    },
    {
        name: "Ayna Agarwal",
        subtitle: "Co-Founder of She++",
        slug: "https://drive.google.com/file/d/0BxdtRPa7zgRpR0NLNU1QQ0doTGNjY2FuNlFSUkNPZXpmOFM0/view?usp=sharing",
        image: "https://cdn-images-1.medium.com/max/640/1*3MdRbAxQHiDBpxpU5Ks4wA.jpeg",
        category: categories[ "Speaker" ].name,
        categoryColor: categories[ "Speaker" ].color,
        description: "Slides"
    },
    {
        name: "Jason Park",
        subtitle: "Princeton Day School STEAM",
        slug: "https://drive.google.com/file/d/0BxdtRPa7zgRpOXhDU0liSzBreThHOEVyZGtQcEFuSzJGNGtB/view?usp=sharing",
        image: "https://www.pds.org/uploaded/faculty/Large_Photos/Jason_Park_5791.JPG",
        category: categories[ "Speaker" ].name,
        categoryColor: categories[ "Speaker" ].color,
        description: "Slides"
    },
]
