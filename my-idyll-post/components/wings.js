import React from 'react';
import * as d3 from "d3";
import albums from '../data/decades-albums';

class Wings extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    test() {
        console.log('whats going on')
    }

    render() {
        // ... rendered output here

        return (
            // albums.forEach((album) => {

            // <svg viewBox="0 0 210 297" width="100%" height="400" className="petal">
            //     <path fill='none' stroke='#000' d='M0,0 C50,40 50,70 20,100 L0,85 L-20,100 C-50,70 -50,40 0,0' />
            // </svg>
            // }

            albums.map(album => {
                return (
                    <svg viewBox="0 0 100 297" className="petal">
                        <path fill="none" stroke='#000' d='M0,0 C50,40 50,70 20,100 L0,85 L-20,100 C-50,70 -50,40 0,0' />
                    </svg>

// fill=${album. 
                )
            })
        )
    }
}

export default Wings;