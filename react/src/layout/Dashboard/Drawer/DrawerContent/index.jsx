// project-imports
import NavCard from './NavCard';
import SimpleBar from 'components/third-party/SimpleBar';
import Navigation from './Navigation';

// ==============================|| DRWAER - CONTENT ||============================== //

export default function DrawerContent() {
  return (
    <SimpleBar
      sx={{
        height: { xs: 'calc(100vh - 0px)' },
        '& .simplebar-content': {
          display: 'flex',
          flexDirection: 'column'
        }
      }}
    >
      <>
        <Navigation />
        <NavCard />
      </>
    </SimpleBar>
  );
}
