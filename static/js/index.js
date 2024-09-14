import { Component, render } from 'preact';
import { html } from 'htm/preact';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return [
            "ok"
        ];
    }
}

render(html`<${App} />`, document.body);
