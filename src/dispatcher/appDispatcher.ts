import { Dispatcher } from 'flux';

import { ICourseAction } from '../model/courseAction';

const dispatcher = new Dispatcher<ICourseAction>();
export default dispatcher;