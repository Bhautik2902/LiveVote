import Banner from '../components/Banner';
import Header from '../components/Header';

const LandingPage = () => {

    return (
        <div>
            <Header />
            <Banner 
                msg="Welcome"
                description="Manage customer accounts, handle transactions, and perform everyday banking operations with ease."
            />
        </div>  
    )
}

export default LandingPage;
