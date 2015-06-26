'use strict';
const React = require('react');
const Router = require('react-router');

const config = require('../config.js');

let {Link} = Router;

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.links = [
            { link: "projects", name: "Projects" },
            { link: "presentations", name: "Presentations" },
            { link: "volunteering", name: "Volunteering" },
            { link: "contact", name: "Contact" }
        ];
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">
                            <img src={require('img/Gavin-December-1989.png')} />
                        </a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            {this.links.map((link) => {
                                if (config.router.isActive(link.link)) {
                                    return <li key={link.link} className="active"><Link to={link.link}>{link.name} <span className="sr-only">(current)</span></Link></li>;
                                } else {
                                    return <li key={link.link}><Link to={link.link}>{link.name}</Link></li>;
                                }
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

