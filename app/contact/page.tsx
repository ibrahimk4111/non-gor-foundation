import ContactForm from "@/components/contactForm/ContactForm";

const Contact:React.FC = () => {
  return (
    <section className="my-8 lg:px-5">
      <div className=" container mx-auto ">
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-5 ">
          <ContactForm />
          <section>
            {/* map section */}
            <div className=" border-2 rounded-lg mb-5 p-5 ">
              <h1 className=" text-xl font-semibold mb-5">Where we are ?</h1>
              <div className=" h-72">
                <iframe
                  className=" rounded-lg w-full min-h-full h-52 "
                  title="Arifs (Bangladesh) Ltd"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5551060372236!2d90.41215227425799!3d23.72757648965419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8582cff629d%3A0xd646e704f2db23e3!2sArifs%20(BD)%20Ltd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1705415346424!5m2!1sen!2sbd"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* contact address section */}
            <div className=" border-2 rounded-lg mb-5 p-5 flex flex-col gap-3 ">
              <h1 className=" text-xl font-semibold">Contact Details</h1>
              <hr className=" h-1 " />
              <div>
                <h1 className=" text-xl font-semibold py-2">Address</h1>
                <p>As-Sunnah Foundation</p>
                <p>
                  Plot-60, Road-3, Block-C, (Opposite Siraj Convention Center)
                  Aftabnagar, Dhaka-1212
                </p>
              </div>

              <div>
                <h1 className=" text-xl font-semibold py-2">Phone</h1>
                <p>+88-09610-001089</p>
              </div>
              <div>
                <h1 className=" text-xl font-semibold py-2">Email</h1>
                <p>assunnahfoundationbd@gmail.com</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Contact;