import React, { Component } from "react";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

import gql from "graphql-tag";

import Header from "../Components/Header";
import Content from "../Components/Content";
import Loader from "../Components/Loader";
import RepoWrapper from "../Components/RepoWrapper";

import { myToken } from "../config/tokens.json";

/**
 * Component describing the "Mii" page.
 */
class Mii extends Component {
    constructor(props) {
        super(props);

        let githubURL = "https://api.github.com/graphql";

        const authLink = setContext((_, { headers }) => {
            // Return the headers to the context so httpLink can read them
            return {
              headers: {
                ...headers,
                authorization: `bearer ${myToken}`,
              }
            }
        });

        // Making a client to query the GitHub API
        this.clientQL = new ApolloClient({
            uri: githubURL,
            cache: new InMemoryCache(),
            link: authLink.concat(createHttpLink({ uri: githubURL }))
        });

        this.state = {loaded: false, repos: []};
        this.pullRepoInfo();
    }

    /**
    * Gets information for repositories to be displayed on the main page.
    * Once the information is loaded, the state of the site is updated accordingly.
    */
    pullRepoInfo() {
        this.clientQL.query({
            query: gql`{
                viewer {
                    repositories(first: 3, orderBy: { direction: DESC, field: PUSHED_AT }) {
                        nodes {
                            name
                            description
                            url
                            languages(first: 10, orderBy: { direction: DESC, field: SIZE }) {
                                nodes {
                                    name
                                }
                            }
                            stargazers {
                                totalCount
                            }
                        }
                    }
                }
            }`
        }).then(res => {
            this.setState({loaded: true, repos: res.data.viewer.repositories.nodes});
        }).catch(err => console.error(`I couldn't do it :( ${err}`));
    }

    render() {
        let repoRender = this.state.loaded ? <RepoWrapper repos={this.state.repos}/> : <Loader />;

        return (<div>
            <Header selected="mii" />
            <Content>
                <div id="friendly" className="center-text">
                    <h1><a href="https://www.imdb.com/title/tt4652838/?ref_=adv_li_tt">
                        Hello friend! 
                    </a></h1>
                    <p>
                        I'm Victor, a software engineer in test at Everbridge. Welcome to my website!
                    </p>
                    <p className="hidden" style={{height: "2vh"}}>
                    I've hidden a couple "easter eggs" here and there; small stuff, like
                    some of my favourite TV shows, video games, youtube channels, and the like.
                    There's already been a rather subtle one out in the open. But enough about
                    Mario Kart, I won't keep you any longer. After all, you came here to get to 
                    know me. Right?
                    </p>

                    <p>
                        Here's a couple stuff I'm currently working on - in fact they're the 
                        repositories I've pushed to most recently. This'll be pulled from&nbsp;
                        <a href="https://github.com/VictorIJnr">my GitHub</a> so what you see here will
                        probably change by tomorrow. You'll also see a private repo or two here,
                        just so you can see the kind of ideas I come up with. 
                    </p>
                </div>
            </Content>

            {repoRender}
        </div>);
    }

}

export default Mii;