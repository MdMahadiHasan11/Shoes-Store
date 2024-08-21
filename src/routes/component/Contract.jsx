import { motion } from "framer-motion"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

const Contract = () => {


    const container = (time) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: time,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'reverse'
            }

        },
    })
    // 


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_8upu406', 'template_njyg82k', form.current, {
                publicKey: '9i9USRWnY4T2HMYdU',
            })
            .then(
                () => {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Email Send",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    console.log('SUCCESS!');
                    form.current.reset(); // Reset the form

                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div id="contract" className='border-b pt-5 border-neutral-900 pb-14'>


            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="my-10 text-center text-4xl">
                    Contract Me
                </h2>
            </motion.div>
            {/* body */}


            <div className="md:flex  justify-center items-center">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className=" flex flex-wrap items-center justify-center gap-4">

                    {/* one technology */}
                    <motion.div
                        variants={container(2)}
                        initial='initial'
                        animate='animate'
                        style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                        className="rounded-2xl   p-4 mb-10"
                    >

                        <div>
                            <p className="text-center my-4">Address Info</p>
                            <div>
                                <p className="flex items-center gap-3"><span><FaLocationDot /></span>Pabna, Rajshahi, Bangladesh</p>
                                <p className="flex items-center gap-3"><span><FaPhoneAlt /></span>+8801774-938275</p>
                                <p className="flex items-center gap-3"><span><MdEmail /></span>mdmahadihasancse@gmail.com</p>
                            </div>
                            <div className="flex justify-center items-center gap-3 my-4">
                                <a href="https://www.facebook.com/HasanGulabo/" target="_blank" rel="noopener noreferrer" className=" text-3xl">
                                    <FaFacebook />
                                </a>
                                <a href="www.linkedin.com/in/mdmahadi-hasan-bd75" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-3xl">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/MdMahadiHasan11" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-3xl">
                                    <FaGithub />
                                </a>
                                {/* <a href="http://" target="_blank" rel="noopener noreferrer" className="text-pink-700 text-3xl">
                                    <FaInstagramSquare />
                                </a> */}
                            </div>

                        </div>
                    </motion.div>

                </motion.div>


                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="md:w-2/3  flex flex-wrap items-center justify-center gap-4">

                    {/* one technology */}
                    <motion.div
                        variants={container(1)}
                        initial='initial'
                        animate='animate'
                        style={{ boxShadow: '4px 4px 6px rgba(0, 255, 255, 0.7)' }}
                        className="rounded-2xl mx-auto md:w-4/5   p-4 "
                    >

                        <form className=" " ref={form} onSubmit={sendEmail}>
                            <p className="text-center text-xl font-semibold">Drop a message</p>

                            <div className="">
                                <div className="">
                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text text-slate-50 ">Name</span>
                                        </div>
                                        <input required type="text" name="user_name" placeholder="name here" className="input text-black font-medium  input-bordered " />
                                    </label>

                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text text-slate-50">Email</span>
                                        </div>
                                        <input required type="email" name="user_email" placeholder="email here" className="input text-black font-medium input-bordered w-full " />
                                    </label>

                                    <div className="">
                                        <label className="form-control w-full ">
                                            <div className="label">
                                                <span className="label-text text-slate-50">Message</span>
                                            </div>
                                            <textarea required name="message" className="input text-black font-medium input-bordered w-full  h-32  " placeholder="message" />
                                        </label>

                                    </div>
                                </div>

                                <div className="flex justify-center items-center">
                                    <input className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-800 transition-colors duration-300 ease-in-out mt-5 text-center btn-wide " type="submit" value="Send Message" />
                                </div>
                            </div>

                        </form>
                    </motion.div>

                </motion.div>
            </div>





        </div>
    );
};
export default Contract;