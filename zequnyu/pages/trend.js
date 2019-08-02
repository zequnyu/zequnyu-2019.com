import React from 'react';

import { DiscussionEmbed, CommentCount, CommentEmbed } from 'disqus-react';

import 'bulma/css/bulma.min.css'


class Trend extends React.Component {
    render() {
        const disqusShortname = 'zequnyu';
        const disqusConfig = {
            url: 'http://zequnyu.com/trend',
            identifier: 'trend',
        };

        return (
            <div className="section">
                <div className="container">
                    <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                </div>
            </div>
        );
    }
}

export default Trend;