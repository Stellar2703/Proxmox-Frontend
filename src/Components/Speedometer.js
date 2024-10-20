import ReactSpeedometer from "react-d3-speedometer";




const Speedometer = ({ speed }) => {
    return (
        <div>
        <h1>Speedometer</h1>
        <p>Current speed: {speed}</p>
        <ReactSpeedometer
        value={56}
        minValue={0}
        maxValue={100}
        segments={1}
        width={300}
        height={4600}
        // startColor
        // endColor
        needleHeightRatio={0.7}
/>
        </div>
    );
}

export default Speedometer;