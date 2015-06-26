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
                <h1>Contact Gavin</h1>
                {this.renderInput('subject', 'Subject')}
                {this.renderText('body', 'Body')}
                <button onClick={this.onClick} className="btn btn-primary">Send Email</button>
            </div>
        );
    }
}
