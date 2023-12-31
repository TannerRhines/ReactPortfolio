import world from '../assets/images/world.png'; 

import avi from '../assets/images/tannerAvi.png'; 


export default function About() {
    return (
        <div className='aboutMe'>
            <h1>about</h1>
            <div style={{textAlign: 'center', margin: '20px 0'}}>
            <img src={ avi } alt="pixelWorld" style={{maxWidth: '200px', maxHeight: '200px'}}></img>
            </div>
            <p> Hi world, my name is Tanner. </p>

            <p> 🎓 I am currently a coding student through UC Berkeley Extension, gaining many career applicable skills in the tech industry. </p>


            <p> 💻 When it comes to technology, I have a high level of interest in cloud computing. I have been working with Amazon Web Services, and have aquired lots of hands-on experience in deploying, managing, and maintaing highly available/ scalable systems. I am currently working on my next two AWS certifications. </p>
        
            <p> 🎨 In my personal life, I like to create art. I have exhibited work internationally in places like Dubai and South Korea. One of my works is currently on display at Seattle-Tacoma International Airport, and I am starting to show work at Comic Con in San Diego. I believe my attention to detail and creative thinking will help make me into a better coder as I move forward. </p>

        
            <p> 📍 I currently live in my hometown of Fairbanks, Alaska</p>

            <div style={{textAlign: 'center', margin: '20px 0'}}>
                <img src={world} alt="pixelWorld" style={{maxWidth: '50px', maxHeight: '50px'}} />
            </div>
        </div>
    );
}
