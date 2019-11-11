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

    async getData() {
        const url = 'https://api.telegram.org/bot{token}/getUpdates';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data.result.filter(update => update.hasOwnProperty('poll'));
    }

    // sendMessage = async () => {
    //     // const apiUrl = 'https://api.telegram.org/bot';
    //     // const method = 'sendMessage';
    //
    //     try {
    //         const data = await this.postData('https://api.telegram.org/bot{token}/sendPoll', {
    //             'chat_id': -332588433,
    //             // 'text': 'hello world'
    //             'question': 'btfht',
    //             'options': ['gb', 'Нgbf']
    //         });
    //         console.log(data); // JSON-string from `response.json()` call
    //     } catch (error) {
    //         console.error(error);
    //     }
    //     {token}
    //
    //     // this.postData('https://api.telegram.org/bot{token}/sendMessage', {'chat_id': 461497162, 'text': 'hello world'} )
    //     // return this.postData('https://api.telegram.org/bot{token}/sendPoll', {'chat_id': 461497162, 'question': 'btfht', 'options': ['gb','Нgbf']} )
    //
    // };


    sendMessage = async () => {
        try {
            await this.postData('https://api.telegram.org/bot{token}/sendPoll', {
                'chat_id': -337921637,
                'question': 'Do you know the solution?',
                'options': ['Yes!', 'No;(']
            });
        } catch (error) {
            console.error(error);
        }
    };

    getUpdates = async () => {
        try {
            await this.getData()
                .then(resp => console.log(resp))
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <button onClick={this.sendMessage}>Send message</button>
                <button onClick={this.getUpdates}>Get statistics</button>
            </div>
        );
    }
}

export default Main;
