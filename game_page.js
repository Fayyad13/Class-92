
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1-name").innerHTML = player1_name + " : ";
document.getElementById("player2-name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("question_turn").innerHTML = "Question Turn - " + player1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player2_name;

function send()
{
    get_word = document.getElementById("word_id").value;
    word = get_word.toLowerCase();
    
    charAt1 = word.charAt(1);
    console.log(charAt1);

    next1 = Math.floor(word.length/2);//3
    charAt2 = word.charAt(next1);
    console.log(charAt2);

    next2 = word.length - 1; //5
    charAt3 = word.charAt(next2);
    console.log(charAt3);

    remove1 = word.replace(charAt1, "_");
    remove2 = remove1.replace(charAt2, "_");
    remove3 = remove2.replace(charAt3, "_");
    console.log(remove3);

    row1 = "<h4 id='word_display'> Q. " + remove3 + "</h4>";
    row2 = "A. <input id='word_name_input' type = text placeholder='Enter Answer'>";
    row3 = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>"
    rows = row1 + row2 + row3;
    document.getElementById("output").innerHTML = rows;
    document.getElementById("word_id").value = "";
}

question_turn = "Player1";
answer_turn = "Player2";

function check()
{
    get_answer = document.getElementById("word_name_input").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lowercase - " + answer);

    if(answer == word)
    {
        if(answer_turn == "Player1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if(question_turn == "Player1")
    {
        question_turn = "Player2";
        document.getElementById("question_turn").innerHTML = "Question Turn - " + player2_name;
    }
    else
    {
        question_turn = "Player1";
        document.getElementById("question_turn").innerHTML = "Question Turn - " + player1_name;
    }

    if(answer_turn == "Player1")
    {
        answer_turn = "Player2"
        document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player2_name;
    }
    else
    {
        answer_turn = "Player1";
        document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}