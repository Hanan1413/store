import React from 'react'

const About = () => {
  return (
    <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center mt-11' >
      <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
        We love
      </h1>
      <div className="stats bg-primary shadow">
        <div className="stat">
          <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
            comfy
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod ducimus asperiores, labore tempora quo deserunt cumque cupiditate molestiae nam corporis accusamus iusto, quis veniam, laboriosam at assumenda atque? Quam!
      </p>

    </div>
  )
}

export default About
