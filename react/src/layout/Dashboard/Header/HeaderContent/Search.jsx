// material-ui
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';

// assets
import { SearchNormal1 } from 'iconsax-reactjs';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

export default function Search() {
  return (
    <Box sx={{ width: '100%', ml: { xs: 0, md: 2 } }}>
      <FormControl sx={{ width: { xs: '100%', md: 224 } }}>
        <OutlinedInput
          id="header-search"
          startAdornment={
            <InputAdornment position="start" sx={{ mr: -0.5 }}>
              <SearchNormal1 size={16} />
            </InputAdornment>
          }
          aria-describedby="header-search-text"
          slotProps={{ input: { sx: { p: 1.5 }, 'aria-label': 'weight' } }}
          placeholder="Ctrl + K"
        />
      </FormControl>
    </Box>
  );
}
