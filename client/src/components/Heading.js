import React, { Component } from 'react';
import { Jumbotron,Badge } from 'reactstrap';


class Heading extends Component{
    render(){
        return(
            <Jumbotron>
            <div className="text-center">
                <h1 className="display-3">Pokemon <Badge color="secondary">GraphQL</Badge></h1>
                <p className="lead">A Full-Stack Web Application that is used to build a GraphQL Pokemon Server</p>
              </div>
            <div className="text-center">
            <Badge color="primary" pill>ReactJS</Badge>
            <Badge color="secondary" pill>ExpressJS</Badge>
            <Badge color="success" pill>NodeJS</Badge>
            <Badge color="danger" pill>MongoDB</Badge>
            <Badge color="warning" pill>GraphQL</Badge>
            <Badge color="info" pill>ReactStrap</Badge>
            <Badge color="dark" pill>BootStrap</Badge>
            </div>
            </Jumbotron>
        );
    }
}

export default Heading;