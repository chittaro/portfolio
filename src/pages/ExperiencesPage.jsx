import ithaka_img from '../assets/images/ithaka.jpg';
import ExperienceCard from '../components/ExperienceCard.jsx'
import details from '../constants/experienceDetails.js'

function ExperiencesPage() {

    return (
        <>  
            <div className="main-container">
                {details.map((item) => (
                    <ExperienceCard item={item} />
                ))}
                
            </div>
        </>
    )

}

export default ExperiencesPage;