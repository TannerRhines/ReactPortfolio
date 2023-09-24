import world from '../assets/images/world.png'; 


export default function About() {
    return (
        <div>
            <h1>about</h1>
            <p> Hi world, I'm Tanner. </p>

            <p> 🎓 I am currently a coding student through UC Berkeley Extension, gaining many career applicable skills in the world of tech. </p>


            <p> 💻 When it comes to technology, I have a high level of interest in cloud computing. I have been working with Amazon Web Services, and have aquired hands-on experience in deploying, managing, and maintaing highly available/ scalable systems. I am currently working on my next two AWS certifications. </p>
        
            <p> 🎨 In my personal life, I like to create art. I have exhibited work internationally in places like Dubai and South Korea. One of my works is currently on display at Seattle-Tacoma International Airport, and I am starting to show work at Comic Con in San Diego. I believe my attention to detail and creative thinking will help make me into a better coder. </p>
        
            <p> 📍 I currently live in my hometown of Fairbanks, Alaska</p>

            <div style={{textAlign: 'center', margin: '20px 0'}}>
                <img src={world} alt="Description" style={{maxWidth: '50px', maxHeight: '50px'}} />
            </div>
        </div>
    );
}
