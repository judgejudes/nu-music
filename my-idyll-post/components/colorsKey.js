import React, { useEffect, useRef } from 'react';
import * as d3 from "d3";
// import albums from '../data/clean-album-ratings';
import _ from 'lodash';
import wingColors from '../data/wing-colors';
import D3Component from 'idyll-d3-component';



const ColorsKey = ({ }) => {

    // const d3Container = useRef(null)

    // useEffect(() => {
    //     if (wingColors && d3Container.current) {
    //         const svg = d3.select(d3Container.current)

    //         // var g = svg.selectAll('g')
    //         // .data(albums).enter().append('g')

    //         var update = svg
    //             .append("g")
    //             .selectAll('circle')
    //             .data(wingColors)

    //         // new D3 elements
    //         update.enter()
    //             .append('circle')
    //             // .style("fill", (i) => wingColors[i])
    //             .style("fill", "black")
    //             .attr("r", 40)
    //             .attr("cx", 50)
    //             .attr("cy", 20)
    //             .call(log, "what");

    //             update
    //             .attr('x', (_, i) => i * 220)
    //             .text((d) => d);

    //             function log(sel, msg) {
    //                 console.log(msg, sel)
    //             }
    //     }
    // },
    // [wingColors, d3Container.current])

    return (
        <div style={{
                margin: 'auto',
                textAlign: 'center'
        }}>
            <div style={{
                textAlign: 'center',
                display: 'block',
                float: 'left',
                padding:'20px'
            }}>
                <div className="circles" style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "#EFC7C2" }}></div>
                <span>Pop</span>
            </div>
            <div style={{
                textAlign: 'center',
                display: 'block',
                float: 'left',
                padding:'20px'
            }}>
                <div className="circles" style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "#694F5D" }}></div>
                <span>Hip Hop</span>
            </div>
            <div style={{
                textAlign: 'center',
                display: 'block',
                float: 'left',
                padding:'20px'
            }}>
                <div className="circles" style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "#68A691" }}></div>
                <span>Neo-Psychedelia</span>
            </div>
            <div style={{
                textAlign: 'center',
                display: 'block',
                float: 'left',
                padding:'20px'
            }}>
                <div className="circles" style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "#EB5160" }}></div>
                <span>Electronic</span>
            </div>
            <div style={{
                textAlign: 'center',
                display: 'block',
                float: 'left',
                padding:'20px'
            }}>
                <div className="circles" style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "#4F4789" }}></div>
                <span>Rock</span>
            </div>
            <div style={{
                textAlign: 'center',
                display: 'block',
                float: 'left',
                padding:'20px'
            }}>
                <div className="circles" style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "#FFED66" }}></div>
                <span>Soul</span>
            </div>
            <div style={{
                textAlign: 'center',
                display: 'block',
                float: 'left',
                padding:'20px'
            }}>
                <div className="circles" style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "#7D5BA6" }}></div>
                <span>Country</span>
            </div>
            <div style={{
                textAlign: 'center',
                display: 'block',
                float: 'left',
                padding:'20px'
            }}>
                <div className="circles" style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "#6B0F1A" }}></div>
                <span>Punk</span>
            </div>
            <div style={{
                textAlign: 'center',
                display: 'block',
                float: 'left',
                padding:'20px'
            }}>
                <div className="circles" style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "#2A324B" }}></div>
                <span>R&B</span>
            </div>
            <div style={{
                textAlign: 'center',
                display: 'block',
                float: 'left',
                padding:'20px'
            }}>
                <div className="circles" style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "#84E296" }}></div>
                <span>Disco</span>
            </div>
            <div style={{
                textAlign: 'center',
                display: 'block',
                float: 'left',
                padding:'20px'
            }}>
                <div className="circles" style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "#C0C999" }}></div>
                <span>Reggae</span>
            </div>
            <div style={{
                textAlign: 'center',
                display: 'block',
                float: 'left',
                padding:'20px'
            }}>
                <div className="circles" style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "#F62DAE" }}></div>
                <span>Singer-Songwriter</span>
            </div>
            <div style={{
                textAlign: 'center',
                display: 'block',
                float: 'left',
                padding:'20px'
            }}>
                <div className="circles" style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "white", border: '1px solid black' }}></div>
                <span>Other</span>
            </div>
            
        </div>
    )

}

export default ColorsKey;
