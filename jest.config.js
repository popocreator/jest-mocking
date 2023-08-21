module.exports = {
	preset: 'react-native',
	setupFiles: ['./jest.setup.ts'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
	transformIgnorePatterns: [
		'node_modules/(?!(jest-)?react-native|@react-native|@notifee)',
	],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif)$': 'identity-obj-proxy',
	},
};
