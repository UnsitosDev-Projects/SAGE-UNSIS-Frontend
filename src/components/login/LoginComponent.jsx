import CustomIconSage from "../icon/custom/CustomIconSage/CustomIconSage";
const Login=()=>{
    return(
        <main className="main-container">
            <header>
                <CustomIconSage/>
            </header>
            <section className="section-">
                <CustomIconSage/>
                <form className="form-container" action="POST">
                    <label htmlFor="">Usuario:</label><input type="text" />
                    <label htmlFor="">Contraseña:</label><input type="password" />
                    <input type="submit">Iniciar sesión</input>
                </form>
            </section>            
        </main>
    );
}
export default Login;