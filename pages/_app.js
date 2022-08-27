import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <ThirdwebProvider
            desiredChainId={ChainId.Rinkeby}
            chainRpc={{
                [ChainId.Rinkeby]: 'https://rinkeby.infura.io/v3/d8b05f3741db48dc97fd8d66f58646b4',
            }}
        >
            <Component {...pageProps} />
        </ThirdwebProvider>
    )
}

export default MyApp

