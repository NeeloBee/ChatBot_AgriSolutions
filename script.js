function talk () {
    var know = {
        "Hello" : "Hello, welcome to AgriSolution",
        "How are you?" : "I am good",
        "How can I help you?" : "Please input the number you need assistance with",
        "Ok" : "Thank you visiting AgriSolutions",
        "Bye" : "Remember to revisit us when you are need any farming hints", 
    };
    var user = document.getElementById("userBox").value;

    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br";
    } else {
        document.getElementById('chatLog').innerHTML = "Sorry, I didn't understand <br>";
    }

    }
}