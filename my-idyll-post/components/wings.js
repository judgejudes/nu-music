import React, { useEffect, useRef } from 'react';
import * as d3 from "d3";
import albums from '../data/clean-album-ratings';




const Wings = ({ }) => {
    // constructor(props) {
    //     super(props);
    // }
    // useRef creates variable that holds onto value across rendering passes, so rn it'll hold SVG
    // DOM element. initialized as null and will be assigned later

    // ref is "get" and "set" via .current property
    const d3Container = useRef(null);

    const colors = {
        "Chamber Pop": "pink",
        "Hip Hop": "blue",
        "Neo-Psychedelia": "red",
        Electronic: "purple",
        "Indie Rock": "green",
        Other: "#fff2b4"
    }

    // to execute d3
    useEffect(() => {

        if (albums && d3Container.current) {
            const svg = d3.select(d3Container.current);

            // bind d3 data
            const update = svg
                .append("g")
                .selectAll('path')
                .data(albums)

            // enter new D3 elements, for each element in the array
            update.enter()
                .append('path')
                .attr('viewBox', '0 0 200 297')
                .attr('d', 'M0,0 C50,40 50,70 20,100 L0,85 L-20,100 C-50,70 -50,40 0,0')
                .attr('stroke', '#000')
                // .attr('fill', 'none')
                // .attr("x", (d) => d[1] * 20)
                .attr('x', (d, i) => i * 220)
                // ITS THE TRANSLATION OMG
                // .attr('transform', (d, i) => 'translate(' + ((i * 150)) + ',0)')

                .attr('transform', function (d, i) {
                    if (i == 0) { return 'translate(50, 0)' }
                    // change if statement later
                    else { return 'translate(' + ((i * 150)) + ',0)' }

                    ;
                })


                // .attr('class', 'petal')
                // .selectAll('path')
                .attr("fill", (d) => colors[d.Genre])

                .call(log, "what")

            update
                .attr('x', (_, i) => i * 220)
                .text((d) => d);

            function log(sel, msg) {
                console.log(msg, sel)
            }

            // update existing d3 elements
            // update.attr("")


            // d3.select(svg)
            //     .select('path')
            //     .data(albums)
            //     .attr("fill", (d) => colors[d.Genre])
        }
    },
        // useEffect has dependency array
        [albums, d3Container.current]
    )

    return (

        // albums.map(album => {
        // return (
        // <svg viewBox="0 0 100 297" className="petal" ref={d3Container}>
        //     <path fill="none" stroke='#000' d='M0,0 C50,40 50,70 20,100 L0,85 L-20,100 C-50,70 -50,40 0,0' />
        // </svg>

        <svg
            className="petalKey"
            // width={400}
            // height={200}
            ref={d3Container}
        />
        // fill=${album. 
        // )
        // })
    )
    // }
}

export default Wings;