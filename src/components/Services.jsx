import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section id="services" className="py-20 bg-light dark:bg-[#03001C]">
      <h2 className="text-6xl text-center text-black dark:text-white font-bold">
        Services
        <hr className="w-24 h-1 mx-auto my-6 bg-name rounded border-0"></hr>
      </h2>
      <div className="container mx-auto px-5">
        <div className="flex flex-wrap">
          <div data-aos="fade-up" className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="service-box bg-white dark:bg-[#111928] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-white">Website Development</h3>
              <p className="text-gray-700 dark:text-white">
                Custom website development using HTML, CSS, JavaScript, and React.js.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="service-box bg-white dark:bg-[#111928] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-white">Web Application Development</h3>
              <p className="text-gray-700 dark:text-white">
                Building dynamic and interactive web applications with complex functionalities using modern frameworks.
              </p>
            </div>
          </div>
          {/* Add more service boxes here */}
        </div>
      </div>
    </section>
  );
}

export default Services;
