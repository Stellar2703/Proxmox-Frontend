import '../Styles/ContainerViewPage.css';
import Speedometer from '../Components/Speedometer';

const ContainerAnalytics = () => {
    return (
        <div className="Analytics">
        <div className="Header-Info">
            {/* <p>{NodeName} / {ContainerName}</p> */}
            <p>NodeName / ContainerName</p>
            </div>
            <div className='Module-Tiles'>
            <div className='Module'>
                <h1>Node-name</h1>
                <h1>Node-ID</h1>
                <h1>Status</h1>
                <h1>Excited</h1>
            </div>
                <div className="Button">
                    <button class="start-btn">Sta</button>
                    <button class="stop-btn">St</button>
                    <button class="restart-btn">Res</button>
                    <button class="delete-btn">Dele</button>
                </div>
                </div>
            <div className="Resources">
                <Speedometer />
                <Speedometer />
                <Speedometer />
                <Speedometer />

            </div>

        </div>
    );

}

export default ContainerAnalytics;