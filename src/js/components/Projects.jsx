'use strict';
const React = require('react');
const ItemBlock = require('./ItemBlock.jsx');

export default class Presentations extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Projects</h1>
                <ItemBlock key="react-saltystories"
                    link="http://books.saltystories.ca/"
                    img={require('../../img/projects/saltystories.png')}
                    title="Salty Stories - Web"
                >
                    <div>Web version of the salty stories mobile applications</div>
                </ItemBlock>

                <ItemBlock key="zabox"
                    link="http://zabox.gavinmogan.com/"
                    img={require('../../img/projects/zabox.png')}
                    title="Zabox"
                >
                    <div>Development SMTP server with web interface</div>
                    <div><a href="https://github.com/halkeye/zabox">Github</a></div>
                </ItemBlock>

                <ItemBlock key="ingrid-intimidator"
                    link="http://apps.gavinmogan.com/ingrid/"
                    img={require('../../img/projects/ingrid-intimidator.png')}
                    title="Ingrid Intimidator"
                >
                    <div>Small little web app I created for <a href="https://www.mozilla.org/en-US/firefox/os/2.0/">Firefox OS</a> to learn how it works</div>
                    <div><a href="https://github.com/halkeye/infinicatr">Github</a></div>
                </ItemBlock>


                <ItemBlock key="infinicatr"
                    link="http://apps.gavinmogan.com/infinicatr/"
                    img={require('../../img/projects/infinicatr.png')}
                    title="Infinicatr"
                >
                    <div>I wanted an excuse to play with some html5 audio and canvas, so created a fun little game for <a href="http://www.criticalhitshow.com/">Critical Hit Show.</a></div>
                </ItemBlock>
            </div>
        );
    }
}


