
export const SchoolAddressMap = () => {
  return (
    <section id="school-address" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Our School Location
      </h2>

      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d15850.53297125444!2d3.1897685!3d6.692267!3m2!1i1024!2i768!4f13.1!2m1!1spaes%20comprehensive%20academy!5e0!3m2!1sen!2sng!4v1736729534362!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <h3 className="text-center mt-4 text-xl">
        Paes Comprehensive Academy
      </h3>
    </section>
  );
};
