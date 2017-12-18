'use strict';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
  static get propTypes () {
    return {
      url: PropTypes.object.isRequired,
      title: PropTypes.string,
      description: PropTypes.string
    };
  }
  static get defaultProps () {
    return {
      title: '',
      description: ''
    };
  }
  render () {
    const title = ['Gavin Mogan Dot Com', this.props.title].filter(n => n).reverse().join(' - ');
    const pages = [
      ['/projects', 'Projects'],
      ['/presentations', 'Presentations'],
      ['/volunteering', 'Volunteering'],
      ['/about', 'About']
    ];
    return (
      <div>
        <style jsx>{`

          .navBarBrandStyle {
            padding-top: 0;
          }

          .navBarBrandImgStyle {
            border: 0;
            border-radius: 50%;
            height: 50px;
            width: 50px;
            margin: 0;
            padding: 0;
          }
        `}</style>
        <Head>
          <title>{title}</title>
          <link rel='canonical' href='https://www.gavinmogan.com/' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          { this.props.description && <meta name='description' content={this.props.description} /> }
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content='@halkeye' />
          <meta name='twitter:creator' content='@halkeye' />
          <meta name='twitter:title' content={title} />
          { this.props.description && <meta name='twitter:description' content={this.props.description} /> }
          <meta name='og:title' content={title} />
          { this.props.description && <meta name='og:description' content={this.props.description} /> }
          <link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' />
          <link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
        </Head>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link href="/" className='navbar-brand navBarBrandStyle'>
                <img src='/static/img/Gavin-December-1989.png' className='navBarBrandImgStyle'/>
              </Link>
            </div>

            <div className="">
              <ul className="nav navbar-nav">
                {
                  pages.map((page, idx) => {
                    if (this.props.url.pathname.indexOf(page[0]) === 0) {
                      return (<li key={idx} className="active"><Link href={page[0]}><a>{page[1]} <span className="sr-only">(current)</span></a></Link></li>);
                    } else {
                      return (<li key={idx}><Link href={page[0]}><a>{page[1]} </a></Link></li>);
                    }
                  })
                }
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
