import React, { useEffect, useRef } from 'react';
import * as d3 from "d3";
import albums from '../data/clean-album-ratings';
import wingColors from '../data/wing-colors';
import _ from 'lodash';



const Wings = ({ }) => {
    // constructor(props) {
    //     super(props);
    // }
    // useRef creates variable that holds onto value across rendering passes, so rn it'll hold SVG
    // DOM element. initialized as null and will be assigned later

    // ref is "get" and "set" via .current property
    const d3Container = useRef(null);

    let perRow = 5
    const pathWidth = 150
    perRow = Math.floor(800/pathWidth)

    let calculateGridPos = (i) => {
        return [(i % perRow + 0.5) * pathWidth * 1.8, (Math.floor(i / perRow) + 0.5) * pathWidth * 1.5]
      }
    
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

        // function log(hi) {
        //     console.log("this works")
        //     var genre = hi['Genre']
        //      if (genre.includes("Pop")) {
        //                 hi
        //                 .attr('fill', 'pink')
        //             }
        // }

        if (albums && d3Container.current) {
            const svg = d3.select(d3Container.current);
            const flower = 100
            // console.log(flower)

            var g = svg.selectAll('g')
            .data(albums).enter().append('g')

            var title = g.append('text')
            title.attr('text-anchor', 'middle')
                .attr('dy', '5.5em')
                .attr('transform', (d, i) => `translate(${calculateGridPos(i)})`)

                .style('font-size', '.95em')
                .style('font-style', 'bold')
                .text(d => _.truncate(d.Title, {length: 20}))
            
            var artist = g.append('text')
            artist.attr('text-anchor', 'middle')
                .attr('dy', '8.2em')
                .attr('transform', (d, i) => `translate(${calculateGridPos(i)})`)

                .style('font-size', '.75em')
                .style('font-style', 'italic')
                .text(d => _.truncate(d.Artist, {length: 20}))

            // bind d3 data
            var update = svg
                .append("g")
                .selectAll('path')
                .data(albums)

            // enter new D3 elements, UPPER WINGS --> AOTY CRITIC SCORES
            update.enter()
                .append('path')
                .attr('viewBox', '0 0 200 297')
                //.attr('d',wingType)

                .attr('d', function (d) {
                    // retrieve AOTY Critic and User Score of each album 
                    var AOTYCriticScore = d['AOTY Critic Score'];
            
                    // set upper wing type depending on AOTY scores
                    var wingType = wing1_top;
                    if (AOTYCriticScore < 50 || AOTYCriticScore == ""){
                      wingType = wing1_top
                    };
                    if (AOTYCriticScore >= 50 && AOTYCriticScore < 60){
                      wingType = wing2_top
                    };
                    if (AOTYCriticScore >= 60 && AOTYCriticScore < 70){
                      wingType = wing3_top
                    };
                    if (AOTYCriticScore >= 70 && AOTYCriticScore < 80){
                      wingType = wing4_top
                    };
                    if (AOTYCriticScore >= 80 && AOTYCriticScore < 90){
                      wingType = wing5_top
                    };
                    if (AOTYCriticScore >= 90 && AOTYCriticScore < 100){
                      wingType = wing6_top
                    };
                    // console.log(wingType)
                    return(wingType);
                })
                // scale lower wing size according to AOTY Critic Reviews (max = 46)
                .attr('transform', function(d, i){
                    var AOTYCriticReviews = d['AOTY Critic Reviews'];
                    var sizeScale = d3.scaleLinear().domain([0,46]).range([0.7, 2]);
                    return `translate(${calculateGridPos(i)})scale(${sizeScale(AOTYCriticReviews)})`;
                })

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
                .attr('x', (d, i) => i * 220)
                .attr("fill", function(d) 
                {
                    var genre = d['Genre']
                    // if (wingColors.some(r => genre.includes(r))) {
                    //     console.log(genre, wingColors[r])
                    // return wingColors[r]
                    // }
                    if (genre.toLowerCase().includes("pop")) {
                        return "#EFC7C2"
                    }
                    else if (genre.includes("Hip Hop")) {
                        return "#694F5D"
                    }
                    else if (genre.includes("Neo-Psychedelia")) {
                        return "#68A691"
                    }
                    else if (genre.includes("Electronic")) {
                        return "#EB5160"
                    }
                    else if (genre.includes("Rock")) {
                        return "#4F4789"
                    }
                    else if (genre.includes("Soul")) {
                        return "#FFED66"
                    }
                    else if (genre.includes("Country")) {
                        return "#7D5BA6"
                    }
                    else if (genre.includes("Punk")) {
                        return "#6B0F1A"
                    }
                    else if (genre.includes("R&B")) {
                        return "#2A324B"
                    }
                    else if (genre.includes("Disco")) {
                        return "#84E296"
                    }
                    else if (genre.includes("Reggae")) {
                        return "#C0C999"
                    }
                    else if (genre.includes("Singer-Songwriter")) {
                        return "#F62DAE"
                    }
                    return "white"
                }
                )

                .attr("fill-opacity", '1')
                //console.log("genre colors",(d)=>albums[d].Title)
            update
                .attr('x', (_, i) => i * 220)
            
            // enter new D3 elements, LOWER WINGS --> AOTY USER SCORES
            update.enter()
                .append('path')
                .attr('viewBox', '0 0 200 297')

                .attr('d', function (d) {
                    // retrieve AOTY Critic and User Score of each album 
                    var AOTYUserScore = d['AOTY User Score'];
                    var wingType = wing1_bottom;            
                    // set lower wing types depending on AOTY User Score
                    if (AOTYUserScore < 50 || AOTYUserScore == ""){
                        wingType = wing1_bottom;
                    };
                    if (AOTYUserScore >= 50 && AOTYUserScore < 60){
                        wingType = wing2_bottom;
                    };
                    if (AOTYUserScore >= 60 && AOTYUserScore < 70){
                        wingType = wing3_bottom;
                    };
                    if (AOTYUserScore >= 70 && AOTYUserScore < 80){
                        wingType = wing4_bottom;
                    };
                    if (AOTYUserScore >= 80 && AOTYUserScore < 90){
                        wingType = wing5_bottom;
                    };
                    if (AOTYUserScore >= 90 && AOTYUserScore < 100){
                        wingType = wing6_bottom;
                    };
                    // console.log(wingType)
                    return(wingType);
            })
                .attr('stroke', function (d) {
                    var RDay = d['Release Month'];
                    // set outline color based on seasons
                    // (winter:blue, spring:pink, summer:yellow, fall:orange)
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
                .attr('x', (d, i) => i * 220)
                // scale lower wing size according to AOTY User Reviews (max = 4530)
                .attr('transform', function(d, i){
                    var AOTYUserReviews = d['AOTY User Reviews'];
                    var sizeScale = d3.scaleLinear().domain([0,4530]).range([0.7, 2]);
                    return `translate(${calculateGridPos(i)})scale(${sizeScale(AOTYUserReviews)})`;
                })
                .attr("fill-opacity", '1')
                // .attr("fill", (d) => wingColors[d.Genre])
                .attr("fill", function(d) 
                {
                    var genre = d['Genre']
                    // if (wingColors.some(r => genre.includes(r))) {
                    //     console.log(genre, wingColors[r])
                    // return wingColors[r]
                    // }
                    if (genre.toLowerCase().includes("pop")) {
                        return "#EFC7C2"
                    }
                    else if (genre.includes("Hip Hop")) {
                        return "#694F5D"
                    }
                    else if (genre.includes("Neo-Psychedelia")) {
                        return "#68A691"
                    }
                    else if (genre.includes("Electronic")) {
                        return "#EB5160"
                    }
                    else if (genre.includes("Rock")) {
                        return "#4F4789"
                    }
                    else if (genre.includes("Soul")) {
                        return "#FFED66"
                    }
                    else if (genre.includes("Country")) {
                        return "#7D5BA6"
                    }
                    else if (genre.includes("Punk")) {
                        return "#6B0F1A"
                    }
                    else if (genre.includes("R&B")) {
                        return "#2A324B"
                    }
                    else if (genre.includes("Disco")) {
                        return "#84E296"
                    }
                    else if (genre.includes("Reggae")) {
                        return "#C0C999"
                    }
                    else if (genre.includes("Singer-Songwriter")) {
                        return "#F62DAE"
                    }
                    return "white"
                }
                )

            // add scaled butterfly body
            update.enter()
                .append('path')
                //.attr('d', "M0,0 C7,15 5,17 -1,25")
                .attr('d', 'M0,0 a 2,5 0 1,1 1,0 a 2,5 0 1,1 -1,0')
                .attr('transform', function(d, i){
                    var AOTYCriticReviews = d['AOTY Critic Reviews'];
                    var CRsizeScale = d3.scaleLinear().domain([0,46]).range([0.7, 2]);   
                    var AOTYUserReviews = d['AOTY User Reviews'];
                    var URsizeScale = d3.scaleLinear().domain([0,4530]).range([0.7, 2]);                   
                    var max = Math.max(CRsizeScale(AOTYCriticReviews), URsizeScale(AOTYUserReviews))
                    return `translate(${calculateGridPos(i)})scale(${max})`;
                })
                .attr("fill", 'black')
                .attr('stroke-width', '1.8')
                .attr('stroke', 'black')    

            // add scaled antennas
            update.enter()
                .append('path')
                //.attr('d', "M0,0 C7,15 5,17 -1,25")
                .attr('d', " M0,-2 L4,-25 M0,-2 L-4,-25")
                .attr('transform', function(d, i){
                    var AOTYCriticReviews = d['AOTY Critic Reviews'];
                    var CRsizeScale = d3.scaleLinear().domain([0,46]).range([0.7, 2]); 
                    var AOTYUserReviews = d['AOTY User Reviews'];
                    var URsizeScale = d3.scaleLinear().domain([0,4530]).range([0.7, 2]);                    
                    var max = Math.max(CRsizeScale(AOTYCriticReviews), URsizeScale(AOTYUserReviews))
                    return `translate(${calculateGridPos(i)})scale(${max})`;
                })
                .attr("fill", 'none')
                .attr('stroke-width', '1.8')
                .attr('stroke', 'black')
            
                
            // function log(hi) {
            //     console.log("this works")
            // }
        }
    },
        // useEffect has dependency array
        [albums, d3Container.current]
    )

    return (


        <svg
            className="petal"
            // width={400}
            // height={200}
            ref={d3Container}
        />
    )
}

export default Wings;