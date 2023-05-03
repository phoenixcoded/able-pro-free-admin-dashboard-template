// third-party
import { merge } from 'lodash';

// project-imports
import Body from './Body';
import Button from './Button';
import ButtonBase from './ButtonBase';
import ButtonGroup from './ButtonGroup';
import CardContent from './CardContent';
import Checkbox from './Checkbox';
import Chip from './Chip';
import Drawer from './Drawer';
import FormHelperText from './FormHelperText';
import IconButton from './IconButton';
import InputLabel from './InputLabel';
import LinearProgress from './LinearProgress';
import Link from './Link';
import ListItemButton from './ListItemButton';
import ListItemIcon from './ListItemIcon';
import LoadingButton from './LoadingButton';
import OutlinedInput from './OutlinedInput';
import Tab from './Tab';
import Tabs from './Tabs';
import ToggleButton from './ToggleButton';
import Tooltip from './Tooltip';
import Typography from './Typography';

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme) {
  return merge(
    Body(),
    Button(theme),
    ButtonBase(),
    ButtonGroup(),
    CardContent(),
    Checkbox(theme),
    Chip(theme),
    Drawer(),
    FormHelperText(),
    IconButton(theme),
    InputLabel(theme),
    LinearProgress(),
    Link(),
    ListItemButton(theme),
    ListItemIcon(theme),
    LoadingButton(),
    OutlinedInput(theme),
    Tab(theme),
    Tabs(),
    ToggleButton(theme),
    Tooltip(theme),
    Typography()
  );
}
