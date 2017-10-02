'use strict';

var questions = [
    {
        "Which one of Monica's boyfriends has a drinking problem?": [
            "Fun Bobby",
            "Paul the Wine Guy",
            "Richard",
            "Chip",
            "Peter"
        ]
    },
    {
        "Which two actresses portray Rachel's sisters, Jill and Amy Green, respectively?": [
            "Reese Witherspoon and Christina Applegate",
            "Christina Applegate and Jane Sibbett",
            "Reese Witherspoon and Christine Taylor",
            "Anita Barone and Jane Sibbett",
            "Jane Sibbett and Susan Bunch"
        ]
    },
    {
        "What is the name of Phoebe and Ursela's half-nephew?": [
            "Frank Buffay Jr. Jr.",
            "Francis Buffay the First",
            "Frank Buffay the Third",
            "Franklin Buffay, Jr.",
            "Franklinson Buffay"
        ]
    },
    {
        "What skill does Joey have on his resume?": [
            "Drinking a gallon of milk in ten seconds",
            "Foosball",
            "Really good acting",
            "Fluency in German",
            "Eating more sandwiches than the Subway Guy",
            "Magic",
            "Ribbon dancing",
            "Jazz scatting",
            "Pointing aggressively",
            "Prolonged eye contact"
        ]
    },
    {
        "Which girlfriend of Joey's does Chandler kiss?": [
            "Kathy, the girl from Criminal Minds",
            "Caitlin, the girl from Law and Order",
            "Kathryn, the girl from Punky Brewster",
            "Kate, the girl from Days of Our Lives",
            "Katie, the girl from General Hospital"
        ]
    },
    {
        "Who cheats on Chandler with fellow actor, Nick?": [
           "Kathy, the girl from Criminal Minds",
           "Caitlin, the girl from Law and Order",
           "Kathryn, the girl from Punky Brewster",
           "Kate, the girl from Days of Our Lives",
           "Katie, the girl from General Hospital"
        ]
    },
    {
        "What song does Ross discover makes Emma laugh?": [
            "Baby Got Back",
            "Too Legit to Quit",
            "Ice Ice Baby",
            "Jump Around",
            "U Can't Touch This"
        ]
    },
    {
        "Who is the actress portraying Joey's paleontologist girlfriend?": [
            "Aisha Tyler",
            "Gabrielle Union",
            "Maggie Wheeler",
            "Charlie Wheeler"
        ]
    },
    {
        "What sullen greeting does Ross frequently use?": [
            "Hi",
            "Hey guys",
            "Hello",
            "Hey",
            "I'm here"
        ]
    },
    {
        "Which of the following actors never makes an appearance on Friends?": [
            "Stephen Baldwin",
            "Robin Williams",
            "Ben Stiller",
            "Adam Goldberg",
            "George Clooney"
        ]
    },
    {
        "Which of the following costumed duo is married?": [
            "Catwoman and the Pink Bunny",
            "Santa Claus and Superman",
            "Spudnik and the Holiday Armadillo",
            "Supergirl and the Solar System",
            "Santa Claus and Catwoman",
            "Solar System and Spudnik"
        ]
    },
    {
        "The character dressed as the Solar System is portrayed by which guest star?": [
            "Sean Penn",
            "Danny DeVito",
            "Jon Favreau",
            "Hugh Laurie",
            "Alec Baldwin"
        ]
    },
    {
        "What is it that Joey licks before putting back in the drawer?": [
            "Spoon",
            "Fork",
            "Butter knife",
            "Spatula",
            "Whisk",
            "Saucer",
            "Pastrami"
        ]
    },
    {
        "What actor trains to be the Ultimate Fighting Champion?": [
            "Jon Favreau",
            "Bruce Willis",
            "Matt LeBlanc",
            "Charlie Sheen",
            "Paul Rudd"
        ]
    },
    {
        "In the seventh season, an episode ends with which characters eating cheesecake off of the ground?": [
            "Rachel, Joey and Chandler",
            "Rachel, Phoebe and Joey",
            "Chandler and Phoebe",
            "Phoebe and Joey",
            "Chandler and Rachel",
            "Phoebe, Monica and Mike"
        ]
    },
    {
        "In what way is Rachel's cat described?": [
            "Inside out",
            "Like a naked molerat",
            "Emaciated",
            "Definitely evil",
            "A cry for attention",
            "Reincarnation of Pheobe's aunt",
            "Better looking than Ross"
        ]
    },
    {
        "How does Ross find out that Carol is expecting a boy?": [
            "Rachel lets it slip",
            "Carol calls to tell him",
            "Susan visits him at the museum",
            "Joey tells him unintentionally",
            "He asks Carol's O. B. G. Y. N.",
            "He sees Monica's blue decorations from his apartment",
            "Monica lets it slip",
            "Phoebe lies and tells him it's a girl"
        ]
    },
    {
        "When Pheobe puts on a janitor's uniform, what does the name tag read?": [
            "Ben",
            "Joseph",
            "Richard",
            "Gavin",
            "Frank",
            "Joey",
            "David",
            "Mike"
        ]
    },
    {
        "What episode first shows Carol Willick's character being played by a different actress?": [
            "Season One, Episode Nine",
            "Season One, Episode Four",
            "Season One, Episode Twenty",
            "Season Two, Episode Two",
            "Season Two, Episode Four",
            "Season Three, Episode One"
        ]
    },
    {
        "In the first season, what do the friends end up having for Thanksgiving dinner?": [
            "Grilled cheese and tomato soup",
            "Peanut butter and jelly sandwiches",
            "Spaghettios",
            "Mini quiches",
            "Pizza",
            "Pulled pork"
        ]
    },
    {
        "For Rachel's surprise party, what does Monica put Phoebe in charge of?": [
            "Cups and ice",
            "Plates and napkins",
            "Music and entertainment",
            "Moist towelettes",
            "Getting Rachel to the party",
            "Serving drinks"
        ]
    },
    {
        "In Season Five, what kind of commercial do Ben and Joey audition for?": [
            "Soup",
            "Cereal",
            "Lipstick",
            "Dangers of secondhand smoking",
            "Pizza bagels",
            "Oatmeal",
            "Anti-bullying"
        ]
    },
    {
        "Among the supporting cast, the most reoccuring character is portrayed by which guest star?": [
            "James Michael Tyler as Gunther",
            "Tom Selleck as Dr. Richard Burke",
            "Paul Rudd as Mike Hannigan",
            "Elliott Gould and Christina Pickles as Jack and Judy Geller",
            "Maggie Wheeler as Janice Litman",
            "Jane Sibbett as Carol Willick",
            "Cole Sprouse as Ben Geller",
            "Dylan Sprouse as Ben Geller"
        ]
    },
    {
        "Dr. Tim Burke is played by Michael Vartan: an actor famously known for his portrayal of what leading character in a television series?": [
            "Agent Michael Vaughn of Alias",
            "Dr. Spencer Reid of Criminal Minds",
            "Agent Mike Warren of Graceland",
            "Agent Dale Jakes of Graceland",
            "Agent Timothy McGee of N.C.I.S.",
            "Detective Nick Stokes of C.S.I",
            "Dr. John Carter of E.R."
        ]
    },
    {
        "Brad Pitt guest stars in Season Eight's Thanksgiving episode. Still married to Jennifer Aniston at the time, how long after this episode's air date does the couple announce their divorce?": [
            "Four years",
            "About two and a half years",
            "Eighteen months",
            "Less than one year",
            "Six and a half years",
            "Two years",
            "Six months"
        ]
    },
    {
        "According to the rumor Rachel started in high school, who did Ross make out with?": [
            "The librarian",
            "One of the lunch ladies",
            "A substitute teacher",
            "The museum tour guide",
            "Monica's Algebra tutor",
            "Chandler's mom",
            "His imaginary girlfriend"
        ]
    },
    {
        "What is Marcel's real name?": [
            "Katie",
            "Marcel",
            "Banks",
            "Freddie Prinze",
            "Monkeegan Michael Key",
            "Joshua",
            "Beckman",
            "Al Yankovic",
            "Jonathan Taylor Thomas",
            "Monkey, the Monkey",
            "Moesha",
            "Uncle Phil"
        ]
    },
];
