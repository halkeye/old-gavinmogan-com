'use strict';
const React = require('react');

export default class ItemBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.img) {
            return (
                <div className="well media">
                    <div className="media-left">
                        <a href={this.props.link}>
                            <img className="media-object" src={this.props.img} alt={this.props.title} style={{'height': '128px', 'width': '128px' }} />
                        </a>
                    </div>
                    <div className="media-body">
                        <h2 className="media-heading"><a href={this.props.link}>{this.props.title}</a></h2>
                        {this.props.labels.map((label) => {
                            return <span className="label label-primary">{label}</span>;
                        })}
                        {this.props.children}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="well">
                    <h2 className="media-heading"><a href={this.props.link}>{this.props.title}</a></h2>
                    {this.props.labels.map((label) => {
                        return <span className="label label-primary">{label}</span>;
                    })}
                    {this.props.children}
                </div>
            );
        }
    }
}

ItemBlock.defaultProps = {
    link: '#',
    img: '',
    title: 'No Title',
    labels: []
};
