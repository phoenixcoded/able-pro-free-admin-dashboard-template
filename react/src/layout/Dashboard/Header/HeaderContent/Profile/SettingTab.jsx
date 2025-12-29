// material-ui
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// project-imports
import { useBuyNowLink } from 'hooks/buyNowLink';

// assets
import { Clipboard, I24Support, Lock1, Messages1, Profile } from 'iconsax-reactjs';

// ==============================|| HEADER PROFILE - SETTING TAB ||============================== //

export default function SettingTab() {
  const { isPhoenix } = useBuyNowLink();

  const SupportLink = isPhoenix ? 'https://phoenixcoded.authordesk.app/' : 'https://codedthemes.support-hub.io/';

  return (
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
      <Link style={{ textDecoration: 'none' }} target="_blank" href={SupportLink}>
        <ListItemButton>
          <ListItemIcon>
            <I24Support variant="Bulk" size={18} />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItemButton>
      </Link>
      <ListItemButton>
        <ListItemIcon>
          <Profile variant="Bulk" size={18} />
        </ListItemIcon>
        <ListItemText primary="Account Settings" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Lock1 variant="Bulk" size={18} />
        </ListItemIcon>
        <ListItemText primary="Privacy Center" />
      </ListItemButton>
      <Link style={{ textDecoration: 'none' }} target="_blank" href={SupportLink}>
        <ListItemButton>
          <ListItemIcon>
            <Messages1 variant="Bulk" size={18} />
          </ListItemIcon>
          <ListItemText primary="Feedback" />
        </ListItemButton>
      </Link>
      <ListItemButton>
        <ListItemIcon>
          <Clipboard variant="Bulk" size={18} />
        </ListItemIcon>
        <ListItemText primary="History" />
      </ListItemButton>
    </List>
  );
}
