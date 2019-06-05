var allMessages = [];
const groups = [];

var author = "";
var currentGroup = ""; 

const addGroup = () => {
    let groupName = '';
    groupName = prompt('Name der neuen Gruppe');
    if(!groupName || !groupName.trim()) 
        return;
    $.post('./api/groups', {name: groupName}).done(data => {
        appendGroup(data.group);
    });
};

const appendGroup = (data) => {
    groups.push(data);
    $('#add_group').before(`
    <li id="${data._id}" onclick="changeGroup('${data._id}')">${data.name}</li>
    `);
}

const changeGroup = (id) => {
    $('li.group-active').toggleClass('group-active');
    $(`li#${id}`).toggleClass('group-active');
    clearMessages();
    currentGroup = id;
};

const getGroups = () => {
    $.getJSON('/api/groups').done(data => {
        data.forEach(e => {
            appendGroup(e);
        });
    });
};

const getData = () => {
    if(!currentGroup || !currentGroup.trim())
        return;

    let url = `/api/messages?group=${currentGroup}`;
    if(allMessages.length > 0) {
        url += `&id=${allMessages[allMessages.length - 1]._id}`;
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
    let date = new Date(data.time + "");
    let dateString = date.toLocaleString("de-AT", {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
    messages.append(`
    <div class="message">
        <div class="author">${data.author}</div>
        <div class="content">${data.content}</div>
        <div class="time">${dateString}</div>
    </div>
    `);
    //scrolls to bottom of messages
   messages.scrollTop(messages.prop("scrollHeight"));
}

const clearMessages = () => {
    allMessages = [];
    $('div.message').remove();
};

const sendMessage = () => {
    if(!currentGroup || !currentGroup.trim())
    {
        alert('Bitte gehe zuerst in eine Gruppe!');
        return;
    }
    let content = $('#content').val();
    if(!content || !content.trim())
        return;
    $.post("/api/messages", {content, author, channel: currentGroup}).done((data) => {
        $('#content').val('');
        appendMessage(data.sendMsg);
    });
}

author = Cookies.get('author');

while(!author || !author.trim()) {
    author = prompt('Dein Username:');
}

Cookies.set('author', author, {expires: 1});

$(document).on('keypress',function(e) {
    if(e.which == 13) {
        sendMessage();
    }
});

setInterval(getData, 1000);

$(document).ready(() => {
    getGroups();
});