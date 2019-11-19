import { connect } from 'react-redux';
import CreateBundle from './CreateBundle';
import CreateItemCreators from '../Redux';

const mapStateToProps = ({ CreateItem: { items, currentlyBlunded } }) => ({
  items,
  currentlyBlunded,
});

const mapDispatchToProps = {
  createCurrentlyBundledItem: CreateItemCreators.createCurrentlyBundledItem,
  deleteCurrentlyBundledItem: CreateItemCreators.deleteCurrentlyBundledItem,
  createRealeasedBundled: CreateItemCreators.createRealeasedBundled,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBundle);
