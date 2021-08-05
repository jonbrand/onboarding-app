import '../../../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines,VerticalBarSeries, HorizontalGridLines } from 'react-vis';

const Chart = () => {
    const data = [
        { x: 0, y: 1.33},
        { x: 1, y: 1.54},
        { x: 2, y: 1.45},
        { x: 3, y: 1.20},
        { x: 4, y: 1.38},
        { x: 5, y: 1.66},
        { x: 6, y: 1.65},
        { x: 7, y: 1.55},
        { x: 8, y: 1.85},
    ]

    return (
        <>
            <div className={{ marginTop: '15px' }}>
                <XYPlot height={300} width={300}>
                    <VerticalBarSeries data={data} />
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                </XYPlot>
            </div>
            <div className={{ marginTop: '15px' }}>
                <XYPlot height={300} width={300}>
                    <LineSeries data={data} />
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                </XYPlot>
            </div>
        </>
    )
}

export default Chart;