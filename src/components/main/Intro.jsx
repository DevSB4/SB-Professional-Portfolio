'use client';
import WordRotate from '../magicui/word-rotate';
import { ModeToggle } from '../ModeToggle';

const Intro = () => {
  return (
    <section className='flex gap-4' aria-labelledby='intro-heading'>
      <div className='flex flex-col gap-4'>
        {/*Visible heading for accessibility */}
        <h1 id='intro-heading' className='sr-only'>
          Welcome to my professional profile
        </h1>
        <div
          className='flex justify-between text-4xl tracking-tighter'
          aria-live='polite'
          aria-atomic='true'
          role='status' // role='status' for dynamic content announcement
        >
          <WordRotate
            className='text-4xl font-bold'
            tabIndex='0'
            words={[
              'Hello.',
              'こんにちは.',
              'Buongiorno.',
              'Buenos Días.',
              'Bonjour.',
              '안녕하세요.',
            ]}
            aria-label='Greeting in multiple languages' // Provide an aria-label to describe the rotating words
          />

          {/* Add focusable attributes and accessible event handling */}
          <ModeToggle
            aria-label='Toggle between light and dark mode'
            tabIndex={0}
            role='button'
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.target.click();
              }
            }}
            aria-pressed='false' // Aria-pressed to indicate the toggle state
          />
        </div>
        <p className='text-base text-gray-700 dark:text-white '>
          Results-driven professional with over 9+ years of experience in web
          development and business support for enterprise systems at large
          institutions. Proven expertise in optimizing data processes, fostering
          cross-functional collaboration, and enhancing operational
          efficiencies. Proficient in a wide range of web technologies and
          administrative tools, committed to delivering creative solutions and
          promoting team creativity.
        </p>
      </div>
    </section>
  );
};

export default Intro;
