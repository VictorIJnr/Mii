import React, { Component } from "react";
import Header from "../Components/Header";
import Content from "../Components/Content";
import Cutex from "../assets/Cutex";

class Blog extends Component {

    render() {
        return (<div className="site">
            <Header selected="blog" />
            <Content>
                <h1>I genuinely don't need this...</h1>
                <p>
                    I've always thought that blogs are relatively pretentious. Especially in CS.
                    Don't get me wrong, there are some fantastic Medium blogs that are incredibly
                    useful. But, honestly, they're few and far between. Plus there's also&nbsp; 
                    <a href="http://victorsepq.weebly.com/">my first attempt at a blog</a>&nbsp;
                    which was for my EPQ... Don't worry though, I won't do that again to you, 
                    or try to offload a design pattern for a stupidly obscure framework/language 
                    on you. <sup><sup>But for now here's Cutex if you're interested.</sup></sup>
                    <br/><br/>
                    So instead of force feeding you a bunch of my stuff (if you're intrigued 
                    there's always more on my GitHub like&nbsp;
                    <a href="https://github.com/VictorIJnr/Cutex">Cutex</a> and Dias - an alias 
                    for a secret project of mine, which I won't reveal for a while), I'll be 
                    linking out to stuff I find to be rather interesting. 
                    That's not much better is it?
                </p>
                <Cutex />
            </Content>
        </div>);
    }

}

export default Blog;