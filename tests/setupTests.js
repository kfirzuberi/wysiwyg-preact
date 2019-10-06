const configure = require('enzyme').configure;
const Adapter = require('enzyme-adapter-preact-pure').Adapter;

//import { configure } from 'enzyme';
//import Adapter from 'enzyme-adapter-preact-pure';

configure({ adapter: new Adapter });