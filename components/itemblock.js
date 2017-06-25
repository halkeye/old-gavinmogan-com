'use strict';
import React from 'react';
import PropTypes from 'prop-types';

export default class ItemBlock extends React.Component {
  static get propTypes () {
    return {
      img: PropTypes.string,
      name: PropTypes.string,
      title: PropTypes.string,
      labels: PropTypes.array,
      link: PropTypes.string,
      children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
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
          <style jsx>{`
            .itemImg {
              height: 128px;
              width: 128px;
            }
          `}</style>
          <div className="media-left">
            <a href={this.props.link}>
              <img className='media-object itemImg' src={this.props.img} alt={this.props.title} />
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
