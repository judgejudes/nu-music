import React, { useEffect, useRef } from 'react';
import * as d3 from "d3";
import albums from '../data/clean-album-ratings';




class Wings extends React.PureComponent {
    constructor(props) {
        super(props);
    }


    colors = {
        "Chamber Pop": "pink",
        "Hip Hop": "blue",
        "Neo-Psychedelia": "red",
        Electronic: "purple",
        "Indie Rock": "green",
        Other: "#fff2b4"
    }

    // useEffect(() => {
    //     console.log("hello")
    // });
    // useEffect(() => {
    //     console.log("hi")
    // });

    // componentDidMount() {
    //     const d3Container = useRef(null);

    //     const svg = d3.select(d3Container.current);


    //     console.log("hi")
    //     d3.select(svg)
    //         .selectAll("path")
    //         .data(albums)
    //         .attr("fill", (d) => color[d.Genre])
    // }

    // from judy: planning to change this class component to functional component instead

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
                    {/* ref={d3Container} */}
                        <path fill="none" stroke='#000' d='M0,0 C50,40 50,70 20,100 L0,85 L-20,100 C-50,70 -50,40 0,0' />
                    </svg>

                    // fill=${album. 
                )
            })
        )
    }
}

export default Wings;