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
                <ItemBlock key="react-vs-angular"
                    link="http://presentations.gavinmogan.com/react-vs-angular/"
                    title="React Vs Angular (June 2015)"
                    lanels={["internal"]}
                >
                    <div>Tried to show off some of the things that react does better than angular to the team.</div>
                </ItemBlock>

                <ItemBlock key="stats"
                    link="http://presentations.gavinmogan.com/stats/"
                    title="Stats (May 2015)"
                    lanels={["internal"]}
                >
                    <div>Gave a brief overview of how stats can be useful and some examples</div>
                </ItemBlock>

                <ItemBlock key="linux101"
                    link="http://presentations.gavinmogan.com/linux101/"
                    title="Linux 101 (March 2015)"
                    lanels={["internal"]}
                >
                    <div>Shared some of my linux CLI knowledge</div>
                </ItemBlock>

                <ItemBlock key="devops"
                    link="http://presentations.gavinmogan.com/devops/"
                    title="Devops (Jan 2015)"
                    lanels={["internal"]}
                >
                    <div>Presentation on sharing my devops interest to align our team on what needs to be done next and why</div>
                </ItemBlock>

                <div className="well">
                    <h2>Legend</h2>
                    <div>
                        <span className="label label-primary">Internal</span>
                        Presentations designed to give at work. May not make a lot of sense out of context.
                    </div>
                </div>
            </div>
        );
    }
}

