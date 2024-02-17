// import ServiceItem from "./ServiceItem";
import PageHeaderContent from "../../partials/pageHeaderContent";
import "./Service.css";
import { Animate } from "react-simple-animate";
import React from 'react';
import ServiceItem from './ServiceItem';

function Service() {
  const servicesData = [
    {
      iconClass: 'bx bxl-html5',
      title: 'Responsive Web Design',
      description: 'Create stunning, mobile-friendly websites that adapt seamlessly to various screen sizes and devices, ensuring an optimal user experience for all visitors.',
    },
    {
      iconClass: 'bx bxl-javascript',
      title: 'JavaScript Development',
      description: 'Develop dynamic and interactive web applications using JavaScript, including modern frameworks like React.js, Vue.js, or Angular, to build scalable and efficient frontend solutions.',
    },
    {
      iconClass: 'bx bx-code-alt',
      title: 'Optimized Codebase',
      description: 'Write clean, well-structured code following best practices and design patterns to ensure maintainability, scalability, and performance optimization of frontend projects.',
    },
    {
      iconClass: 'bx bxl-nodejs',
      title: 'Backend Development',
      description: 'Build robust server-side applications and APIs using Laravel, leveraging databases like Mysql or SQL to handle data management and persistence.',
    },
    {
      iconClass: 'bx bxl-php',
      title: 'PHP Development',
      description: 'Utilize PHP frameworks like Laravel to develop backend systems, including RESTful APIs, authentication mechanisms, and data processing functionalities.',
    },
    {
      iconClass: 'bx bx-server',
      title: 'Database Management',
      description: 'Design and implement efficient database architectures, optimize database queries, and ensure data integrity and security for scalable and reliable applications.',
    },
    // Add more services related to full-stack development as needed
  ];
  
 
  return (
    <>
    <section id="services" className="services">
    <Animate
                  play
                  duration={1}
                  delay={0.3}
                  start={{
                    transform: "translateY(-200px)",
                  }}
                  end={{
                    transform: "translateY(0px)",
                  }}
                >
    <div className="container">
      <PageHeaderContent
            headerTitle = 'Services'
            headerText ="My Services"
            />
      <div className="row">
      {servicesData.map((service, index) => (
            <ServiceItem
              key={index}
              iconClass={service.iconClass}
              title={service.title}
              description={service.description}
            />
          ))}

      </div>

    </div>
    </Animate>
  </section>
    </>
    
  );
}

export default Service;
