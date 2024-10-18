import '../Styles/Homepage.css';
const TableData = (props) => {
    return (

        <tr>
            <td>{props.number}</td>
            <td>{props.Container} 1</td>
            <td>{props.Status}</td>
            <td>{props.IP}</td>
            <td>{props.resource}</td>
        </tr>
    
    )
}

const HomePage = () => {
    return (
        <div className="Home">
            <div className="HomeContent">
                <h1>Containers and VMs</h1>
                <div className="UsageStat">
                    <div className="CPU">
                        <h3>Memory Usage</h3>
                        <p>10%</p>
                    </div>
                    <div className="Memory">
                        <h3>Cpu Usage</h3>
                        <p>20%</p>
                    </div>
                </div>
                <div className="Info">
                    <input type="text" placeholder="Search..." className="Search" />
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                    <p>View Only Running conatainer</p>
                </div>
                <div className="Table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>IP</th>
                                <th>Stats</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                <TableData number="1" Container="Hello-World" Status="Active"IP="10.10.237.155" resource="10/50 GB" />
                                <TableData number="56" Container="Hello-World" Status="Active" IP="10.10.237.155" resource="10/50 GB" />
                                <TableData number="56dfdfgdfgdf5" Container="Hello-World" Status="NOn-Active" IP="10.10.237.155" resource="10/50 GB" />
                                <TableData number="5658" Container="Hello-World" Status="Active" IP="10.10.237.155" resource="10/50 GB" />

                            
                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    )
}

export default HomePage;