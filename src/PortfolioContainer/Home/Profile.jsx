import Typical from 'react-typical'
const Profile = () =>
{
    return (
        <div className='profile-container'>
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <a href="#"><i className='fa fa-facebook-square'></i></a>
                        <a href="#"><i className='fa fa-google-plus-square'></i></a>
                        <a href="#"><i className='fa fa-instagram'></i></a>
                        <a href="#"><i className='fa fa-youtube-square'></i></a>
                        <a href="#"><i className='fa fa-twitter'></i></a>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'm <span className="highlighted-text">Durgesh</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Web Developer",
                                        1000,
                                        "Full Stack Developer",
                                        1000,
                                        "MERN Developer",
                                        1000
                                    ]}
                                />
                            </h1>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile
