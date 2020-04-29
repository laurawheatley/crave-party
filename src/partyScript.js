var sessionID = ''
var partyCreated = false
/* setup page */

var html =  '<div class="party-sidebar"><div class="sidebar-title">Crave Party<div class="sidebar-options">...</div></div><div class="sidebar-chat"></div><input type="text" class="text-input"></input></div>';
$(".site").append(html);
$("input").prop('disabled', true);

/* helper functions */

$('.text-input').on('keydown', function(event) {
    if (event.key == "Enter") {
        console.log(event)
        $('.sidebar-chat').append('<p>User1: ' + this.value + '</p>')
        this.value = ""
    }
})

$('.sidebar-options').on('click', function(event) {

    /* creation stage */
    if (!partyCreated) {
        var startNew = confirm('Start a new Crave Party?')
        if (startNew) {
            sessionID = pseudandomcode(8)
            alert('The code for your party is: ' + sessionID)
            partyCreated = true
            userID = 1
            $('.sidebar-chat').append('<p>User1 has joined.</p>')
            $("input").prop('disabled', false);

        } else {
            sessionID = prompt("Enter the code of the Crave Party you wish to join:")
            //TODO: need to know how many users are here already to assign a userID
            //userID = 1
            //$('.sidebar-chat').append('<p>User1 has joined.</p>')
            //$("input").prop('disabled', false);s
        }

    /* checking code */
    } else {
        alert('The code for your party is: ' + sessionID)
    }
})

function pseudandomcode(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }