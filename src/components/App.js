import React, { Component } from 'react';
import oneSrc from '../assets/1.jpeg'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseOnImage: false,
            x: 0,
            y: 0
        };
        this.mouseLeft = this.mouseLeft.bind(this)
        this.mouseHover = this.mouseHover.bind(this)
        this.mouseEntered = this.mouseEntered.bind(this)
    }

    mouseLeft(e) {
        console.log('left')
        this.setState({
            mouseOnImage: false
        })
    }

    mouseHover(e) {
        const { right, bottom } = e.target.getBoundingClientRect()
        console.log('right', right)
        console.log('x', e.pageX)
        if (right < e.pageX || bottom < e.pageY) {
            this.mouseLeft()
        }
        this.setState({
            x: e.pageX,
            y: e.pageY,
            mouseOnImage: true
        })
    }

    mouseEntered(e) {
        this.setState({
            mouseOnImage: true,
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="image-container">
                    <div className="image-view-section" >
                        <img src={oneSrc} onMouseEnter={this.mouseEntered} onMouseMove={this.mouseHover}/>
                    </div>
                    <div className="zoomed-image-section">
                        <img src={oneSrc} className="zoomed-image-preview" />
                    </div>
                </div>
                {this.state.mouseOnImage ?
                    <div className="image-selector" style={{ top: this.state.y, left: this.state.x }}>

                    </div>
                : null}
            </React.Fragment>
        );
    }
}

export default App;