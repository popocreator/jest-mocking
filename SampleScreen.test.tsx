// import React from 'react';
// import renderer from 'react-test-renderer';
// import {
// 	CommonContext,
// 	CommonDispatchContext,
// 	CommonState,
// } from '~/providers/CommonContext';
// import {Provider} from 'mobx-react';
// import stores from '../../mobx/index';
// import {Dimensions} from 'react-native';
// import {gradientThemedColors, themedColors} from '~/theme';
// import SampleScreen from './SampleScreen';

// const dispatch = {
// 	changeTheme: jest.fn(),
// 	changeHaptic: jest.fn(),
// 	changeLogControl: jest.fn(),
// 	changeLanguage: jest.fn(),
// 	changeTimeFormat: jest.fn(),
// };

// const initCommon: CommonState = {
// 	theme: 'light',
// 	colors: themedColors.light,
// 	gradientColors: gradientThemedColors.light,
// 	width: Dimensions.get('window').width,
// 	height: Dimensions.get('window').height,
// 	haptic: false,
// 	fontScale: 1,
// 	logControl: false,
// 	hapticFeedback: () => {},
// 	isX: false,
// 	lang: 'en',
// 	timeformat: '',
// };

// const state = {
// 	appState: '',
// 	...initCommon,
// 	overlayTabBar: false,
// 	changingDimension: false,
// 	isLoading: true,
// 	isInit: false,
// };

// it('renders correctly', async () => {
// 	const tree = await renderer
// 		.create(
// 			<Provider {...stores}>
// 				<CommonDispatchContext.Provider value={dispatch}>
// 					<CommonContext.Provider value={state}>
// 						<SampleScreen />
// 					</CommonContext.Provider>
// 				</CommonDispatchContext.Provider>
// 			</Provider>
// 		)
// 		.toJSON();
// 	expect(tree).toMatchSnapshot();
// });
