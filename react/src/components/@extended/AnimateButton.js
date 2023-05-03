import PropTypes from 'prop-types';

// third-party
import { motion } from 'framer-motion';

// ==============================|| ANIMATION BUTTON ||============================== //

export default function AnimateButton({ children, scale = { hover: 1.05, tap: 0.954 } }) {
  return (
    <motion.div whileHover={{ scale: scale?.hover }} whileTap={{ scale: scale?.tap }}>
      {children}
    </motion.div>
  );
}
AnimateButton.propTypes = {
  children: PropTypes.node,
  scale: PropTypes.object
};
