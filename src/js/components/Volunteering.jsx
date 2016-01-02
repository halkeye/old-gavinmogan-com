'use strict';
const React = require('react');
const DocumentMeta = require('react-document-meta');
const config = require('../config.js');
const ItemBlock = require('./ItemBlock.jsx');

export default class Volunteering extends React.Component {
    render() {
        const metaData = config.makeMetaTags({ title: 'Volunteering And Hangouts', description: 'Where does Gavin hangout?'});
        return (
            <div className="container">
                <DocumentMeta {...metaData} />
                <h1>Volunteering and Hangouts</h1>
                <ItemBlock key="ladies-learning-code"
                    img="https://pbs.twimg.com/profile_images/614135444775825409/GHWE979-_reasonably_small.png"
                    link="http://ladieslearningcode.com/chapters/vancouver/"
                    title="Ladies Learning Code Vancouver"
                />

                <ItemBlock key="yvr-dev"
                    link="https://yvrdev.herokuapp.com"
                    title="Vancouver Developers Slack"
                />

                <ItemBlock key="cascadiajs"
                    link="http://slack.cascadiajs.com/"
                    title="CascadiaJS Slack"
                />
                
            </div>
        );
    }
}


