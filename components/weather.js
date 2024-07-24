import React from 'react';
import { Box } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import InvertColorsIcon from '@mui/icons-material/InvertColors';

const weatherIcons = {
  Sunny: <WbSunnyIcon style={{ fontSize: 40, color: '#FFD700' }} />,
  Rainy: <InvertColorsIcon style={{ fontSize: 40, color: '#00BFFF' }} />,
  Thunder: <ThunderstormIcon style={{ fontSize: 40, color: '#4B0082' }} />,
  Cloudy: <CloudIcon style={{ fontSize: 40, color: '#808080' }} />,
};

const Weather = ({ weather }) => {
  const weatherIcon = weatherIcons[weather] || <CloudIcon style={{ fontSize: 40, color: '#808080' }} />;

  return (
    <div className="flex items-center">
      {weatherIcon}
      <h2 className="text-xl ml-2">{weather}</h2>
    </div>
  );
};

export default Weather;