import React, { useState } from 'react';
import { MenuItem, Menu, Button } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import ListViewIcon from '@mui/icons-material/ViewList';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const GridList = ({ onSelectView }) => {
  const [viewType, setViewType] = useState('grid'); 
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSelectView = (view) => {
    setViewType(view);
    onSelectView(view);
    handleCloseMenu();
  };

  return (
    <div>
      <Button
        aria-label="view-selector"
        aria-controls="view-menu"
        aria-haspopup="true"
        onClick={handleOpenMenu}
        color="inherit"
        startIcon={viewType === 'grid' ? <GridViewIcon /> : <ListViewIcon />}
        endIcon={<ArrowDropDownIcon />}
      >
        {viewType === 'grid' ? 'Grid View' : 'List View'}
      </Button>
      <Menu
        id="view-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => handleSelectView('grid')}>
          <GridViewIcon /> Grid View
        </MenuItem>
        <MenuItem onClick={() => handleSelectView('list')}>
          <ListViewIcon /> List View
        </MenuItem>
      </Menu>
    </div>
  );
};

export default GridList;