'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header.js';
import ItemBlock from '../components/itemblock.js';
import { withRouter } from 'next/router'

export class Presentations extends React.Component {
  static get propTypes () {
    return {
      router: PropTypes.object.isRequired
    };
  }
  render () {
    return (
      <div>
        <Header title='Presentations' description='The presentations Gavin has given' pathname={this.props.router.pathname} />
        <div className='container'>
          <h1>Presentations</h1>
          <ItemBlock
            key='jenkins-world-2017-gavinmogan-saucelabs'
            name='jenkins-world-2017-gavinmogan-saucelabs'
            link='https://www.youtube.com/watch?v=hshD-a2YHCs'
            title='Jenkins World 2017 w/ Gavin Mogan, Sauce Labs'
            labels={[]}
          />
          <ItemBlock
            key='codecoffee-no-rest-for-the-wicked'
            name='codecoffee-no-rest-for-the-wicked'
            link='http://slides.com/halkeye/no-rest-for-the-wicked'
            title='No REST for the wicked? (July 2016)'
            labels={['meetup']}
          >
          </ItemBlock>
          <ItemBlock
            key='codecoffee-why-not-testing'
            name='codecoffee-why-not-testing'
            link='http://slides.com/halkeye/why-not-testing'
            title='Why not Testing? (April 2016)'
            labels={['meetup']}
          >
            <div>Testing presentation for <a href='http://www.meetup.com/Code-Coffee-Vancouver/events/230135012/'>Code Coffee Vancouver</a>. Goal was to show that testing doesn&apos;t have to be perfect, any you can really start anywhere.</div>
            <div><a href='https://www.youtube.com/watch?v=iPGSJVASCkc'>Youtube Recording</a></div>
          </ItemBlock>
          <ItemBlock
            key='codecoffee-vagrant'
            name='codecoffee-vagrant'
            link='http://slides.com/halkeye/give-your-development-a-portable-home-with-vagrant'
            title='Give your development a portable home with Vagrant (Sept 2015)'
            labels={['meetup']}
          >
            <div>Vagrant presentation for <a href='https://www.meetup.com/Code-Coffee-Vancouver/events/224950040/'>Code Coffee Vancouver</a>. It was my first attempt at doing one for a large group.</div>
          </ItemBlock>
          <ItemBlock
            key='react-vs-angular'
            name='react-vs-angular'
            link='http://presentations.gavinmogan.com/react-vs-angular/'
            title='React Vs Angular (June 2015)'
            labels={['internal']}
          >
            <div>Tried to show off some of the things that react does better than angular to the team.</div>
          </ItemBlock>

          <ItemBlock
            key='stats'
            name='stats'
            link='http://presentations.gavinmogan.com/stats/'
            title='Stats (May 2015)'
            labels={['internal']}
          >
            <div>Gave a brief overview of how stats can be useful and some examples</div>
          </ItemBlock>

          <ItemBlock
            key='linux101'
            name='linux101'
            link='http://presentations.gavinmogan.com/linux101/'
            title='Linux 101 (March 2015)'
            labels={['internal']}
          >
            <div>Shared some of my linux CLI knowledge</div>
          </ItemBlock>

          <ItemBlock
            key='devops'
            name='devops'
            link='http://presentations.gavinmogan.com/devops/'
            title='Devops (Jan 2015)'
            labels={['internal']}
          >
            <div>Presentation on sharing my devops interest to align our team on what needs to be done next and why</div>
          </ItemBlock>

          <ItemBlock
            key='vim'
            name='vim'
            link='https://www.youtube.com/watch?v=__SJWsWSD9M'
            img='https://i.ytimg.com/vi/__SJWsWSD9M/mqdefault.jpg'
            title='Rough Vim Q &amp; A'
          >
            <div>I did a quick tutorial session for my last workplace. Covers a lot of the vim basics. <b>Warning:</b> Does have a couple minor swear words like shit</div>
          </ItemBlock>

          <div className='well'>
            <h2>Legend</h2>
            <ul>
              <li>
                <span className='label label-primary'>Internal</span>
                &nbsp; -
                Presentations designed to give at work. May not make a lot of sense out of context.
              </li>
              <li>
                <span className='label label-primary'>Meetup</span>
                &nbsp; -
                Presentations I did for meetups
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Presentations)
