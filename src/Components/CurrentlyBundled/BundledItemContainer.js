import { connect } from 'react-redux';
import BundledItem from './BundledItem';
import CreateItemCreators from '../Redux';

const mapDispatchToProps = {
  updateQuantity: CreateItemCreators.updateQuantity,
};

export default connect(null, mapDispatchToProps)(BundledItem);
