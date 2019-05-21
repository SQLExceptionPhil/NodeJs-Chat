const allMessages = [];
const getData = () => {
    $.getJSON("/api/messages", (data) => {
            let message = JSON.parse(data);
            if(allMessages.filter(m => m.id === message.id).length > 0)
                return;
            allMessages.push(message);
            let messages = $('.messages');
            messages.append(`
            <div class="message">
                <div class="author">${message.author}</div>
                <div class="content">${message.content}</div>
                <div class="time">${message.time}</div>
            </div>
            `);
           messages.scrollTop(messages.prop("scrollHeight"));
        }
    );
};

setInterval(getData, 500);
