import { MdLocalHospital, MdWork, MdSchool, MdEvent, MdAccessibility, MdRecordVoiceOver , MdAccountCircle} from 'react-icons/md';
import Image from 'next/image';


export const SiteTitle = 'Genvoice';

const DashboardData = {
  name: "Sally Rooney",
  description: "Sally is resistant to come back to office, although there is a clear company policy. Her reason is that a flexible and non-distracting environment can improve her productivity.",
  hours: 20,
  score: 48,
  rank: 36,
  chatbot: "You have shown active listening skills and the ability to listen to the other party patiently.",
  postAnalysis: "You started with a caring greeting for the other person, which shows empathy. However, you...",
  date: "FRIDAY 19 JUL 2024",
  timestamp: "12:24 PM",
  weather: "Sunny"
};

export default DashboardData;

export const mockChats = [
    {
      id: 1,
      title: 'Chat 1',
      messages: [
        { sender: 'User', text: 'Hello!', timestamp: '2024-07-01 10:00' },
        { sender: 'Bot', text: 'Hi there!', timestamp: '2024-07-01 10:01' },
      ],
    },
    {
      id: 2,
      title: 'Chat 2',
      messages: [
        { sender: 'User', text: 'How are you?', timestamp: '2024-07-02 11:00' },
        { sender: 'Bot', text: 'I am good, thank you!', timestamp: '2024-07-02 11:01' },
      ],
    },
  ];

  export const categories = [
    {
      id: 1,
      name: 'Workplace',
      image: '/workplace.png',
      scenarios: [
        { index: 1, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 2, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 3, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 4, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 5, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 6, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 7, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 8, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
      ],
    },
    {
      id: 2,
      name: 'School',
      image: '/school.png',
      scenarios: [
        { index: 9, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 10, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 11, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 12, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 13, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 14, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 15, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 16, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
      ],
    },
    {
      id: 3,
      name: 'Social Event',
      image: '/social.png',
      scenarios: [
        { index: 17, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 18, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 19, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 20, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 21, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 22, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 23, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 24, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
      ],
    },
    {
      id: 4,
      name: 'Public Speaking',
      image: '/speaking.png',
      scenarios: [
        { index: 25, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 26, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 27, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 28, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 29, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 30, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 31, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 32, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
      ],
    },
    {
      id: 5,
      name: 'Special Care',
      image: '/care.png',
      scenarios: [
        { index: 33, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 34, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 35, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 36, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 37, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 38, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 39, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 40, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
      ],
    },
    {
      id: 6,
      name: 'Mental Health',
      image: '/mentalhealth.png',
      scenarios: [
        { index: 41, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 42, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 43, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 44, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 45, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 46, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 47, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
        { index: 48, name: 'Sarah', icon: MdAccountCircle, description: 'Manage resistance to on-site work requirement', popularity: 100 },
      ],
    },
  ];

