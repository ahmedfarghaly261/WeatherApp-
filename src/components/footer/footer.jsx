
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <>
      
            <footer class="w-full bg-black/20"> 
             <br />
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="max-w-3xl mx-auto">
                        
                        <div class="flex space-x-10 justify-center items-center mb-10">
                           
                            <a href="https://www.linkedin.com/in/ahmed-farghaly-b65b09236/" class="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 ">
                            <FaLinkedin className="text-2xl"/>
                            </a>
                            <a href="" class="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 ">
                                <svg class="w-[0.938rem] h-[1.625rem]" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.7926 14.4697L14.5174 9.86889H10.0528V6.87836C10.0528 5.62033 10.6761 4.39105 12.6692 4.39105H14.7275V0.473179C13.5289 0.282204 12.3177 0.178886 11.1037 0.164062C7.42917 0.164062 5.0302 2.37101 5.0302 6.36077V9.86889H0.957031V14.4697H5.0302V25.5979H10.0528V14.4697H13.7926Z" fill="currentColor"></path>
                                </svg>
                            </a>
                            <a href="https://github.com/ahmedfarghaly261" class="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 ">
                            <FaGithub className="text-2xl" />
                            </a>
                        </div>
                        <span class="text-lg text-gray-500 text-center block"><a href="https://github.com/ahmedfarghaly261">@ahmed farghaly </a> 2025, All rights reserved.</span>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer