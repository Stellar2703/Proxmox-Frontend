
import '../Styles/Login.css'
const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    }
    return (
        <div className="main">
            <form onSubmit={handleSubmit}>
            <div className="container">
            <h2>Proxmox VE Analytics</h2>
                <div className="credentials">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                </div>
                <div className="submitbutton">
                    <input type="submit" value="Login" onSubmit={handleSubmit} />
                </div>
            </div>
            </form>
        </div>
    );
}

export default Login;