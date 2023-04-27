import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex
    justify-center items-center flex-col'>
      <nav className='flex justify-between
      items-center w-full mb-10 pt-3'>
       <img src={logo} alt='sumz_logo' 
        className='w-28 object-contain' />
       <button 
         type='button'
         onClick={() => window.open('https:Github.com/mwangea')}
         className='black_btn'>
        Github
       </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      One way to make reading easier is by using Sum, 
      an open-source article summarizer. Sum can turn long articles into shorter and clearer summaries, 
      which can help save time and make the content easier to understand. 
      This tool is helpful for people who want to quickly grasp the main points of 
      an article without having to read through the entire thing.
      </h2>
    </header>
  )
}

export default Hero