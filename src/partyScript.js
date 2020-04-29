
/* setup page */

var html =  '<div class="party-sidebar"><div class="sidebar-title">Crave Party</div><div class="sidebar-chat"></div><input type="text" class="text-input"></input></div>';
$(".site").append(html);

$('.sidebar-chat').append('<p>User1 has joined.</p>')

/* helper functions */

$('.text-input').on('keydown', function(event) {
    if (event.key == "Enter") {
        console.log(event)
        $('.sidebar-chat').append('<p>User1: ' + this.value + '</p>')
        this.value = ""
    }
})