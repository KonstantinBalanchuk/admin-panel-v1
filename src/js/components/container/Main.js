import React, {Component} from "react";

class Main extends Component {

    async postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        console.log(response.json());
        return await response.json(); // parses JSON response into native JavaScript objects
    }

    sendmessage = async () => {
        // const apiUrl = 'https://api.telegram.org/bot';
        // const token = '895555100:AAFNqaj6zHSlJ1QzChvln7j2ki5kxxVrlt8';
        // const method = 'sendMessage';

        try {
            const data = await this.postData('https://api.telegram.org/bot895555100:AAFNqaj6zHSlJ1QzChvln7j2ki5kxxVrlt8/sendPoll', {
                'chat_id': -332588433,
                // 'text': 'hello world'
                'question': 'btfht',
                'options': ['gb', 'Нgbf']
            });
            console.log(data); // JSON-string from `response.json()` call
        } catch (error) {
            console.error(error);
        }

        // this.postData('https://api.telegram.org/bot895555100:AAFNqaj6zHSlJ1QzChvln7j2ki5kxxVrlt8/sendMessage', {'chat_id': 461497162, 'text': 'hello world'} )
        // return this.postData('https://api.telegram.org/bot895555100:AAFNqaj6zHSlJ1QzChvln7j2ki5kxxVrlt8/sendPoll', {'chat_id': 461497162, 'question': 'btfht', 'options': ['gb','Нgbf']} )

    };

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <button onClick={this.sendmessage}>send message</button>
            </div>
        );
    }
}

export default Main;
