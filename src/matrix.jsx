import React from 'react'
import PropTypes from 'prop-types'

class Matrix extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            canvas: null
        }

        this.draw = this.draw.bind(this)
        this.updateDimensions = this.updateDimensions.bind(this)
    }

    componentDidMount() {
        this.setState({ canvas: this.refs.canvas }, () => {
            let columns = []
            let context = this.state.canvas.getContext('2d')
            let size = this.props.colSize
            let source = '0 0 1 1'
            let width = this.props.fullscreen ? window.innerWidth : this.props.width
            let height = this.props.fullscreen ? window.innerHeight : this.props.height
            let canvas = this.state.canvas
            canvas.width = width
            canvas.height = height

            let numberOfColumns = Math.floor(width / size * 3)
            this.initialDraw = true
            this.setState({ canvas, columns, context, size, source, numberOfColumns }, () => {
                for (let i = 0; i < numberOfColumns; i++) {
                    columns.push(1000)
                }
                this.draw()

                let interval = setInterval(this.draw, 50 / this.props.speed)
                this.setState({ interval })

                if (this.props.fullscreen) { window.addEventListener('resize', this.updateDimensions) }
            })
            this.initialDraw = false
        })
    }

    draw() {
        let context = this.state.context
        let columns = this.state.columns
        let numberOfColumns = this.state.numberOfColumns

        // switch to only affect the intersection of the existing canvas, and fade everything
        context.globalCompositeOperation = 'destination-out'
        context.fillStyle = `rgba(255, 255, 255, ${this.props.fadeRate})`
        context.fillRect(0, 0, this.state.canvas.width, this.state.canvas.width)
        // switch back to the normal mode of writing on top of the canvas
        context.globalCompositeOperation = 'source-over'

        context.fillStyle = this.props.color
        context.font = '700 ' + this.props.fontSize + 'px Consolas,monaco,monospace'

        for (let whichRow = 0; whichRow < numberOfColumns; whichRow++) {
            let index = Math.floor(Math.random() * this.state.source.length)
            let character = this.state.source[index]
            let positionX = whichRow * this.state.size
            let positionY = columns[whichRow] * this.state.size

            context.fillText(character, positionX, positionY)
            if (positionY >= this.state.canvas.height && Math.random() > 1 - this.props.frequency) {
                columns[whichRow] = 0
            }
            columns[whichRow]++
        }

        this.setState({ context, columns })
    };

    updateDimensions() {
        let canvas = this.state.canvas
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    }

    render() {
        let style = this.props.style ? this.props.style : {}
        return (
            <div style={{
                ...style,
                width: this.props.fullscreen ? '100vw' : this.props.width + 'px',
                height: this.props.fullscreen ? '100vh' : this.props.height + 'px',
                overflow: 'hidden',
                zIndex: this.props.zIndex,
                backgroundColor: this.props.backgroundColor
            }}
            >
                <canvas ref='canvas' />
            </div>
        )
    }
}

Matrix.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    fullscreen: PropTypes.bool,
    colSize: PropTypes.number,
    fontSize: PropTypes.number,
    interval: PropTypes.number,
    color: PropTypes.string,
    frequency: PropTypes.number,
    speed: PropTypes.number,
    style: PropTypes.object,
    zIndex: PropTypes.number,
    fadeRate: PropTypes.number,
    backgroundColor: PropTypes.string
};

Matrix.defaultProps = {
    width: 640,
    height: 480,
    fullscreen: false,
    colSize: 11,
    fontSize: 13.5,
    interval: 30,
    color: '#00cc33',
    frequency: 0.005,
    speed: 1.6,
    fadeRate: 0.05,
    backgroundColor: 'black'
};

export default Matrix