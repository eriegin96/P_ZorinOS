import { format } from 'date-fns';
import React, { useState, useContext, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { HiArrowLeft } from 'react-icons/hi';
import { ImSpinner2 } from 'react-icons/im';
import logo from '../assets/images/logo.svg';
import { AppContext } from '../context/AppProvider';
import Button from './common/Button';
import Input from './common/Input';
import StatusBar from './StatusBar';

export default function LockScreen() {
	const { setIsLocked, currentTime } = useContext(AppContext);
	const [isLogging, setIsLogging] = useState(false);
	const [isValidated, setIsValidated] = useState(null);
	const [isValidating, setIsValidating] = useState(false);

	useEffect(() => {
		const handleKeyDown = (e) => {
			const keyList = [
				'Alt',
				'Control',
				'Shift',
				'Fn',
				'Super',
				'CapsLock',
				'NumLock',
				'ScrollLock',
				'Meta',
				'OS',
			];
			if (keyList.includes(e.key)) return;
			setIsLogging(true);
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	useEffect(() => {
		if (isValidated) {
			setIsLocked(false);
		} else {
			setTimeout(() => {
				setIsValidated(null);
			}, 3000);
		}
	}, [isValidated]);

	const validate = (password) => {
		setIsValidating(true);
		setTimeout(() => {
			setIsValidating(false);
			password === '123456' ? setIsValidated(true) : setIsValidated(false);
		}, 1500);
	};

	return (
		<div
			id='lock'
			className='w-full relative h-screen backdrop-blur-xl bg-transparent-b-50 text-white'
			onClick={() => setIsLogging(true)}
		>
			<div className='absolute right-0 top-0'>
				<StatusBar className='mt-1' />
			</div>

			<div className='w-[300px] h-full relative mx-auto text-center flex-col font-light Center'>
				{isLogging ? (
					<>
						<div className='w-20 h-20 Center bg-transparent-w-10 rounded-full'>
							<FaUser className='w-10 h-10' />
						</div>
						<span className='my-3 text-lg'>User</span>
						<div className='w-full h-8 relative'>
							<Button
								className='absolute -left-4 w-8 h-8 bg-transparent-w-10 hover:bg-transparent-w-30 rounded-full'
								onClick={(e) => {
									e.stopPropagation();
									setIsLogging(false);
								}}
							>
								<HiArrowLeft />
							</Button>
							<Input
								type='password'
								placeholder='Password'
								autoFocus
								className='relative h-full py-1 px-2 text-black'
								onKeyDown={(e) => {
									if (e.key === 'Enter') validate(e.target.value);
								}}
							/>
							{isValidating && (
								<ImSpinner2 className='absolute inline-block top-1 -right-4 w-6 h-6 animate-spin' />
							)}
							{isValidated === false && (
								<div className='mt-10 text-sm'>
									<p>Sorry, password authentication didn't work.</p>
									<p>Please try again.</p>
								</div>
							)}
						</div>
					</>
				) : (
					<>
						<div className='text-6xl'>{format(currentTime, 'HH:mm')}</div>
						<div className='mt-6 mb-10 text-xl'>{format(Date.now(), 'EEEE, d MMM yyyy')}</div>
						<div className='text-sm text-gray-400'>Click or press a key to unlock</div>
					</>
				)}

				<img src={logo} alt='logo' className='absolute bottom-12' />
			</div>
		</div>
	);
}
