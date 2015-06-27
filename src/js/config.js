'use strict';
function Config() {
    this.links = [
        { link: "projects", name: "Projects" },
        { link: "presentations", name: "Presentations" },
        { link: "volunteering", name: "Volunteering" },
        { link: "about", name: "About" }
    ];
}

module.exports = new Config();
