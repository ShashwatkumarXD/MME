import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		phoneNumber: "",
		email: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		// <div className='w-screen bg-cover bg-center' style={{ backgroundImage: `url("/bg3.png")` }}>
		// 	<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
		// 		<div className='w-96 p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
		// 			<h1 className='text-3xl font-semibold text-center text-gray-300'>
		// 				Sign Up <span className='text-blue-500'> ChatApp</span>
		// 			</h1>

		// 			<form onSubmit={handleSubmit}>
		// 				<div>
		// 					<label className='label p-2'>
		// 						<span className='text-base label-text'>Full Name</span>
		// 					</label>
		// 					<input
		// 						type='text'
		// 						placeholder='Enter name'
		// 						className='w-full input input-bordered h-10 bg-white'
		// 						value={inputs.fullName}
		// 						onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
		// 					/>
		// 				</div>

		// 				<div>
		// 					<label className='label p-2 '>
		// 						<span className='text-base label-text'>Username</span>
		// 					</label>
		// 					<input
		// 						type='text'
		// 						placeholder='Enter username'
		// 						className='w-full input input-bordered h-10 bg-white'
		// 						value={inputs.username}
		// 						onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
		// 					/>
		// 				</div>

		// 				<div>
		// 					<label className='label'>
		// 						<span className='text-base label-text'>Password</span>
		// 					</label>
		// 					<input
		// 						type='password'
		// 						placeholder='Enter Password'
		// 						className='w-full input input-bordered h-10 bg-white'
		// 						value={inputs.password}
		// 						onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
		// 					/>
		// 				</div>

		// 				<div>
		// 					<label className='label'>
		// 						<span className='text-base label-text'>Confirm Password</span>
		// 					</label>
		// 					<input
		// 						type='password'
		// 						placeholder='Confirm Password'
		// 						className='w-full input input-bordered h-10 bg-white'
		// 						value={inputs.confirmPassword}
		// 						onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
		// 					/>
		// 				</div>

		// 				<div>
		// 					<label className='label'>
		// 						<span className='text-base label-text'>Phone Number</span>
		// 					</label>
		// 					<input
		// 						type='text'
		// 						placeholder='Enter phone number'
		// 						className='w-full input input-bordered h-10 bg-white'
		// 						value={inputs.phoneNumber}
		// 						onChange={(e) => setInputs({ ...inputs, phoneNumber: e.target.value })}
		// 					/>
		// 				</div>

		// 				<div>
		// 					<label className='label'>
		// 						<span className='text-base label-text'>Email</span>
		// 					</label>
		// 					<input
		// 						type='email'
		// 						placeholder='Enter phone number'
		// 						className='w-full input input-bordered h-10 bg-white'
		// 						value={inputs.email}
		// 						onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
		// 					/>
		// 				</div>

		// 				<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

		// 				<Link
		// 					to={"/login"}
		// 					className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
		// 					href='#'
		// 				>
		// 					Already have an account?
		// 				</Link>

		// 				<div>
		// 					<button className='btn btn-block btn-sm mt-2 border bg-cyan-800' disabled={loading}>
		// 						{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
		// 					</button>
		// 				</div>
		// 			</form>
		// 		</div>
		// 	</div>
		// </div>
		<div>
			<div className="w-screen h-screen bg-cover bg-center flex flex-row justify-end px-16 py-10 " style={{ backgroundImage: `url("/bg3.png")` }}>
				<div className='w-[40%] py-6 px-8 rounded-lg shadow-md bg-cyan-700 flex flex-col items-center'>
					<div className="welcm flex flex-col items-center p-6">
						<div className='circle w-10 h-10 bg-orange-400 rounded-full'></div>
						<div>
							<a className="text-2xl font-bold text-white">Hi Come, join us! </a>
						</div>
					</div>

					<form onSubmit={handleSubmit} className="w-full">
						<div className="name flex flex-row gap-12 w-full m-0">
							<div className="w-[50%]">
								<label className='label p-2'>
									<span className='text-base label-text text-white font-semibold'>Full Name</span>
								</label>
								<input
									type='text'
									placeholder='Enter name'
									className='w-full input input-bordered h-10 bg-white'
									value={inputs.fullName}
									onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
								/>
							</div>
							<div className="w-[50%]">
								<label className='label p-2'>
									<span className='text-base label-text text-white font-semibold'>Username</span>
								</label>
								<input
									type='text'
									placeholder='Enter name '
									className='w-full input input-bordered h-10 bg-white'
									value={inputs.username}
									onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
								/>
							</div>
						</div>
						<div className="email">
							<div className="w-full">
								<label className='label p-2'>
									<span className='text-base label-text text-white font-semibold'>Email</span>
								</label>
								<input
									type='email'
									placeholder='Enter your email-id '
									className='w-full input input-bordered h-10 bg-white'
									value={inputs.email}
									onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
								/>
							</div>
						</div>
						<div className="number">
							<div className="w-full">
								<label className='label p-2'>
									<span className='text-base label-text text-white font-semibold'>Phone Number</span>
								</label>
								<input
									type='tel'
									placeholder='Enter your phone number '
									className='w-full input input-bordered h-10 bg-white'
									value={inputs.phoneNumber}
									onChange={(e) => setInputs({ ...inputs, phoneNumber: e.target.value })}
								/>
							</div>
						</div>
						<div className="flex flex-row gap-12 w-full">
							<div className="w-full">
								<label className='label p-2'>
									<span className='text-base label-text text-white font-semibold'>Password</span>
								</label>
								<input
									type='password'
									placeholder='Enter password'
									className='w-full input input-bordered h-10 bg-white'
									value={inputs.password}
									onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
								/>
							</div>
							<div className="w-full">
								<label className='label p-2'>
									<span className='text-base label-text text-white font-semibold'>Confirm Password</span>
								</label>
								<input
									type='password'
									placeholder='Enter Confirm Password'
									className='w-full input input-bordered h-10 bg-white '
									value={inputs.confirmPassword}
									onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
								/>
							</div>
						</div>
						<div className="flex flex-row justify-between items-center pt-3">
							<a className="text-white font-semibold">What gender do you  identify yourself with?</a>
							<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
						</div>
						<div className="flex flex-col justify-center items-center">
							<Link
								to={"/login"}
								className='text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block'
								href='#'>
								Already have an account?<span className="text-[#06284c] underline font-semibold">Sign in</span>
							</Link>

							<button className='btn btn-wide btn-sm mt-2 bg-[#fa8072] text-white' disabled={loading}>
								{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
							</button>
						</div>

					</form>

				</div>
			</div>
		</div>
	);
};
export default SignUp;