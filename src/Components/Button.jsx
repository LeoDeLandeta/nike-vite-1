

export const Button = ({label,iconUrl}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white transition-all duration-700
     hover:scale-125 hover:underline">
        {label}
        <img src={iconUrl} alt="" 
        className="ml-2 rounded-full w-5 h-5"/>
    </button>
  )
}

 
