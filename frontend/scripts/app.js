const allMessages = [];

var author = "Phil";
var channel = "Channel 3"; 

const getData = () => {
    $.getJSON("/api/messages", (data) => {
            let message = JSON.parse(data);
            if(allMessages.filter(m => m._id === message._id).length > 0)
                return;
            appendMessage(message);
        }
    );
};

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
    
    $.post("/api/messages", {content, author, channel}).done((data) => {
        $('#content').val('');
        appendMessage(data.sendMsg);
    });
}

//setInterval(getData, 500);
