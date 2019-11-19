import { connect } from 'react-redux';
import CreateItem from './CreateItem';
import CreateItemCreators from '../Redux';

const mapStateToProps = ({ CreateItem: { items, fields } }) => ({
  items,
  fields,
});

const mapDispatchToProps = {
  createItem: CreateItemCreators.createItem,
  deleteItem: CreateItemCreators.deleteItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem);
