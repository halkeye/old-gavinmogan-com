'use strict';
const React = require('react');
const DocumentMeta = require('react-document-meta');
const config = require('../config.js');
const ItemBlock = require('./ItemBlock.jsx');

export default class Presentations extends React.Component {
    render() {
        const metaData = config.makeMetaTags({ title: 'Presentations', description: "The presentations Gavin has given"});
        return (
            <div className="container">
                <DocumentMeta {...metaData} />
                <h1>Presentations</h1>
                <ItemBlock key="codecoffee-why-not-testing"
                    link="http://slides.com/halkeye/why-not-testing"
                    title="Why not Testing? (April 2016)"
                    labels={["meetup"]}
                >
                    <div>Testing presentation for <a href="http://www.meetup.com/Code-Coffee-Vancouver/events/230135012/">Code Coffee Vancouver</a>. Goal was to show that testing doesn't have to be perfect, any you can really start anywhere.</div>
                </ItemBlock>
                <ItemBlock key="codecoffee-vagrant"
                    link="http://slides.com/halkeye/give-your-development-a-portable-home-with-vagrant"
                    title="Give your development a portable home with Vagrant (Sept 2015)"
                    labels={["meetup"]}
                >
                    <div>Vagrant presentation for <a href="https://www.meetup.com/Code-Coffee-Vancouver/events/224950040/">Code Coffee Vancouver</a>. It was my first attempt at doing one for a large group.</div>
                </ItemBlock>
                <ItemBlock key="react-vs-angular"
                    link="http://presentations.gavinmogan.com/react-vs-angular/"
                    title="React Vs Angular (June 2015)"
                    labels={["internal"]}
                >
                    <div>Tried to show off some of the things that react does better than angular to the team.</div>
                </ItemBlock>

                <ItemBlock key="stats"
                    link="http://presentations.gavinmogan.com/stats/"
                    title="Stats (May 2015)"
                    labels={["internal"]}
                >
                    <div>Gave a brief overview of how stats can be useful and some examples</div>
                </ItemBlock>

                <ItemBlock key="linux101"
                    link="http://presentations.gavinmogan.com/linux101/"
                    title="Linux 101 (March 2015)"
                    labels={["internal"]}
                >
                    <div>Shared some of my linux CLI knowledge</div>
                </ItemBlock>

                <ItemBlock key="devops"
                    link="http://presentations.gavinmogan.com/devops/"
                    title="Devops (Jan 2015)"
                    labels={["internal"]}
                >
                    <div>Presentation on sharing my devops interest to align our team on what needs to be done next and why</div>
                </ItemBlock>

                <ItemBlock key="vim"
                    link="https://www.youtube.com/watch?v=__SJWsWSD9M"
                    img="https://i.ytimg.com/vi/__SJWsWSD9M/mqdefault.jpg"
                    title="Rough Vim Q &amp; A"
                >
                    <div>I did a quick tutorial session for my last workplace. Covers a lot of the vim basics. <b>Warning:</b> Does have a couple minor swear words like shit</div>
                </ItemBlock>

                <div className="well">
                    <h2>Legend</h2>
                    <div>
                        <span className="label label-primary">Internal</span>
                        Presentations designed to give at work. May not make a lot of sense out of context.
                        <span className="label label-primary">Meetup</span>
                        Presentations I did for meetups
                    </div>
                </div>
            </div>
        );
    }
}

