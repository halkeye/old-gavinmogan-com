'use strict';
import React from 'react';
import css from 'next/css';

const style = css({
  height: '128px',
  width: '128px'
});

export default class ItemBlock extends React.Component {
  static get propTypes () {
    return {
      img: React.PropTypes.string,
      name: React.PropTypes.string,
      title: React.PropTypes.string,
      labels: React.PropTypes.array,
      link: React.PropTypes.string,
      children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
      ])
    };
  }
  static get defaultProps () {
    return {
      link: '#',
      img: '',
      title: 'No Title',
      labels: []
    };
  }

  render () {
    if (this.props.img) {
      return (
        <div className="well media" id={this.props.name}>
          <div className="media-left">
            <a href={this.props.link}>
              <img className={`media-object ${style}`} src={this.props.img} alt={this.props.title} />
            </a>
          </div>
          <div className="media-body">
            <h2 className="media-heading"><a href={this.props.link}>{this.props.title}</a></h2>
            {this.props.labels.map((label) => {
              return <span key={label} className="label label-primary">{label}</span>;
            })}
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return (
        <div className="well" id={this.props.name}>
          <h2 className="media-heading"><a href={this.props.link}>{this.props.title}</a></h2>
          {this.props.labels.map((label) => {
            return <span key={label} className="label label-primary">{label}</span>;
          })}
          {this.props.children}
        </div>
      );
    }
  }
}
