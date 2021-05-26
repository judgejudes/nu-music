const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

class Butterfly extends D3Component {

    initialize(node, props) {
        // node is a <div> container,
        var svg = d3.select(node).append('svg');

        //...
        //     const svg2 = html`
        // <p>hello there</p>`

        // do something with the props object passed in
        // svg2
        // const petalpath = "M0,0 C50,40 50,70 20,100 L0,85 L-20,100 C-50,70 -50,40 0,0"

        // svg.append("line")
        //     .attr("x1", 100)
        //     .attr("x2", 500)
        //     .attr("y1", 50)
        //     .attr("y2", 250)
        //     .attr("stroke", "black")

        // const xScale = d3.scaleLinear()
        //     .domain([0, 100])
        //     .range([0, 600]) // 600 is our chart width

        // const yScale = d3.scaleLinear()
        //     .domain([0, 100])
        //     .range([400, 0]) // 400 is our chart height


        // const line = d3.line()
        //     .x(d => xScale(d.x))
        //     .y(d => yScale(d.y))
        //     .curve(d3.curveCatmullRom.alpha(.5))

        // svg.append('path')
        //     // .datum([
        //     //     { x: 0, y: 20 },
        //     //     { x: 20, y: 20 },
        //     //     { x: 40, y: 40 },
        //     //     { x: 60, y: 30 },
        //     //     { x: 80, y: 40 },
        //     //     { x: 100, y: 30 },
        //     // ])
        //     // .attr('d', line)
        //     .moveTo(25, 25);
        // lineTo(75, 25);
        // lineTo(75, 75);
        // closePath();

        `<p>does this work? </p>`




        svg.data(props.data);
    }

    update(props) {
        // use when hovering above an album for some info about it!
    }

}

module.exports = Butterfly;