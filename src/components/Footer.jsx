import React from 'react';
import styles from '../Styles/Footer.module.css';
import { LuArrowUpRight,LuShieldHalf } from "react-icons/lu";
import { FiTool } from "react-icons/fi";
import { BsGraphUp,BsBox} from "react-icons/bs";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { GoNorthStar } from "react-icons/go";

const ManufacturingServices = () => {
  const services = [
    { title: 'Production and Assembly', description: 'Details on production processes, assembly, capacity, and product types.', icon: <GoNorthStar /> },
    { title: 'Custom Manufacturing', description: 'Custom product creation with design and customization options.', icon: <HiOutlineSquare3Stack3D /> },
    { title: 'Quality Control', description: 'Procedures and systems in place to ensure high product quality.', icon: <FiTool /> },
    { title: 'Technology and Innovation', description: 'Details on the latest manufacturing technologies and ongoing innovations.', icon: <LuShieldHalf /> },
    { title: 'Packaging and Logistics', description: 'Packaging and logistics for shipping to customers and distributors', icon: <BsBox /> },
    { title: 'Consulting Market Research', description: 'Services to help companies understand market needs and provide strategic advice.', icon: <BsGraphUp /> },
  ];

  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Efficient and Integrated<br/> Manufacturing Services</h1>
    <p className={styles.description}>Simplify operations with our efficient,quality-focused services.</p>
    <div className={styles.grid}>
      {services.map((service, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.icones}>

          <div className={styles.icon}>{service.icon}</div>
          <div className={styles.icon}><LuArrowUpRight/></div>
          </div>

          <div className={styles.flexContainer}>
            <h3 className={styles.heading}>{service.title}</h3>
            <p className={styles.text}>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default ManufacturingServices;
