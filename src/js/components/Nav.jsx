'use strict';
const React = require('react');
const Router = require('react-router');

const config = require('../config.js');

let {Link} = Router;

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="home" className="navbar-brand">
                            <img src={require('img/Gavin-December-1989.png')} />
                        </Link>
                    </div>

                    <div className="">
                        <ul className="nav navbar-nav">
                            {config.links.map((link) => {
                                if (this.context.router.isActive(link.link)) {
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

Nav.contextTypes = {
    router: React.PropTypes.any
};
