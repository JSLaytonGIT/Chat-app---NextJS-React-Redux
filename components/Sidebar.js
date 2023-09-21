import { useState } from 'react';
import { Drawer, Button, List, ListItemButton , ListItemText, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { burger, title } from '@/styles/sidebarStyles';
import Link from 'next/link';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <Box>
            <Button onClick={toggleSidebar} style={burger}>
            {sidebarOpen ? (
                    <CloseIcon fontSize='large' style={{ color: 'white' }} />
                ) : (
                    <MenuIcon fontSize='large' style={{ color: 'white', zIndex: 1300 }} />
                )}
            </Button>
            <Drawer open={sidebarOpen}
                onClose={toggleSidebar}
                PaperProps={{sx: { width: "15%", background: '#444653', color: 'white' }}}
                >
                <List>
                    <ListItemText primary="Jonny's chatbot" primaryTypographyProps={{ style: title }} />
                    <Link href="/QuestionBot" style={{ textDecoration: 'none' }}>
                        <ListItemButton sx={{ padding: "15px" }}>
                            <ListItemText primary="- Question Bot" />
                        </ListItemButton>
                    </Link>
                    <Link href="/ReflectionBot" style={{ textDecoration: 'none' }}>
                        <ListItemButton sx={{ padding: "15px" }}>
                            <ListItemText primary="- Reflection Bot" />
                        </ListItemButton>
                    </Link>
                    <Link href="/AnagramBot" style={{ textDecoration: 'none' }}>
                        <ListItemButton sx={{ padding: "15px" }}>
                            <ListItemText primary="- Anagram Bot" />
                        </ListItemButton>
                    </Link>
                </List>
            </Drawer>
        </Box>
    )
}
export default Sidebar;