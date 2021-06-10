import React, { useEffect, useRef } from 'react';
import * as d3 from "d3";
import albums from '../data/clean-album-ratings';
import wingColors from '../data/wing-colors';
import _ from 'lodash';



const OutlineKey = ({ }) => {

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
                <div className="circles" style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "blue" }}></div>
                <span>Winter</span>
            </div>
            <div style={{
                textAlign: 'center',
                display: 'block',
                float: 'left',
                padding:'20px'
            }}>
                <div className="circles" style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "pink" }}></div>
                <span>Spring</span>
            </div>
            <div style={{
                textAlign: 'center',
                display: 'block',
                float: 'left',
                padding:'20px'
            }}>
                <div className="circles" style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "yellow" }}></div>
                <span>Summer</span>
            </div>
            <div style={{
                textAlign: 'center',
                display: 'block',
                float: 'left',
                padding:'20px'
            }}>
                <div className="circles" style={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "orange" }}></div>
                <span>Fall</span>
            </div>
           </div>
    )
}

export default OutlineKey;