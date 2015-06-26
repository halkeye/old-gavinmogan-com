'use strict';
const React = require('react');
const ItemBlock = require('./ItemBlock.jsx');

export default class Presentations extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Presentations</h1>
                <ItemBlock key="react-vs-angular"
                    link="http://presentations.gavinmogan.com/react-vs-angular/"
                    img="#"
                    title="React Vs Angular (June 2015)"
                    lanels={["internal"]}
                >
                    <div>Description of presentation</div>
                </ItemBlock>

                <ItemBlock key="stats"
                    link="http://presentations.gavinmogan.com/stats/"
                    img="#"
                    title="Stats (May 2015)"
                    lanels={["internal"]}
                >
                    <div>Description of presentation</div>
                </ItemBlock>

                <ItemBlock key="linux101"
                    link="#"
                    img="#"
                    title="Linux 101 (March 2015)"
                    lanels={["internal"]}
                >
                    <div>Description of presentation</div>
                </ItemBlock>

                <ItemBlock key="devops"
                    link="#"
                    img="#"
                    title="Devops (Jan 2015)"
                    lanels={["internal"]}
                >
                    <div>Description of presentation</div>
                </ItemBlock>

                <div className="well">
                    <h2>Legend</h2>
                    <div>
                        <span className="label label-primary">Internal</span>
                        Presentations designed to give at work. May not make a lot of sense out of context
                    </div>
                </div>
            </div>
        );
    }
}

