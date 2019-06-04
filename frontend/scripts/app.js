const allMessages = [];

var author = "Phil";
var channel = "Channel 3"; 



const getData = () => {
    let url = "/api/messages";
    if(allMessages.length > 0) {
        url += `?id=${allMessages[allMessages.length - 1]._id}`;
    }
    $.getJSON(url).done((message) => {
        if(allMessages.filter(m => m._id === message._id).length > 0)
            return;
        appendMessages(message);
    });
};

const appendMessages = (data) => {
    data.forEach(e => {
        appendMessage(e);
    });
}

const appendMessage = (data) => {
    allMessages.push(data);
    let messages = $('.messages');
    messages.append(`
    <div class="message">
        <div class="author">${data.author}</div>
        <div class="content">${data.content}</div>
        <div clSERVERIPass="time">${data.time}</div>
    </div>
    `);
    //scrolls to bottom of messages
   messages.scrollTop(messages.prop("scrollHeight"));
}

const sendMessage = () => {
    let content = $('#content').val();
    if(!content || !content.trim())
        return;
    $.post("/api/messages", {content, author, channel}).done((data) => {
        $('#content').val('');
        appendMessage(data.sendMsg);
    });
}
$(document).on('keypress',function(e) {
    if(e.which == 13) {
        sendMessage();
    }
});

setInterval(getData, 1000);
