import React from 'react'

const Music = () => {
  return (
    <div name='Music' className="px-4 sm:px-12  w-full h-full text-cream bg-dark">
      
      {/* Title */}
      <div className="max-w-[1000px] mx-auto pt-24 pb-24 flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-cream border-accent4">Music</p>
          <p className="text-green py-6">Portfolio of music projects.</p>
        </div>

        

        {/* GRID CONTAINER */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  justify-items-center ">
            <iframe className="px-10 video rounded-xl" src="https://www.youtube.com/embed/mrc1MrxpLns"title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p className="bg-gray-900  rounded-lg py-2 text-sm w-full h-full lg:text-base font-light flex items-start px-4">This heuristic inquiry draws on information shared by co-researchers and utilises compositional practices to create interactive and adaptive compositions for neurofeedback using Ableton live.  Musical neurofeedback is a way to enhance brain activity. You can learn to control your state of mind, which affects the brainwaves and causes a change in the music. Resulting in synergy, to induce an intended state of arousal.</p>

            <iframe className="px-10 video rounded-xl" src="https://www.youtube.com/embed/Awr8spPCHN0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p className="bg-gray-900  rounded-lg py-2 text-sm w-full h-full lg:text-base font-light flex items-start px-4">A video documenting the processes of sound design undertaken to realise the audio and soundtrack for a first-person exploration video game. This was created as part of my Masters Degree in Electronic Music Composition at the University of West London.
</p>

            <iframe className="px-10 video rounded-xl" src="https://www.youtube.com/embed/We7WLAKCuTE"title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p className="bg-gray-900  rounded-lg py-2 text-sm w-full h-full lg:text-base font-light flex items-start px-4">An original composition inspired by the sounds of the self checkout machine.  This track was created a while back but this version has been updated and doesn't include the "Cashback" sample. </p>

            <iframe className="px-10 video rounded-xl" src="https://www.youtube.com/embed/JwPwgKhRG1k?start=16" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p className="bg-gray-900  rounded-lg py-2 text-sm w-full h-full lg:text-base font-light flex items-start px-4">An arrangement of 'Travels' by Pat Metheny performed on a 5 string bass guitar. This is an example of how I like to enjoy my downtime. I often turn to music when I need to decompress or have a brain break. 
</p>
            
          </div> 



      </div>
    </div>
  )
}

export default Music