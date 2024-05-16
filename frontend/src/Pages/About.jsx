import image1 from '.././assets/images/mylogo.jpg';
import image2 from '.././assets/images/abhilogo2.jpeg';
const About = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Greetings! You've reached my About Page</h2>
      <div style={styles.imageContainer}>
        <img src={image1} alt="Image 1" style={styles.image} />
        <img src={image2} alt="Image 2" style={styles.image} />
      </div>
      <div style={styles.name}>
        <h1 style={styles.mynames}>Chhotelal Patel</h1>
        <h1 style={styles.mynames}>Abhishek Goyal</h1>
      </div>

      <div style={styles.aboutdescription}>
        <div style={styles.Chhotelal}>
          <p >At tark and travel, we believe in making travel experiences seamless, memorable, and hassle-free. Our platform is designed to cater to all your travel needs, whether you're planning a weekend getaway, a business trip, or the adventure of a lifetime.With our user-friendly interface and comprehensive search options, finding the perfect.</p>
        </div>
        <div style={styles.Abhishek}> 
          <p>We're your trusted travel companion, offering personalized recommendations, insider tips, and real-time updates to ensure your journey is as smooth as possible. From booking flights and hotels to discovering hidden gems and local attractions, we're here to turn your travel dreams into reality.Whether you're dreaming of a luxurious resort.</p>
        </div>
      </div>

    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: '#F5F5F5',
  },

  heading: {
    fontWeight: '600',
  },

  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    marginTop: '6%',

    //niche apne
    spaceBetween: '90px'
    //padding:"80px"

  },
  image: {
    width: '200px',
    height: '200px',
    margin: '0 100px',
    objectFit: 'cover',
    borderRadius: '50%',

  },

  name: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    gap: '270px',

    //margin: '0 100px',
  },
  mynames: {
    fontSize: '25px'
  },

  aboutdescription:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap:'5%',
    wordSpacing: '0%',
    letterSpacing: '0%'
  },

  Chhotelal:{
    width:'100%',
    marginLeft:'15%'
  },
  Abhishek: {
    width: '100%',
    marginRight: '15%'
}

};

export default About;

