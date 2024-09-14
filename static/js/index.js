import { Component, render } from 'preact';
import { html } from 'htm/preact';

import { TRACKS } from './content/ams2.js';

class App extends Component {
    constructor({ tracks, date }) {
        super();
        const trackOfTheDay = this.#selectTrack(tracks, date);
        this.state = { tracks, date, trackOfTheDay };
    }

    render() {
        const { location, track, layout } = this.state.trackOfTheDay;
        return html`
        <div class="container-fluid vh-100 d-flex justify-content-center align-items-center flex-column">
            <div>${this.state.date.toDateString()}</div>
            <h1 class="display-1">${layout}</h1>
            <div>${location} • ${track}</div>
        </div>
        `;
    }

    #selectTrack(tracks, date) {
        const k = date.getYear() * date.getMonth() * date.getDate();
        const trackIndex = k % tracks.length;
        return tracks[trackIndex];
    }
}

render(html`<${App} tracks=${TRACKS} date=${new Date()}/>`, document.body);
