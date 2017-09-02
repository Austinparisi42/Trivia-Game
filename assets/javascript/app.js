$(document).ready(function() {

    var interval;

    var timer = 30;

    var correct = 0;

    var wrong = 0;
    
    var currentQ = 0;

    var questions = [
        q1 = {
            question: "What birthday does Bilbo celebrate before leaving the Shire?",
            choices: ["100th", "101st", "111th", "200th"],
            answer: 2
        },
        q2 = {
            question: "Who do the Hobbits encounter at the Prancing Pony?",
            choices: ["Gandalf", "Boromir", "Legolas", "Strider"],
            answer: 3
        },
        q3 = {
            question: "How many members make up the fellowship?",
            choices: ["Nine", "Five", "Seven", "Ten"],
            answer: 0
        },
        q4 = {
            question: "What's taters, Precious?",
            choices: ["PO", "TAY", "TOES", "All of the above"],
            answer: 3
        },
        q5 = {
            question: "How does Sam suggest potatoes be cooked?",
            choices: ["Boil 'em", "Mash 'em", "Stick 'em in a stew", "All of the above"],
            answer: 3
        },
        q6 = {
            question: "How many rings of power are there?",
            choices: ["Five", "Twenty", "Eight", "Twelve"],
            answer: 1
        },
        q7 = {
            question: "At the end of the trilogy, where does Frodo go?",
            choices: ["Rivendell", "Bagend", "Gondor", "Undying Lands"],
            answer: 3
        },
        q8 = {
            question: "Who is the captain of Gondor?",
            choices: ["Boromir", "Faramir", "Aragorn", "Eowyn"],
            answer: 1
        },
        q9 = {
            question: "What group of wizards is Gandalf a part of?",
            choices: ["The Black Council", "The Istari", "Erigion", "The Shire"],
            answer: 1
        },
        q10 = {
            question: "What is the name of the Balrog that Gandalf fights in the Mines of Moria?",
            choices: ["Morgon", "Durin's Bane", "Morgoth", "Shadow and Flame"],
            answer: 1
        }
    ];

    

    $(".buttonStart").click(function() {
        
        
        askQuestion();
    });



    // timer function

    function countdown() {
        clearInterval(interval);
        timer = 30;

        interval = setInterval(function() {
            timer--;
            if (timer === 0) {
                currentQ++;
                askQuestion();
                
                
            }
            if (timer > 0) {
                $("#timeRemaining").html("Time Remaining: " + timer);
            }
            
        }, 1000);
    };

    function askQuestion() {
        countdown();
        
        //what question is the user on now?
        //set that question to currentQ
        var questionObject = questions[currentQ];
        console.log(questionObject);
        $(".questionSection").html(questionObject.question);
        $(".buttonA").html(questionObject.choices[0]);
        $(".buttonB").html(questionObject.choices[1]);
        $(".buttonC").html(questionObject.choices[2]);
        $(".buttonD").html(questionObject.choices[3]);
        
    };

    $(".answerButton").on("click",function() {
        console.log($(this).text());
        var correctAnswer = questions[currentQ].answer;
        console.log(questions[currentQ].choices[correctAnswer]);

        

        if ($(this).text() === questions[currentQ].choices[correctAnswer]) {
            console.log("correct");
            correct++;
            console.log(correct);
        }
        else {
            console.log("incorrect");
            wrong++;
            console.log(wrong);
        }

        currentQ++;
        console.log("currentQ", currentQ);

        askQuestion();

        if (currentQ > questions.length) {
            // display right/wrong
            $("#timeRemaining").html("Time's up! You answered " + correct + " questions right and " + wrong + " questions wrong. Try again?");
            // prompt retry
        }
    });

    


    


});