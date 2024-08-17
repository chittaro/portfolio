import git_logo from '../assets/icons/github_logo.png';
import linkedin_logo from '../assets/icons/linkedin_logo.png';

function Footer(){

    return (
        <>
        <div className="footer">
            <a href="https://www.linkedin.com/in/ichittaro/" target="_blank" rel="noopener noreferrer">
                <img src={ linkedin_logo } alt="GitHub logo"/>
            </a>
            <a href="https://github.com/chittaro" target="_blank" rel="noopener noreferrer">
                <img src={ git_logo } alt="GitHub logo"/>
            </a>
        </div>
        </>
    )

}

export default Footer