import Link from 'next/link';

// About component
const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center   p-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Movie Quaser</h1>
        <p className="text-lg mb-8">
          Embark on a cinematic journey like never before with Movie Quaser. We are more than just a movie platform; we are your gateway to a world of captivating stories and unforgettable experiences.
        </p>
        <p className="text-lg mb-8">
          At Movie Quaser, our mission is to provide you with an exceptional movie-watching experience. Our carefully curated selection spans various genres and eras, ensuring there is something for every movie enthusiast.
        </p>
        <p className="text-lg mb-8">
          Whether you are a dedicated cinephile, seeking the charm of classics, or an avid explorer of the latest releases, Movie Quaser is your go-to source for quality entertainment.
        </p>
        <p className="text-lg mb-8">
          Join us in celebrating the magic of cinema. Immerse yourself in the world of storytelling, emotion, and visual brilliance. Your next unforgettable movie experience is just a click away!
        </p>
        <Link href="/" passHref>
          <p className="bg-white text-gray-900 py-2 px-4 rounded-full inline-block transition duration-300 hover:bg-gray-300">
            Explore Our Collection
          </p>
        </Link>
      </div>
    </div>
  );
};

export default About;
