import React, { useEffect, useRef } from 'react';
import * as d3 from "d3";
import albums from '../data/clean-album-ratings';
import _ from 'lodash';



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

    let perRow = 10
    const pathWidth = 120
    perRow = Math.floor(1400/pathWidth)

    let calculateGridPos = (i) => {
        return [(i % perRow + 0.5) * pathWidth, (Math.floor(i / perRow) + 0.5) * pathWidth]
      }

    
    //const wing1 = 'M0,0 C25,20 25,35 10,50 L0,40 L-10,50 C-25,35 -25,20 0,0'
    //const wing2 = "M0,0 C25,20 15,45 5,30 L0,45 L-5,30 C-15,45 -25,20 0,0"
    //const wing3 = 'M0,0 C -10,-10 -10,-40 0, -50 C 10, -40 10, -10 0, 0'
    //const wing4 = 'M0,0 15,25 L25,35 L20,40 L20,40 L0,50 L-20,40 L-25,35 L-15,25 L0,0' 
    //const wing5 = 'M0,0 C20,40 20,35 0,50 C-20,35 -20,40 0,0'
    //const wing6 = 'M0,0 C20,20 30,48 0,30 M0,30 C-10,40 -30,48 0,0' 


    const wing1_top = 'M0,0 C-31.39,6.31 -42.88,-3.35 -44.73,-24.48 L-30.64,-25.71 L-31.87,-39.80 C-10.72,-41.65 0.75,-32.01 0,0 M0,0 C31.39,6.31 42.88,-3.35 44.73,-24.48 L30.64,-25.71 L31.87,-39.80 C10.72,-41.65 -0.75,-32.01 0,0'
    const wing2_top = 'M0,0 C-31.39,6.30 -44.11,-17.43 -26.20,-15.45 L-34.37,-28.92 L-19.77,-23.11 C-24.83,-40.42 .75,-32.01 0,0 M0,0 C31.39,6.30 44.11,-17.43 26.20,-15.45 L34.37,-28.92 L19.77,-23.11 C24.83,-40.42 -.75,-32.01 0,0'
    const wing3_top = 'M0,0 C14.01,1.23 37.07,-18.05 38.3,-32.14 C24.21,-33.37 1.23,-14.09 0,0 M0,0 C-14.01,1.23 -37.07,-18.05 -38.3,-32.14 C-24.21,-33.37 -1.23,-14.09 0,0'
    const wing4_top = 'M0,0 L-28.79,-4.58 L-42.88,-3.35 L-43.5,-10.39 L-38.3,-32.14 L-17.79,-41.03 L-10.74,-41.65 L-9.51,-27.56 L0,0 M0,0 L28.79,-4.58 L42.88,-3.35 L43.5,-10.39 L38.3,-32.14 L17.79,-41.03 L10.74,-41.65 L9.51,-27.56 L0,0'  
    const wing5_top = 'M0,0 C-43.5,-10.39 -39.67,-7.18 -38.3,-32.14 C-13.96,-37.82 -17.79,-41.03 0,0 M0,0 C43.5,-10.39 39.67,-7.18 38.3,-32.14 C13.96,-37.82 17.79,-41.03 0,0 '
    const wing6_top = 'M0,0 C-28.18,2.47 -56.05,-7.87 -22.98,-19.28 M-22.98,-19.28 C-24.21,-33.37 -17.49,-53.83 0,0 M0,0 C28.18,2.47 56.05,-7.87 22.98,-19.28 M22.98,-19.28 C24.21,-33.37 17.49,-53.83 0,0' 
    
    const wing1_bottom = 'M0,0 C-31.39,-6.31 -42.88,3.35 -44.73,24.48 L-30.64,25.71 L-31.87,39.80 C-10.72,41.65 0.75,32.01 0,0 M0,0 C31.39,-6.31 42.88,3.35 44.73,24.48 L30.64,25.71 L31.87,39.80 C10.72,41.65 -0.75,32.01 0,0'
    const wing2_bottom = 'M0,0 C-31.39,-6.30 -44.11,17.43 -26.20,15.45 L-34.37,28.92 L-19.77,23.11 C-24.83,40.42 .75,32.01 0,0 M0,0 C31.39,-6.30 44.11,17.43 26.20,15.45 L34.37,28.92 L19.77,23.11 C24.83,40.42 -.75,32.01 0,0'
    const wing3_bottom = 'M0,0 C14.01,-1.23 37.07,18.05 38.3,32.14 C24.21,33.37 1.23,14.09 0,0 M0,0 C-14.01,-1.23 -37.07,18.05 -38.3,32.14 C-24.21,33.37 -1.23,14.09 0,0'
    const wing4_bottom = 'M0,0 L-28.79,4.58 L-42.88,3.35 L-43.5,10.39 L-38.3,32.14 L-17.79,41.03 L-10.74,41.65 L-9.51,27.56 L0,0 M0,0 L28.79,4.58 L42.88,3.35 L43.5,10.39 L38.3,32.14 L17.79,41.03 L10.74,41.65 L9.51,27.56 L0,0'  
    const wing5_bottom = 'M0,0 C-43.5,10.39 -39.67,7.18 -38.3,32.14 C-13.96,37.82 -17.79,41.03 0,0 M0,0 C43.5,10.39 39.67,7.18 38.3,32.14 C13.96,37.82 17.79,41.03 0,0 '
    const wing6_bottom = 'M0,0 C-28.18,-2.47 -56.05,7.87 -22.98,19.28 M-22.98,19.28 C-24.21,33.37 -17.49,53.83 0,0 M0,0 C28.18,-2.47 56.05,7.87 22.98,19.28 M22.98,19.28 C24.21,33.37 17.49,53.83 0,0' 


    // to execute d3
    useEffect(() => {

        if (albums && d3Container.current) {
            const svg = d3.select(d3Container.current);
            console.log("alv", albums)
            const flower = 100
            console.log(flower)

            var g = svg.selectAll('g')
            .data(albums).enter().append('g')

            var title = g.append('text')
            title.attr('text-anchor', 'middle')
                .attr('dy', '4.4em')
                .attr('transform', (d, i) => `translate(${calculateGridPos(i)})`)

                .style('font-size', '.8em')
                .style('font-style', 'bold')
                .text(d => _.truncate(d.Title, {length: 20}))
            
            var artist = g.append('text')
            artist.attr('text-anchor', 'middle')
                .attr('dy', '7.3em')
                .attr('transform', (d, i) => `translate(${calculateGridPos(i)})`)

                .style('font-size', '.6em')
                .style('font-style', 'italic')
                .text(d => _.truncate(d.Artist, {length: 20}))


            

            // bind d3 data
            var update = svg
                .append("g")
                .selectAll('path')
                .data(albums)
            //var numPetalScale = d3.scaleQuantize().domain(d['AOTY Critic Score']).range([2, 4, 6, 8, 10, 12])
            //var sizeScale = d3.scaleQuantize().domain(d['AOTY Critic Reviews']).range([.1, .2, .3, .4, .5, .6, .7, .8, .9, 1])
        
            // enter new D3 elements, for each element in the array
            update.enter()
                .append('path')
                .attr('viewBox', '0 0 200 297')
                //.attr('d',wingType)

                .attr('d', function (d) {
                    // retrieve AOTY Critic and User Score of each album 
                    var AOTYScore = d['AOTY Critic Score'];
                    var AOTYUserScore = d['AOTY User Score'];

                    //var petSize = sizeScale(AOTYReviews);
                    //console.log("petSize",petSize);
            
                    // set upper wing type depending on AOTY scores
                    var wingType = wing1_top;
                    if (AOTYScore < 50 || AOTYScore == ""){
                      wingType = wing1_top
                    };
                    if (AOTYScore >= 50 && AOTYScore < 60){
                      wingType = wing2_top
                    };
                    if (AOTYScore >= 60 && AOTYScore < 70){
                      wingType = wing3_top
                    };
                    if (AOTYScore >= 70 && AOTYScore < 80){
                      wingType = wing4_top
                    };
                    if (AOTYScore >= 80 && AOTYScore < 90){
                      wingType = wing5_top
                    };
                    if (AOTYScore >= 90 && AOTYScore < 100){
                      wingType = wing6_top
                    };

                    // set lower wing types depending on AOTY User Score
                    if (AOTYUserScore < 50 || AOTYUserScore == ""){
                        wingType += wing1_bottom;
                    };
                    if (AOTYUserScore >= 50 && AOTYUserScore < 60){
                        wingType += wing2_bottom;
                    };
                    if (AOTYUserScore >= 60 && AOTYUserScore < 70){
                        wingType += wing3_bottom;
                    };
                    if (AOTYUserScore >= 70 && AOTYUserScore < 80){
                        wingType += wing4_bottom;

                    };
                    if (AOTYUserScore >= 80 && AOTYUserScore < 90){
                        wingType = wingType.concat(wing5_bottom);
                    };
                    if (AOTYUserScore >= 90 && AOTYUserScore < 100){
                        wingType = wingType.concat(wing6_bottom);
                    };
                    console.log(wingType)
                    return(wingType);
                })
                .attr('transform', d => `scale(.6)`)
/*
                .attr('transform', function (d) {
                    // max aoty reviews: 42
                    var AOTYReviews =  (d) => d['AOTY Critic Reviews'];
                    var numPetalScale = d3.scaleQuantize().domain(d['AOTY Critic Score']).range([2, 4, 6, 8, 10, 12])
                    var sizeScale = d3.scaleQuantize().domain(d['AOTY Critic Reviews']).range([.1, .2, .3, .4, .5, .6, .7, .8, .9, 1])
            
                    var wingSize = 1
                    // set upper wing scale depending on AOTY Reviews
                    if (AOTYReviews < 10){
                        wingSize = .3
                    };
                    if (AOTYReviews >= 10 && AOTYReviews < 20){
                      wingSize = .4
                    };
                    if (AOTYReviews >= 20 && AOTYReviews < 30){
                      wingSize = .5
                    };
                    if (AOTYReviews >= 30 && AOTYReviews < 40){
                      wingSize = .6
                    };
                    if (AOTYReviews >= 40 && AOTYReviews < 50){
                      wingSize = .8
                    };
                    if (AOTYReviews >= 50){
                      wingSize = 1
                    };
                    //return(wingSize);
                    return `scale(` wingSize `)`;
                    //return `scale(wingSize)`
                })
                */
                //.attr('stroke', 'purple')

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

                .attr('stroke-width', '1.8')
                // .attr('fill', 'none')
                // .attr("x", (d) => d[1] * 20)
                .attr('x', (d, i) => i * 220)
                // ITS THE TRANSLATION OMG
                // .attr('transform', (d, i) => 'translate(' + ((i * 150)) + ',0)')
                .attr('transform', (d, i) => `translate(${calculateGridPos(i)})`)
                // .attr('class', 'petal')
                // .selectAll('path')
                .attr("fill", (d) => colors[d.Genre])

                .attr("fill-opacity", '.6')
                console.log("genre colors",(d)=>albums[d].Title)

                //.call(log, "what")
            //var antennas = g.append('path')
            //antennas.attr('d', 'M0,0 C7,15 5,17 -1,25')
            //    .attr('fill', 'none')
            //    .attr('stroke', 'black')



            update
                .attr('x', (_, i) => i * 220)
                //.text((d) => d);

            update.enter()
                .append('path')
                .attr('d', "M0,0 C7,15 5,17 -1,25")
                .attr("fill", 'none')
                .attr('stroke-width', '1.8')
                .attr('stroke', 'black')
            
                
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
            className="petal"
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