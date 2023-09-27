import React from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';

function Home() {
	return (
		<div className='text-white  m-auto h-full flex justify-center items-center flex-col gap-5 bg-slate-400 text-2xl'>
			<div
				id='hero'
				className='flex justify-center items-center flex-col gap-5 h-96 bg-slate-950 m-0 p-0 w-full'
			>
				<h1 className='text-center text-8xl font-bold'>Helix Web Utility</h1>
				<p>Empowering server owners and developers to build their dream.</p>
				<p>
					Helix Web Utility is currently in development and is not ready for
					use.
				</p>
			</div>
			<div id='features'>
				<Card bgColor='bg-slate-100'>
					<h1>Item Generator</h1>
					<p className='text-base'>
						Easily create items in seconds, fully customizable to fit your needs
					</p>
					<Button>Begin</Button>
				</Card>
				<Card bgColor='bg-slate-100'>
					<h1>Plugin Setup</h1>
					<p className='text-base'>
						Creating three whole files and a folder is awfully annoying after
						the first seventeen times.
					</p>
          <p className='text-base'>
            With this simple tool you only
						need to do it once, and we'll save the preset for you!
					</p>
					<Button>Begin</Button>
				</Card>
				<Card bgColor='bg-slate-100'>
					<h1>ixCraft Recipe Generator</h1>
					<p className='text-base'>
						Tired of the endless cycle of editing files for minor changes?
						Another small typo destroying your schema?.
					</p>
					<p className='text-base'>
						With our user-friendly interface, all you need to do is upload your
						'items' folder. We'll take it from there, creating a streamlined
						menu where you can effortlessly add or remove ingredients, tools,
						and results.
					</p>
					<Button>Begin</Button>
				</Card>
			</div>
		</div>
	);
}

export default Home;
