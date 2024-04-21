import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { AddLocationAlt, Bed, LocationOn } from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';
import ClusterMap from './Home/HomeC';
import Rooms from './destinations/Destinations';
import AddRoom from './News/News';

const Content = ({setMobileOpen}) => {
  const [value, setValue] = useState(0);
  const ref = useRef();

  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value]);

  const handleListItemClick = (index) => {
    setValue(index);
  };

  // Define Drawer content as a constant
  const drawerContent = (
    <List>
      <ListItem button onClick={() => handleListItemClick(0)}>
        <ListItemIcon>
          <LocationOn />
        </ListItemIcon>
        <ListItemText primary="Map" />
      </ListItem>
      <ListItem button onClick={() => handleListItemClick(1)}>
        <ListItemIcon>
          <Bed />
        </ListItemIcon>
        <ListItemText primary="Rooms" />
      </ListItem>
      <ListItem button onClick={() => handleListItemClick(2)}>
        <ListItemIcon>
          <AddLocationAlt />
        </ListItemIcon>
        <ListItemText primary="Add" />
      </ListItem>
    </List>
  );

  return (
    <Box ref={ref}>
      {
        {
          0: <ClusterMap />,
          1: <Rooms />,
          2: <AddRoom />,
        }[value]
      }
      <Paper
        elevation={3}
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2 }}
      >
        {/* Render Drawer with the constant drawerContent */}
        <Drawer
          anchor="left"
          open
          variant="permanent"
          sx={{
            width: 200,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 200,
              boxSizing: 'border-box',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Paper>
    </Box>
  );
};

export default Content;
