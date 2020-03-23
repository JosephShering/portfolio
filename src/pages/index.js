import React from 'react';

import {
    Layout,
    Content
} from '../components/jrs/layout';
import {
    H1,
    Text
} from '../components/jrs/text';
import {
    ExperienceSection,
    ExperienceEntry
} from '../components/experience';

export default IndexPage;
function IndexPage() {
    return (
        <Layout>
            <Content>
                <H1>
                    <span className="text-orange-400">Joseph Shering</span>
                    &nbsp;
                    <span className="text-gray-600 text-base">Software Developer</span>
                </H1>
                <br />
                
                <H1>
                    <span className="text-pink-500">const</span> sayHello = <span className="text-pink-500">function</span> () &#123;
                </H1>

                <div className="pl-8">
                    console.log(<span className="text-green-500">`</span>
                </div>

                <div className="pl-16 text-green-500">
                    <Text>
                        Hello, my name is Joseph Shering. I am a Software Developer, located in the Greater Denver area.
                        I have 6 years of development experience. Below you will find more information on specific stack
                        experience I have.
                    </Text>
                </div>

                <div className="pl-8">
                    <span className="text-green-500">`</span>);
                </div>
                <H1>
                    &#125;
                </H1>


                <ExperienceSection title="React Projects" />
                <ExperienceEntry
                    to="https://github.com/JosephShering/portfolio"
                    title="This portfolio site!"
                    description="This site utilizes Gatsby.js to develop a google search friendly portfolio.
                    If you happened to find me, you can thank Gatsby.js for helping improve my SEO results" />

                <ExperienceSection title="Node Projects" />
                <ExperienceEntry
                    to="https://github.com/JosephShering/bnet_api"
                    title="Battle.net Auction House GraphQL API"
                    description="With the power of ApolloServer I was able to create a GraphQL
                    server that leveraged the open Auction House of World of Warcraft." />
                <ExperienceEntry
                    to="https://github.com/JosephShering/conways_game_of_life"
                    title="Conway's Game of Life"
                    description="A game with 3 simple rules where cells live or die within a grid. Pull down
                    my project and run it to watch Conway's Game of Life play out in your console window." />

                {/* <ExperienceSection title="Python Projects" />
                <ExperienceEntry
                    to="/projects/bnet_api"
                    title="Battle.net Auction House GraphQL API"
                    description="With the power of ApolloServer I was able to create a GraphQL
                    server that leveraged the open Auction House of World of Warcraft." />
                <ExperienceEntry
                    to="/projects/conways_game_of_life"
                    title="Conway's Game of Life"
                    description="A game with 3 simple rules where cells live or die within a grid. Pull down
                    my project and run it to watch Conway's Game of Life play out in your console window." /> */}

                <ExperienceSection title="Other Projects" />
                <ExperienceEntry
                    to="https://github.com/JosephShering/make_my_cv"
                    title="Make my Cover Letter"
                    description="A tool I use to fill in parts of a resume to ensure I don't make any spelling mistakes." />
                <ExperienceEntry
                    to="https://github.com/JosephShering/adorbs"
                    title="(Totes) Adorbs"
                    description="Adorbs is a ECS (Entity, Component, System) library for LOVE2D" />


                <br /><br /><br />
            </Content>
        </Layout>
    );
}
