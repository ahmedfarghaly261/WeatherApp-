import { useEffect, useState } from "react"

import { ImSpinner3} from "react-icons/im";
import { IoMdCloud } from "react-icons/io";
import { IoMdRainy } from "react-icons/io";
import { IoSnow,IoThunderstorm  } from "react-icons/io5";
import { BsCloudDrizzleFill } from "react-icons/bs";
import { BsCloudHaze2Fill } from "react-icons/bs";
import { TbTemperatureCelsius } from "react-icons/tb";
import { BsEye } from "react-icons/bs";
import { BsThermometerSun } from "react-icons/bs";
import { FaWater } from "react-icons/fa";
import { BsWind } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { ImSpinner8 } from "react-icons/im";
import { IoMdSunny } from "react-icons/io";

import axios from"axios"
import Aos from "aos";
import 'aos/dist/aos.css'


const API_KEY="8c1778f3c17d6565c84b08c4239691d0"

function Weather(){

    const[location, setLocation]=useState("Bucharest");
    const[data, setData]=useState(null);
    const[inputValue, setInputValue]=useState('');
    const[animate, setAnimate]=useState(false);

    const[loading,setLoading]=useState(false)
    const[errorMsg,setErrorMsg]=useState('')



    const handelInput=(e)=>{
        setInputValue(e.target.value)
    }

    const handelSubmit=(e)=>{
        // console.log(inputValue);

        if (inputValue !== ''){
            setLocation(inputValue)
            e.preventDefault();
        }
        const inp=document.querySelector('input')

        if(inp.value ===''){
            setAnimate(true)
            setTimeout(()=>{
                setAnimate(false)

            },500)

        }

        inp.value='';
    }

    // const[error, setError]=useState("");
    // const[loading, setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true)

        const API_URL=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`

        axios.get(API_URL).then((response)=>{
            setTimeout(()=>{
                setData(response.data)
                setLoading(false)
            },1000)
           
        }).catch(err=>{
            setLoading(false)
            setErrorMsg(err)
        })
    },[location])


    useEffect(()=>{
        const timer =setTimeout(()=>{
            setErrorMsg('')
        },2300)
        return()=>clearTimeout(timer)
    },[errorMsg])
    // console.log(data)

    useEffect(()=>{
        Aos.init({duration:1000});
    },[]);

    if(!data){
        return(
        
            <div>
                <div className=" w-full h-screen flex flex-col items-center justify-center">
                <ImSpinner8 
                className="text-6xl animate-spin" />

                </div>
            </div>
            
        )
    }
    
    console.log(data.weather[0].main)
    let icons;
    switch(data.weather[0].main){
        case'Clouds':
            icons=<IoMdCloud/>;
            break
        case'Haze':
            icons=<BsCloudHaze2Fill />;
            break
        case'Rain':
            icons=<IoMdRainy  />;
            break
        case'Clear':
            icons=<IoMdSunny className="text-yellow-400"  />;
            break
        case'Drizzle':
            icons=<BsCloudDrizzleFill />;
            break
        case'Snow':
            icons=<IoSnow  />;
            break
        case' Thunderstorm':
            icons=<IoThunderstorm  />;
            break
    }   

const date=new Date();

    return(
        <> 
        <div className="container mx-auto px-8  ">
            <div className=" w-full h-screen flex flex-col  items-center justify-center ">
            

                {errorMsg&&  <div role="alert" data-aos='fade-down' class="rounded border-s-4 border-red-500 bg-red-50 p-4">
                    <div class="flex items-center gap-2 text-red-800 w-[400px]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                        <path
                            fill-rule="evenodd"
                            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clip-rule="evenodd"
                        />
                        </svg>

                        <strong class="block font-medium"> {`${errorMsg.response.data.massage}`} </strong>
                    </div>
                </div>}

            <form className={ `${animate?'animate-shake':'animate-none'} border h-16 bg-black/30 w-full max-w-[400px]
            rounded-full backdrop-blur-[32px] mb-4 `} action=""> 

                <div className="h-full relative flex items-center justify-between p-2">

                    <input onChange={(e)=>handelInput(e)}
                    className="flex-1 bg-transparent outline-none placeholder:text-white text-[18px]
                    font-light text-white pl-6 h-full"
                    type="search" name="" id="" placeholder="search by name of city or country"
                    />
                    
                    
                    <button onClick={(e)=>handelSubmit(e)}
                    className="bg-blue-400 hover:bg-blue-500 w-[60px] h-[50px] rounded-full flex justify-center items-center" > 
                    <IoSearchSharp className="text-2xl"/>
                    </button>

                </div>


            </form>

                    {/* card */}
                <div className="bg-black/20 w-[400px] max-w[500px] min-h[580px] text-white
                    backdrop-blur-[30px] rounded-[10px] py-12 px-6">
                    {loading? (<div className="w-full h-full flex justify-center items-center" >
                        <ImSpinner3 className="text-5xl animate-spin" />

                        
                    </div> )
                    :
                    ( 
                        <div className="">
                        <div className="flex gap-3">
                            <div className="text-7xl">{icons}</div>
                            <div className="">
                                {/* country */}
                                <div className="text-xl font-semibold">
                                    {data.name},{data.sys.country} 
                                    <br />
                                </div>
                                 {/* date */}
                                {date.getUTCDate()}/{date.getUTCMonth()+1}/{date.getUTCFullYear()}
                            </div>
                        </div>

                        {/* body */}
                        <div className="my-10 ">
                            <div className="flex justify-center">
                                <div className="text-[110px] leading-none font-bold">
                                {parseInt(data.main.temp)}
                            </div>
                            <div className="text-4xl "><TbTemperatureCelsius/> </div>

                            </div>
                                <div className="text-center capitalize">
                            {data.weather[0].description}
                        </div>
                        </div>
                    
                        {/* bottom */}
                        <div className="max-w-[350px] mx-auto">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                <div className="text-xl">
                                    <BsEye/>
                                </div>
                                <div className="">Visibility{''} <span className="ml-2" >{data.visibility/1000} KM</span> </div>
                                
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="text-">
                                    <BsThermometerSun/>
                                </div>
                                <div className="text-sm">Feels Like{''} <span className=" ml-2  " >{parseInt(data.main.feels_like)} <span> C </span>  </span> </div>
                                
                            </div>
                        </div>
                    </div>
                
                        <div className="max-w-[350px] mx-auto mt-7">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                <div className="text-xl">
                                <FaWater />
                                </div>
                                <div className="">Humidity{''} <span className="ml-2" >{data.main.humidity} %</span> </div>
                                
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="text-">
                                    <BsWind/>
                                </div>
                                <div className="text-sm ml-2">Wind{''} <span className=" ml-2  " >{parseInt(data.wind.speed)} <span> m/s </span>  </span> </div>
                                
                            </div>
                        </div>
                    </div>
                    </div>
                    )
                    }

                </div>
                
            </div>
        </div>
        </>
    )
}

export default Weather

 // const fetchData=async()=>{
    //     setLoading(true)
    //     if(!city){
    //         setError("please enter valid city name");
    //         setLoading(false)
    //         return;
    //     } 
    //     try{
    //         const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    //         setWeather(response.data);
    //         console.log(setWeather)
    //     }catch(error){

    //     }