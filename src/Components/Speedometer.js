import ReactSpeedometer from "react-d3-speedometer";
import "../Styles/Speedometer.css";
const Speedometer = ({ speed }) => {
    return (
        <div className="Stats">
            <h1>Ram Usage</h1>
            {/* <p>Current speed: {speed}</p> */}
        <ReactSpeedometer
        value={56}
        minValue={0}
        maxValue={100}
        segments={1}
        width={170}
        height={190}
        // startColor
        // endColor
        needleHeightRatio={0.7}
/>
        </div>
    );
}

export default Speedometer;