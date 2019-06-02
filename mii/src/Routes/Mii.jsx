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
            link: authLink.concat(createHttpLink({uri: githubURL}))
        });

        this.state = {loaded: false, repos: []};
        this.genRepoViews();
    }

    genRepoViews() {
        this.clientQL.query({
            query: gql`{
                viewer {
                    repositories(first: 3, orderBy: {direction: DESC, field: UPDATED_AT}) {
                        nodes {
                            name
                            description
                            url
                            updatedAt
                            languages(first: 10, orderBy: {direction: DESC, field: SIZE}) {
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
        });
    }

    render() {
        let repoRender = (this.state.loaded) 
        ? <RepoWrapper repos={this.state.repos}/>
        : <Loader />;

        return (<div>
            <Header selected="mii" />
            <Content>
                <div className="center-text">
                    <p id="friendly">
                        <h1><a href="https://www.imdb.com/title/tt4652838/?ref_=adv_li_tt">
                            Hello friend! 
                        </a></h1>
                        I'm Victor, a University of St Andrews undergrad, 
                        currently in graduation limbo. Welcome to my website!
                        {/* I've hidden a couple "easter eggs" here and there; small stuff, like
                        some of my favourite TV shows, video games, youtube channels, and the like.
                        After all, you came here to get to know me. Right?*/}
                    </p>

                    <p>
                        Here's a couple stuff I'm currently working on. This'll be pulled from&nbsp;
                        <a href="https://github.com/VictorIJnr">my GitHub</a> so what you see here will
                        probably change by tomorrow. Oh, you'll also see a private repo or two here,
                        but that can be our little secret. 
                    </p>
                </div>
            </Content>

            {repoRender}
        </div>);
    }

}

export default Mii;