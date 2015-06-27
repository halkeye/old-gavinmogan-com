'use strict';
const React = require('react');
const ItemBlock = require('./ItemBlock.jsx');

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { subject: '' };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        window.open("mailto:website@gavinmogan.com?subject="+window.encodeURIComponent(this.state.subject)+"&body="+window.encodeURIComponent(this.state.body));
    }

    handleChange(field, event) {
        var data = {};
        data[field] = event.target.value;
        this.setState(data);
    }

    renderInput(field, name) {
        return (
            <div className="form-group">
                <label htmlFor={field}>{name}</label>
                <input type="text" className="form-control" id={field} placeholder={name} value={this.state.subject} onChange={this.handleChange.bind(this, field)} />
            </div>
        );
    }

    renderText(field, name) {
        return (
            <div className="form-group">
                <label htmlFor={field}> {name} </label>
                <textarea id={field} className="form-control" rows="3" style={{ width: '100%' }} onChange={this.handleChange.bind(this, field)}>{this.state.body}</textarea>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <h1>Gavin Mogan</h1>
                <p>Part Developer, Part Sysadmin, Part problem solver. All around nerd.</p>
                <h2>Employment</h2>
                <p><a href="http://telus.com">TELUS</a></p>
                <h2>Where can you find me?</h2>
                <p><a href="https://twitter.com/halkeye"><i className="fa fa-twitter"></i> @halkeye</a></p>
                <p><a href="https://github.com/halkeye"><i className="fa fa-github"></i> Github</a></p>
                <p><a href="https://www.linkedin.com/in/halkeye"><i className="fa fa-linkedin"></i> Linkedin</a></p>
                <p><a href="https://www.goodreads.com/user/show/3300733-gavin"><i className="fa-sign-blank fa-stack-base"></i><i className="icon-light"><span style={{ 'fontFamily': 'helvetica' }}>g</span></i> Goodreads</a></p>
                <p><a href="https://plus.google.com/+GavinMogan/posts"><i className="fa fa-google-plus"></i> Google Plus</a></p>
                <p><a href="https://www.facebook.com/halkeye"><i className="fa fa-facebook"></i> Facebook</a></p>
                <h2>Contact</h2>
                {this.renderInput('subject', 'Subject')}
                {this.renderText('body', 'Body')}
                <button onClick={this.onClick} className="btn btn-primary">Send Email</button>
            </div>
        );
    }
}
