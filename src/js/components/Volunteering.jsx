'use strict';
const React = require('react');
const ItemBlock = require('./ItemBlock.jsx');

export default class Presentations extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Volunteering and Hangouts</h1>
                <ItemBlock key="ladies-learning-code"
                    img="https://pbs.twimg.com/profile_images/614135444775825409/GHWE979-_reasonably_small.png"
                    link="http://ladieslearningcode.com/chapters/vancouver/"
                    title="Ladies Learning Code Vancouver"
                />

                <ItemBlock key="yvr-dev"
                    link="http://yvrdev.herokuapp.com"
                    title="Vancouver Developers Slack"
                />

                <ItemBlock key="polyglot"
                    link="http://www.meetup.com/PolyglotVancouver/"
                    img="http://photos1.meetupstatic.com/photos/event/7/8/b/6/global_199890902.jpeg"
                    title="Polyglot Vancouver"
                >
                    <div>Most often just hit up the hack nights, but try to goto most of the events</div>
                </ItemBlock>
            </div>
        );
    }
}


