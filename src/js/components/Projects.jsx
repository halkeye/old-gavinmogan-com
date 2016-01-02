'use strict';
const React = require('react');
const DocumentMeta = require('react-document-meta');
const config = require('../config.js');
const ItemBlock = require('./ItemBlock.jsx');

export default class Presentations extends React.Component {
    render() {
        const metaData = config.makeMetaTags({ title: 'Projects', description: "Some of the projects Gavin has worked on"});
        return (
            <div className="container">
                <DocumentMeta {...metaData} />
                <h1>Projects</h1>
                <p>There's a lot more projects on my <a href="https://github.com/halkeye"><i className="fa fa-github"></i> Github</a></p>
                <ItemBlock
                    key="saltystories"
                    name="saltystories"
                    link="http://books.saltystories.ca/"
                    img={require('../../img/projects/saltystories.png')}
                    title="Salty Stories - Web"
                >
                    <div>Web version of the salty stories mobile applications</div>
                    <div><a href="https://github.com/halkeye/react-book-reader">Github</a></div>
                </ItemBlock>

                <ItemBlock
                    key="zabox"
                    name="zabox"
                    link="http://zabox.gavinmogan.com/"
                    img={require('../../img/projects/zabox.png')}
                    title="Zabox"
                >
                    <div>Development SMTP server with web interface</div>
                    <div><a href="https://github.com/halkeye/zabox">Github</a></div>
                </ItemBlock>

                <ItemBlock
                    key="ingrid_intimidator"
                    name="ingrid_intimidator"
                    link="http://apps.gavinmogan.com/ingrid/"
                    img={require('../../img/projects/ingrid-intimidator.png')}
                    title="Ingrid Intimidator"
                >
                    <div>I wanted an excuse to play with some html5 audio and canvas, so created a fun little game for <a href="http://www.criticalhitshow.com/">Critical Hit Show.</a></div>
                </ItemBlock>


                <ItemBlock
                    key="infinicatr"
                    name="infinicatr"
                    link="http://apps.gavinmogan.com/infinicatr/"
                    img={require('../../img/projects/infinicatr.png')}
                    title="Infinicatr"
                >
                    <div>Small little web app I created for <a href="https://www.mozilla.org/en-US/firefox/os/2.0/">Firefox OS</a> to learn how it works</div>
                    <div><a href="https://github.com/halkeye/infinicatr">Github</a></div>
                    <div><a href="https://marketplace.firefox.com/app/infinicatr/">Firefox (OS) App</a></div>
                    <div><a href="https://chrome.google.com/webstore/detail/infinicatr/dikkcbebmfnedmojoipnoonmionakoka">Chrome App</a></div>
                </ItemBlock>

                <ItemBlock
                    key="npm_modules"
                    name="npm_modules"
                    link="https://www.npmjs.com/~halkeye"
                    title="NPM Modules"
                >
                    <div>Various NPM modules I've published</div>
                </ItemBlock>

                <h2>Legacy / KodeKoan Projects</h2>

                <ItemBlock
                    key="dark_warriors"
                    name="dark_warriors"
                    link="https://github.com/halkeye/darkwarriors/releases/tag/dw-0.0.1361"
                    title="Dark Warriors"
                    img={require('../../img/kodekoan.jpg')}
                    labels={["muds"]}
                >
                    <div>
                        <p>One of the two mud projects I really worked on.</p>

                        <p>This one is done by both Mark Gottselig and myself (Gavin Mogan), as well as a few other people submitting various pieces along the way.</p>
                    </div>
                </ItemBlock>

                <ItemBlock
                    key="unknown_regions"
                    name="unknown_regions"
                    link="https://github.com/halkeye/unknown_regions/releases/tag/ur-1.0.12"
                    title="Unknown Regions"
                    date="2001-07-16"
                    img={require('../../img/kodekoan.jpg')}
                    labels={["muds"]}
                >
                    <div>
                        <p>My first mud project. Where I learned all the fun things to do with network programming and linux and such.</p>

                        <p>Looking back it kinda makes me cringe, but its a big part of me.</p>
                    </div>
                </ItemBlock>

                <ItemBlock
                    key="kode_foto_backup"
                    name="kode_foto_backup"
                    link="https://github.com/halkeye/kode_foto_backup/releases/tag/1.0.0"
                    title="Kode Foto Backup"
                    img={require('../../img/kodekoan.jpg')}
                >
                    <div>
                        <p>Some tool for a long lost open source service that livejournal used to run</p>
                        <p>One of my first C# programs</p>
                    </div>
                </ItemBlock>
                <ItemBlock
                    key="MTLJPost"
                    name="MTLJPost"
                    link="https://github.com/halkeye/MTLJPost"
                    title="MTLJPost"
                    img={require('../../img/kodekoan.jpg')}
                >
                    <div>
                        <p>Long time ago in a galaxy far far away, I was using Moveable Type as a blogging engine.</p>
                        <p>This is a tool I wrote that cross posted things to livejournal. It was pretty popular and I got to know most of the major users.</p>
                    </div>
                </ItemBlock>

                
            </div>
        );
    }
}


