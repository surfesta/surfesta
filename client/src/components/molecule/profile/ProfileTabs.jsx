import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="root">
      <AppBar position="absolute" color="White" elevation={1}>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          variant="standard"
          value={value}
          onChange={handleChange}
        >
          <Tab label="Page one" />
          <Tab label="Page tow" />
          <Tab label="Page three" />
        </Tabs>
      </AppBar>
      {value === 0 && (
        <Box p={6}>
          <h1>page1</h1>
        </Box>
      )}
      {value === 1 && (
        <Box p={6}>
          <h1>page2</h1>
        </Box>
      )}
      {value === 2 && (
        <Box p={6}>
          <h1>page3</h1>
        </Box>
      )}
    </div>
  );
}
