import React, { useEffect, useRef } from 'react';
import * as d3 from "d3";
import albums from '../data/clean-album-ratings';
import _ from 'lodash';



const WingShapesKey = ({ }) => {
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

    let perRow = 5
    const pathWidth = 120
    perRow = Math.floor(800/pathWidth)
/*
    let calculateGridPos = (i) => {
        return [(i % perRow + 0.5) * pathWidth, (Math.floor(i / perRow) + 0.5) * pathWidth]
      }
*/ 
    // all wing shapes

    //const wing1 = 'M0,0 C25,20 25,35 10,50 L0,40 L-10,50 C-25,35 -25,20 0,0'
    //const wing2 = "M0,0 C25,20 15,45 5,30 L0,45 L-5,30 C-15,45 -25,20 0,0"
    //const wing3 = 'M0,0 C -10,-10 -10,-40 0, -50 C 10, -40 10, -10 0, 0'
    //const wing4 = 'M0,0 15,25 L25,35 L20,40 L20,40 L0,50 L-20,40 L-25,35 L-15,25 L0,0' 
    //const wing5 = 'M0,0 C20,40 20,35 0,50 C-20,35 -20,40 0,0'
    //const wing6 = 'M0,0 C20,20 30,48 0,30 M0,30 C-10,40 -30,48 0,0' 

    const wing1_top = 'M0,0 C-31.39,6.31 -42.88,-3.35 -44.73,-24.48 L-30.64,-25.71 L-31.87,-39.80 C-10.72,-41.65 0.75,-32.01 0,0 M0,0 C31.39,6.31 42.88,-3.35 44.73,-24.48 L30.64,-25.71 L31.87,-39.80 C10.72,-41.65 -0.75,-32.01 0,0'
    const wing4_top = 'M0,0 C-31.39,6.30 -44.11,-17.43 -26.20,-15.45 L-34.37,-28.92 L-19.77,-23.11 C-24.83,-40.42 .75,-32.01 0,0 M0,0 C31.39,6.30 44.11,-17.43 26.20,-15.45 L34.37,-28.92 L19.77,-23.11 C24.83,-40.42 -.75,-32.01 0,0'
    const wing3_top = 'M0,0 C14.01,1.23 37.07,-18.05 38.3,-32.14 C24.21,-33.37 1.23,-14.09 0,0 M0,0 C-14.01,1.23 -37.07,-18.05 -38.3,-32.14 C-24.21,-33.37 -1.23,-14.09 0,0'
    const wing2_top = 'M0,0 L-28.79,-4.58 L-42.88,-3.35 L-43.5,-10.39 L-38.3,-32.14 L-17.79,-41.03 L-10.74,-41.65 L-9.51,-27.56 L0,0 M0,0 L28.79,-4.58 L42.88,-3.35 L43.5,-10.39 L38.3,-32.14 L17.79,-41.03 L10.74,-41.65 L9.51,-27.56 L0,0'  
    const wing5_top = 'M0,0 C-43.5,-10.39 -39.67,-7.18 -38.3,-32.14 C-13.96,-37.82 -17.79,-41.03 0,0 M0,0 C43.5,-10.39 39.67,-7.18 38.3,-32.14 C13.96,-37.82 17.79,-41.03 0,0 '
    const wing6_top = 'M0,0 C-28.18,2.47 -56.05,-7.87 -22.98,-19.28 M-22.98,-19.28 C-24.21,-33.37 -17.49,-53.83 0,0 M0,0 C28.18,2.47 56.05,-7.87 22.98,-19.28 M22.98,-19.28 C24.21,-33.37 17.49,-53.83 0,0' 
    
    const wing1_bottom = 'M0,0 C-31.39,-6.31 -42.88,3.35 -44.73,24.48 L-30.64,25.71 L-31.87,39.80 C-10.72,41.65 0.75,32.01 0,0 M0,0 C31.39,-6.31 42.88,3.35 44.73,24.48 L30.64,25.71 L31.87,39.80 C10.72,41.65 -0.75,32.01 0,0'
    const wing4_bottom = 'M0,0 C-31.39,-6.30 -44.11,17.43 -26.20,15.45 L-34.37,28.92 L-19.77,23.11 C-24.83,40.42 .75,32.01 0,0 M0,0 C31.39,-6.30 44.11,17.43 26.20,15.45 L34.37,28.92 L19.77,23.11 C24.83,40.42 -.75,32.01 0,0'
    const wing3_bottom = 'M0,0 C14.01,-1.23 37.07,18.05 38.3,32.14 C24.21,33.37 1.23,14.09 0,0 M0,0 C-14.01,-1.23 -37.07,18.05 -38.3,32.14 C-24.21,33.37 -1.23,14.09 0,0'
    const wing2_bottom = 'M0,0 L-28.79,4.58 L-42.88,3.35 L-43.5,10.39 L-38.3,32.14 L-17.79,41.03 L-10.74,41.65 L-9.51,27.56 L0,0 M0,0 L28.79,4.58 L42.88,3.35 L43.5,10.39 L38.3,32.14 L17.79,41.03 L10.74,41.65 L9.51,27.56 L0,0'  
    const wing5_bottom = 'M0,0 C-43.5,10.39 -39.67,7.18 -38.3,32.14 C-13.96,37.82 -17.79,41.03 0,0 M0,0 C43.5,10.39 39.67,7.18 38.3,32.14 C13.96,37.82 17.79,41.03 0,0 '
    const wing6_bottom = 'M0,0 C-28.18,-2.47 -56.05,7.87 -22.98,19.28 M-22.98,19.28 C-24.21,33.37 -17.49,53.83 0,0 M0,0 C28.18,-2.47 56.05,7.87 22.98,19.28 M22.98,19.28 C24.21,33.37 17.49,53.83 0,0' 


    // to execute d3
    useEffect(() => {

        if (albums && d3Container.current) {
            const svg = d3.select(d3Container.current);
            const flower = 100
            console.log(flower)

            var g = svg.selectAll('g')
            .data(albums).enter().append('g')

            // bind d3 data
            var update = svg
                .append("g")
                .selectAll('path')
                .data(albums)



                // enter new D3 elements, UPPER WINGS --> AOTY SCORES
            update.enter()
                .append('path')
                .attr('viewBox', '0 0 100 100')
                .attr('d', wing1_top + wing1_bottom)
                .attr('fill','none')
                .attr('stroke','black')
                .attr('transform',`translate(75,75)`)

            update.append('text')
                .attr('class', 'barsEndlineText')
                .attr('text-anchor', 'middle')
                 .attr("x", 0)
                .attr("y", ".35em")
                .text('I am label')



/*
                .attr('stroke', function (d) {
                    var RDay = d['Release Month'];
                    // set outline color based on season
                    var outlineColor = '#1f29ed';
                    if (RDay == "December"|| RDay == "January"|| RDay == "February"){
                        outlineColor = "#1f29ed"
                    };
                    if (RDay == "March"|| RDay == "April"|| RDay == "May"){
                        outlineColor = "#fb8aff"
                    };
                    if (RDay == "June"|| RDay == "July"|| RDay == "August"){
                        outlineColor = "#ffef8a"
                    };
                    if (RDay == "September"|| RDay == "October"|| RDay == "November"){
                        outlineColor = "#f09f48"
                    };
                    return(outlineColor);
                })
*/
 
            
                
            function log(sel, msg) {
                console.log(msg, sel)
            }
        }
    },
        // useEffect has dependency array
        [albums, d3Container.current]
    )

    return (


        <svg
            className="key"
            // width={400}
            // height={200}
            ref={d3Container}
        />
    )
}

export default WingShapesKey;