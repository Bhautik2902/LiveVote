import Banner from '../components/Banner';

const HomePage = ({ activeTab }) => {

    return (
        <div>
            <h2>{activeTab}</h2>

            <Banner 
                msg="Welcome"
                description="Manage customer accounts, handle transactions, and perform everyday banking operations with ease."
            />
        </div>  
    )
}

export default HomePage;
