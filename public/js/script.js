
$(function () {

    $('.chat-window').hide();
    $('.chat-btn').click(function () {
        console.log("Clicked...");
        $(this).hide();
        $('.chat-window').show();
        writeBotMessage("How may I help you?");
        $('#user-input').focus();
        //console.log("Socket status: "+socket.connected);
    });

    //check the key pressed and proceed
    $(document).on("keypress", "#user-input", (event) => {
        //check if "Enter" key was pressed
        if (event.which == 13) {
            var msg = $("#user-input").val();


            //validate the input and proceed
            if (validateInput(msg)) {
                //get questions for intended category
                writeUserMessage(msg)
                $("#user-input").val("");
                $('#user-input').focus();


            }
        }
    });

    //function to validate the user input
    function validateInput(message) {
        
        if (message === "" || isNaN(message) || message < 1 ) {
            writeErrorMessage("Please enter correct number");
            $("#user-input").val("");
            return false;
        }
        return true;
    }



    function writeBotMessage(text) {
        const bot_msg_template = document.querySelector('#bot-msg-template');
        const node1 = document.importNode(bot_msg_template.content, true);
        node1.querySelector('.bot-chat-msg').innerHTML = text;
        $(".conversation").append(node1);
        scrollToBottom();
    }

    function writeUserMessage(text) {
        const user_msg_template = document.querySelector("#user-msg-template");
        const node2 = document.importNode(user_msg_template.content, true);
        node2.querySelector('.user-chat-msg').innerHTML = text;
        $(".conversation").append(node2);
        scrollToBottom();
    }
    //scroll to bottom of the conversation
    function scrollToBottom() {
        var element = document.getElementsByClassName("conversation")[0];
        element.scrollTop = element.scrollHeight - element.clientHeight;

    }


});