import React, { Component } from 'react';
import Me from './Me.png';
import BioTimeline from './BioTimeline';

class App extends Component {
    contactInfo = [
        {
            platform: 'LinkedIn',
            url: 'https://www.linkedin.com/in/ryangmcintyre/'
        },
        {
            platform: 'GitHub',
            url: 'https://github.com/ryan-mcintyre'
        }
    ]

    events = [
        {
            title: 'Hello World v1.0',
            description: 'I was born in Midland, Michigan, 1994.'
        },
        {
            title: 'Hello World v2.0',
            description: 'I began programming in high school. I joined the programming club during my senior year.'
        },
        {
            title: 'Go Green!',
            description: 'I enrolled at Michigan State University, majoring in mechanical engineering. After one semester, having taken one computer science class, I switched my major to Comp Sci.'
        },
        {
            title: 'On Wisconsin?',
            description: 'I worked as an intern for Epic Systems in Madison, Wisconsin.'
        },
        {
            title: 'Mission Graduation: Complete',
            description: 'I graduated from the Michigan State Honors College in 2016.'
        },
        {
            title: 'An Epic Journey',
            description: 'After graduating, I started at Epic Systems full time.'
        },
        {
            title: '...to infinity and beyond!',
            description: 'I\'m ready to start the next part of my journey.'
        }
    ]

    render() {
        return (
            <div className="bioCont">
                <BioSidebar contactInfo={this.contactInfo} />
                <BioTimeline events={this.events} />
            </div>
        );
    }
}

const BioSidebar = props => {
    const { contacts } = props.contactInfo.map((contact, index) => {
        return (
            <tr key={index}>
                <td>
                    <a
                        className="bioLink"
                        href={contact.url}
                        rel="noopener noreferrer"
                    >
                    {contact.platform}
                    </a>
                </td>
            </tr>
        );
    });

    return (
        <div className="bioSidebar">
            <img src={Me} className="bioPic" alt="Me" />
            <table>
                <tbody>
                    {contacts}
                </tbody>
            </table>
        </div>
    );
}

export default App;
