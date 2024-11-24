import React from 'react'

const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender==="male" ? "selected" : ""}`}>
					<input type='checkbox' className='checkbox  bg-white rounded-full border-slate-900' 
					checked={selectedGender === 'male'}
					onChange={() => onCheckboxChange("male")}
					/>
					<span className='label-text text-white font-semibold'>Male</span>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender==="female" ? "selected" : ""}`}>
					<input type='checkbox' className='checkbox bg-white rounded-full border-slate-900' 
					checked={selectedGender === 'female'}
					onChange={() => onCheckboxChange("female")}

					/>
					<span className='label-text text-white font-semibold'>Female</span>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;