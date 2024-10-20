import '../Styles/ContainerViewPage.css';
import Header from '../Components/Header';
import Speedometer from '../Components/Speedometer';

const ContainerAnalytics = () => {
    return (

        <div className="Page">
            <Header />
            <div className="Analytics">
                {/* <p>{NodeName} / {ContainerName}</p> */}
                <p>NodeName / ContainerName</p>
                <h1>Container Analytics</h1>
                <div className='Module'>
                    <h1>Node name</h1>
                    <h1>Node ID</h1>
                    <h1>Status</h1>
                    <h1>Excited</h1>
                    <div className="Button">
                        <button class="start-btn">Start</button>
                        <button class="stop-btn">Stop</button>
                        <button class="restart-btn">Restart</button>
                        <button class="delete-btn">Delete</button>

                    </div>
                </div>
            </div>
            <div className="Resouces">
                <Speedometer/>

        </div>
        </div>
    );
}

export default ContainerAnalytics;