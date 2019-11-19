import { connect } from 'react-redux';
import RealeasedBundles from './RealeasedBundles';
import CreateItemCreators from '../Redux';

const mapStateToProps = ({ CreateItem: { realeasedBundles } }) => ({
  realeasedBundles,
});

const mapDispatchToProps = {
  deleteRealeasedBundled: CreateItemCreators.deleteRealeasedBundled,
};

export default connect(mapStateToProps, mapDispatchToProps)(RealeasedBundles);
