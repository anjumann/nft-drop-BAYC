const styles = {
    wrapper: 'flex min-h-screen items-center justify-center',
    span: "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-gray-900 font-sans text-xl font-semibold rounded-md group-hover:bg-opacity-0",
    button: 'relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 ',
}
const Login = ({ login }) => {
    return (
        <div className={styles.wrapper} >
            <button className={styles.button} onClick={login} >

                <span className={styles.span}>
                    Connect with MetaMask
                </span>
            </button>
        </div>

    )
}

export default Login