import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

import axios from "axios";

import Header from "../Components/Header";
import Content from "../Components/Content";
import Loader from "../Components/Loader";

import { myToken } from "../config/tokens.json";

class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {loaded: false, data: ""};
    }

    /**
     * Randomly selecting a README from one of my repos
     */
    async genReadMe() {
        let projRender;
        const repoRoulette = ["Angelic", "Cutex", "distbu", "onesie"];
        const myRepo = repoRoulette[Math.floor(Math.random() * repoRoulette.length)];

        let headers = {
            "Accept": "application/vnd.github.v3+json",
            "Authorization": `bearer ${myToken}`
        };

        let axRequest = axios.get(`https://api.github.com/repos/VictorIJnr/${myRepo}/readme`, {headers});

        await axRequest.then(res => {
            projRender = atob(res.data.content);
        })
        .catch(err => console.log(JSON.stringify(err)));

        this.setState({...this.state, loaded: true, data: projRender});
        return projRender;
    }

    render() {
        if (!this.state.loaded) this.genReadMe();
        let projRender = (this.state.loaded) 
            ? <ReactMarkdown source={this.state.data} escapeHtml={false}/>
            : <Loader />;

        return (<div className="site">
            <Header selected="blog" />
            <Content>
                <h1>I guess this is more like a showcase</h1>
                <p>
                    That is, until I decide that I fancy writing a couple blog posts. I'll just
                    have a selection of READMEs from some of my projects appear here. Don't worry,
                    they're not <i>that</i> boring. I hope. I like to make then somewhat fun :D.
                    Remember how it was possible for a private repo or two to appear on the index
                    page? Well, I've done the same thing here as well; it's like our little secret.
                    
                </p>
                
                <p>
                    Perhaps in the future I'll turn this into a proper "blogspace". Right now, 
                    I'll restrain myself from showering any and everyone with my opinion on the
                    latest JS framework or a new paper on Neuroevolution of all things. But while
                    we're here, I'll just drop a link to the blog I made when I was making a small
                    Android app called&nbsp;"<a href="http://victorsepq.weebly.com/">Bloopy</a>".
                </p>
                {projRender}
            </Content>
        </div>);
    }

}

export default Blog;