import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FC, useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
const MenuItemCustom: FC<any> = (props) => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const redirectUrl = (url: string) => {
    if(url){
      navigate(url);
    }
    
  }
  return (
    <span>
       <ListItem  button onClick={() => handleClick()} sx={{ p: 0 }}>
        <ListItemButton onClick={() => redirectUrl(props.item.url)}>
          <ListItemIcon sx={{ minWidth: '2.5rem', color:"white" }}>
            {props.item.icon}
          </ListItemIcon>
          <ListItemText primary={props.item.label} />
        </ListItemButton>
        {props.item.subMenu && (
          <>
            {open ? <ExpandLess /> : <ExpandMore />}
          </>
        )}

      </ListItem>
      {props.item.subMenu && (
        <>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {props.item.subMenu.map((subMenu: any, index: number) => {
                return (
                  <ListItem button key={index} sx={{ p: 0 }}>
                      <ListItemButton sx={{ pl: 6 }} onClick={() => redirectUrl(subMenu.url)}>
                        <ListItemText primary={subMenu.label} />
                      </ListItemButton>
                   
                  </ListItem>
                )
              })}
            </List>
          </Collapse>
        </>
      )}
    </span>
  );
};

export default MenuItemCustom;