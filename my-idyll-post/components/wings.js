import React from 'react';
import * as d3 from "d3"

class Wings extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        // ... rendered output here
        return (
            <svg>
                <circle cx="0" cy="0" r="10"></circle>
            </svg>
        )
    }
}

export default Wings;