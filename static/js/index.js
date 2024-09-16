import { Component, render } from 'preact';
import { html } from 'htm/preact';
import { Chance } from 'chance';

import { TRACKS } from './content/ams2.js';

class App extends Component {
    constructor({ game, tracks }) {
        super();
        this.state = { game, tracks, date: new Date() };
    }

    render() {
        const { game, tracks, date } = this.state;
        const { location, track, layout } = this.#selectTrack(tracks, date);
        return html`
        <div class="container-fluid vh-100 d-flex justify-content-center align-items-center flex-column">
            <p class="text-center">Track of the Day • ${game}</p>
            <div class="btn-group">
                <button class="btn btn-outline-light" onclick=${() => this.#changeDate(-1)}>◁</button>
                <button class="btn btn-outline-light" style="width: 12em;" onclick=${() => this.setState({ date: new Date() })}>${date.toDateString()}</button>
                <button class="btn btn-outline-light" onclick=${() => this.#changeDate(+1)}>▷</button>
            </div>
            <h1 class="fs-1 my-5 text-center">${layout}</h1>
            <div class="text-center">${location} • ${track}</div>
        </div>
        `;
    }

    #selectTrack(tracks, date) {
        const seed = date.getFullYear() * 10000 + date.getMonth() * 100 + date.getDate();
        return new Chance(seed).pickone(tracks);
    }

    #changeDate(delta) {
        const { date } = this.state;
        date.setDate(date.getDate() + delta);
        this.setState({ date });
    }
}

render(html`<${App} game="Automobilista 2" tracks=${TRACKS} />`, document.body);
