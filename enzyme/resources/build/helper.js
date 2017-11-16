import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

enzyme.configure({ adapter: new Adapter() });

global.enzyme = enzyme;
