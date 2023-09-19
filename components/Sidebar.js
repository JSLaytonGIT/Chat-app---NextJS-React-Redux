import { useState } from 'react';
import { Drawer, Button, List, ListItemButton , ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { burger } from '@/styles/SidebarStyles';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <Box
            onClick={toggleSidebar}
            onKeyDown={toggleSidebar}
        >
            <Button onClick={toggleSidebar} style={burger}>
                <MenuIcon fontSize='large' style={{color: 'white'}} />
            </Button>
            <Drawer open={sidebarOpen}
                onClose={toggleSidebar}
                PaperProps={{sx: { width: "15%", background: '#444653', color: 'white' }}}
                hideBackdrop
                >
                <List>
                    <ListItemButton>
                        <ListItemText primary="Sidebar Item 1" />
                    </ListItemButton >
                    <ListItemButton>
                        <ListItemText primary="Sidebar Item 2" />
                    </ListItemButton>
                </List>
            </Drawer>
        </Box>
    )
}
export default Sidebar;