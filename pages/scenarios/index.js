import Link from 'next/link';
import Head from 'next/head';

import { useState } from 'react';

import Layout from '../../components/layout';
import SearchInput from '../../components/searchbar';

import { MdLocalHospital, MdWork, MdSchool, MdEvent, MdAccessibility, MdRecordVoiceOver } from 'react-icons/md';

const scenarios = [
  { title: 'Mental Health', icon: MdLocalHospital },
  { title: 'Workplace', icon: MdWork },
  { title: 'School', icon: MdSchool },
  { title: 'Social Event', icon: MdEvent },
  { title: 'Special Care', icon: MdAccessibility },
  { title: 'Public Speaking', icon: MdRecordVoiceOver },
];

const Scenario = props => {
  const [filteredScenarios, setFilteredScenarios] = useState(scenarios);

  const handleSearchChange = (query) => {
    if (!query) {
      setFilteredScenarios(scenarios);
    } else {
      setFilteredScenarios(
        scenarios.filter(scenario => 
          scenario.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  return (
    <Layout>
      <Head>
        <title>Scenarios</title>
      </Head>
      <div className="flex w-full h-full flex-col mb-6 space-y-20">
        <h1 className="text-3xl font-bold">Select a Scenario</h1>
        <div className="self-end w-auto">
          <SearchInput onSearchChange={handleSearchChange} />
        </div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredScenarios.map((scenario, index) => {
          const IconComponent = scenario.icon;
          return (
            <li key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <Link href={`/scenarios/${index + 1}`}>
                <div className="flex flex-col items-center text-center text-gray-800 hover:text-gray-600">
                  <IconComponent className="text-5xl" />
                  <span className="mt-4 text-lg font-medium">{scenario.title}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="mt-8">
        <Link href="/dashboard">
          <h1 className="text-blue-600 hover:text-blue-800">Back to home</h1>
        </Link>
      </div>
    </Layout>
  );
};

export default Scenario;