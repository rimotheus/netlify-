//scenarios page
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';

import Layout from '../../../components/layout';
import SearchInput from '../../../components/searchbar';
import Pagination from '../../../components/pagination';
import GridList from '../../../components/gridlist';
import Popup from '../../../components/popup';

import { MdChevronRight } from 'react-icons/md';
import { Add, ChevronLeft } from '@mui/icons-material';

import { categories } from '../../../utils/constants';

const ITEMS_PER_PAGE = 6;

const Scenario = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewState, setViewState] = useState('categories'); // 'categories' or 'scenarios'
  const [viewType, setViewType] = useState('grid'); // 'grid' or 'list'
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setViewState('scenarios');
    setCurrentPage(1);
  };

  const handleItemClick = (item) => {
    if (viewState === 'scenarios') {
      setSelectedItem(item);
      setShowPopup(true);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  const handleOptionClick = (minutes) => {
    setShowPopup(false);
    console.log(`Selected minutes: ${minutes}`);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setViewState('categories');
    setSearchQuery('');
    setCurrentPage(1);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleViewChange = (view) => {
    setViewType(view);
    setCurrentPage(1);
  };

  let filteredItems = [];
  if (viewState === 'categories') {
    filteredItems = categories.filter(category =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else if (viewState === 'scenarios' && selectedCategory && selectedCategory.scenarios) {
    filteredItems = selectedCategory.scenarios.filter(scenario =>
      (scenario.name && scenario.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (scenario.description && scenario.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <Layout loginBackground={true}>
      <Head>
        <title>{viewState === 'Scenarios' ? 'Scenarios' : 'Scenarios'}</title>
      </Head>

      <div className="flex h-auto w-auto flex-col">
        <div className="flex-1">
          <div className="shadow-md p-4 flex items-center justify-between mb-6 bg-white">
            <div className="flex items-center">
              {viewState === 'scenarios' && (
                <ChevronLeft className="cursor-pointer text-index-blue-button hover:text-gray-600 mr-2 mt-1 text-4xl" onClick={handleBackToCategories} />
              )}
               <div className="text-4xl font-bold">
                {viewState === 'Scenarios' ? 'Scenarios' : selectedCategory?.name || 'Scenarios'}
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/chats/new">
                <h1 className="bg-index-blue text-white px-4 py-2 rounded-full ml-6 mr-6 flex items-center justify-center">
                  <Add className="text-xl mr-1" />
                  <span className="truncate">Create Category</span>
                </h1>
              </Link>
              <SearchInput onSearchChange={handleSearchChange} />
            </div>
          </div>

          <div className="flex flex-col w-full h-auto">
            {viewState === 'scenarios' && (
              <GridList onSelectView={handleViewChange} />
            )}

            <ul className={`w-full ${viewType === 'grid' ? "grid sm:grid-cols-2 md:grid-cols-3 gap-4" : "space-y-0"}`}>
              {currentItems.map((item, index) => (
                <li key={item.id || index} className={`flex ${viewType === 'list' ? 'flex-row justify-between items-center py-4 border-b border-gray-200 w-full p-6' : 'flex-col items-center justify-center'} mt-8`}>
                  <div
                    className={`flex flex-col items-center text-center text-gray-800 hover:text-gray-600 
                    ${viewState === 'scenarios' ? 'bg-white p-3 rounded-lg shadow-md' : ''}
                    ${viewType === 'grid' ? 'w-50 h-50' : 'w-full h-full'}`}
                    onClick={() => viewState === 'categories' && handleCategoryClick(item)}
                  >
                    {viewState === 'categories' ? (
                      <div className="flex flex-col items-center text-center text-gray-800 hover:text-gray-600">
                        <div className="bg-index-blue-button p-2 rounded-lg">
                          <Image src={item.image} alt={item.name} width={180} height={180} className="object-cover" />
                        </div>
                        <div className=" cursor-pointer flex items-center justify-between w-full mt-2">
                          <div className="text-xl hover:underline">{item.name}</div>
                          <MdChevronRight className="text-2xl text-white rounded-full bg-index-blue" />
                        </div>
                      </div>
                    ) : (
                      <div className=" cursor-pointer flex items-center w-full ml-2 mr-2" onClick={() => handleItemClick(item)}>
                        {viewType === 'grid' ? (
                          <div className="flex flex-col items-center text-center text-gray-800 hover:text-gray-600 ">
                            <item.icon className=" text-5xl cursor-pointer mt-4" />
                            <div className="flex flex-col">
                              <p className="text-lg">{item.name}</p>
                              <p className="text-sm text-gray-500 text-clip overflow-hidden">{item.description}</p>
                            </div>
                          </div>
                        ) : (
                          <div className="cursor-pointer  flex items-center text-left text-gray-800 hover:text-gray-600 flex-grow ">
                            <item.icon className="text-5xl cursor-pointer" />
                            <div className="flex flex-col ml-4 flex-1">
                              <p className="text-lg">{item.name}</p>
                              <p className="text-sm text-gray-500 text-clip overflow-hidden">{item.description}</p>
                            </div>
                            <div className="text-lg ml-auto">Popularity: {item.index}</div>
                            <MdChevronRight className="text-3xl text-black " />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </li>
              ))}
              
            </ul>

            <div className="flex flex-col justify-end items-end">
              <Pagination
                items={totalItems}
                pageSize={ITEMS_PER_PAGE}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                showPagination
              />
            </div>
          </div>
        </div>
      </div>

      {viewState === 'scenarios' && showPopup && (
        <Popup
          handleOptionClick={handleOptionClick}
          onClose={handlePopupClose}
          item={selectedItem} // Pass the selected item to the Popup
        />
      )}
    </Layout>
  );
};

export default Scenario;