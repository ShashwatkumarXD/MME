import React, { useState } from 'react';
import {
  personal as initialPersonal,
  professional as initialProfessional,
  educational as initialEducational,
} from './sampleData';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function Profile() {
  return (
    <div className="grid grid-cols-[30%_70%]" id="root">
      <Body />
    </div>
  );
}

function Body() {
  const [personal, setPersonal] = useState(initialPersonal);
  const [professional, setProfessional] = useState(initialProfessional);
  const [educational, setEducational] = useState(initialEducational);

  function handleChange(e) {
    const id = e.target.id;
    const input = e.target.value;

    if (personal.some((item) => item.id === id)) {
      setPersonal((personal) =>
        personal.map((item) => (item.id === id ? { ...item, value: input } : item))
      );
    } else if (professional.some((item) => item.id === id)) {
      setProfessional((professional) =>
        professional.map((item) => (item.id === id ? { ...item, value: input } : item))
      );
    } else if (educational.some((item) => item.id === id)) {
      setEducational((educational) =>
        educational.map((item) => (item.id === id ? { ...item, value: input } : item))
      );
    }
  }

  function handleSave(e) {
    const id = e.target.id;
    if (id === 'Personal-save') {
      sessionStorage.setItem('personal', JSON.stringify(personal));
    }
  }

  return (
    <>
      <div className="input-section p-4" style={{ gridColumn: "1 / 2" }}>
        <UserInputSection title="Personal Details" section={personal} onChange={handleChange} onClick={handleSave} />
        <UserInputSection title="Educational Qualification" section={educational} onChange={handleChange} onClick={handleSave} />
        <UserInputSection title="Professional Experience" section={professional} onChange={handleChange} onClick={handleSave} />
      </div>
      <div className="resume-section bg-white p-4 mx-2 rounded-lg" style={{ gridColumn: "2 / 3" }}>
        <Resume personal={personal} educational={educational} professional={professional} />
      </div>
    </>
  );
}

function UserInputSection({ title, section, onChange, onClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const id = title.split(' ')[0];

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <section className="user-input-sect bg-white rounded-xl my-4 p-4">
      <div className="header-section flex justify-between">
        <h2 className="text-2xl">{title}</h2>
        <button className="bg-transparent border-none outline-none" onClick={toggleOpen}>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>
      {isOpen && (
        <form>
          {section.map((item) => (
            <div key={item.id} className="input-field flex flex-col mt-2 text-xl">
              <label htmlFor={item.id}>{item.label}</label>
              <input type="text" id={item.id} className="rounded-lg p-2" onChange={onChange} />
            </div>
          ))}
          <div className="button-container flex flex-row gap-6 mt-4">
            <button className="w-24 rounded-lg" type="button" id={`${id}-save`} onClick={onClick}>
              Save
            </button>
            <button className="w-24 rounded-lg" type="button" id={`${id}-edit`} onClick={onClick}>
              Reset
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

function Resume({ personal, educational, professional }) {
  return (
    <div className="resume-section bg-white p-4 text-xl">
      <div className="personal-section grid grid-cols-3 bg-teal-900 text-white p-4 text-2xl h-36">
        <PersonalSection personal={personal} />
      </div>
      <div className="educational-section grid grid-cols-[40%_60%] h-52 mt-4">
        <RemainingSection content={educational} title="Education" />
      </div>
      <div className="professional-section grid grid-cols-[40%_60%] h-52 mt-4">
        <RemainingSection content={professional} title="Experience" />
      </div>
    </div>
  );
}

function PersonalSection({ personal }) {
  return <>{personal.map((item) => renderPersonal(item))}</>;
}

function renderPersonal(item) {
  return item.label === 'Full Name' ? <h1 className="col-span-3 justify-self-center" key={item.id}>{item.value}</h1> : <p className="justify-self-center" key={item.id}>{item.value}</p>;
}

function RemainingSection({ content, title }) {
  return (
    <div>
      <h2 className="text-center bg-gray-200 text-teal-900 col-span-2">{title}</h2>
      {content.map((item) => (
        <p key={item.id} className={`${item.id}`}>
          {item.value}
        </p>
      ))}
    </div>
  );
}

export default Profile;
