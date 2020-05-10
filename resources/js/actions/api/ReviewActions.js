import AbstractCrudActions from '@/actions/api/AbstractCrudActions';
import ApiCrudActionTypes from '@/constants/api/CrudActionTypes';

class ReviewActions extends AbstractCrudActions {
  constructor() {
    super();
    this.endpoint = '/api/reviews';
    this.actionTypes = ApiCrudActionTypes;
  }
}

export default new ReviewActions();
