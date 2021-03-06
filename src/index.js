/******************************************************************************
* Friends Triviani
* Friends Sitcom Trivia (Unofficial)
* SLY <yarboro.stephanie@gmail.com>
* github.com/slyarboro
* The skill supports single player and does not support games across sessions.
******************************************************************************/

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
        "In the friends' first Thanksgiving episode, why can't Joey celebrate the holiday with his family?": [
            "They think he has a venereal disease",
            "He is embarrassed about the lipstick commercial",
            "Phoebe refuses to let him go",
            "He doesn't know about his sister's wedding",
            "They are breaking tradition and flying to Arizona",
            "Chicken pox"
        ]
    },
    {
        "For Rachel's surprise party, what does Monica put Pheobe in charge of?": [
            "Cups and ice",
            "Plates and napkins",
            "Music",
            "Moist towelettes",
            "Getting Rachel to the party",
            "Inviting Ursela",
            "Keeping Ross distracted",
            "Cleaning her cleaning supplies",
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
        "Dr. Tim Burke is played by Michael Vartan; an actor famously known for his portrayal of what leading character in a television series?": [
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
        "Brad Pitt guest stars in Season Eight's Thanksgiving episode. Still married to Jennifer Aniston at the time, how long after this episode's air date do the couple divorce?": [
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

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

        if (event.session.application.applicationId !== "amzn1.ask.skill.ad0d3f09-a9cf-4cf4-8ee0-0f2d06f0edd3") {
            context.fail("Invalid Application ID");
        }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 4;
var GAME_LENGTH = 10;
var CARD_TITLE = "Friends Triviani";

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "Well, hello! \n Welcome to Friends Triviani. \n I will ask you " + GAME_LENGTH.toString()
            + " questions;    to play, simply tell me the number of your answer choice. Now, could you BE more ready to begin? \n ",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " \n",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". \n"
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse("Welcome", speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
    // only ANSWER_COUNT will be selected.
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT){
        throw "Not enough answers for question.";
    }

    // Shuffle the answers, excluding the first element.
    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game. Set a flag to track that we've prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes,
            buildSpeechletResponse("New Game?", speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided answer isn't a number > 0 and < ANSWER_COUNT,
        // return an error message to the user. Remember to guide the user into providing correct values.
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse("Invalid Answer", speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && parseInt(intent.slots.Answer.value) == correctAnswerIndex) {
            currentScore++;
            speechOutputAnalysis = "correct. ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "wrong. "
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
        if (currentQuestionIndex == GAME_LENGTH - 1) {
            speechOutput = userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                + GAME_LENGTH.toString() + " questions correct. Thank you for playing!";
            callback(session.attributes,
                buildSpeechletResponse("Thanks for playing, Good Bye!", speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " \n";
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". \n"
            }
            speechOutput += userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "\n Your score is " + currentScore.toString() + ". \n" + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText":
                    questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse("Question " + questionIndexForSpeech.toString(), speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.

    // Ensure that session.attributes has been initialized
    if (!session.attributes) {
        session.attributes = {};
    }

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "I will ask you " + GAME_LENGTH + " multiple choice questions. Respond with the number of the answer. "
        + "For example, say one, two, three, or four to confirm your final answer. To start a new game at any time, say, start game. "
        + "To repeat the last question, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . "
        + "Would you like to keep playing?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}
