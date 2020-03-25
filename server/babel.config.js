module.exports = api => {
	api.cache(true);
	const presets = ['@mhirba/next'];
	const plugins = [
		'@babel/plugin-transform-runtime',
		'@babel/plugin-proposal-optional-chaining',
		'@babel/plugin-proposal-object-rest-spread',
		[
			'@babel/plugin-proposal-decorators',
			{
				legacy: true,
			},
		],
		'@babel/plugin-proposal-class-properties',
	];
	return { presets, plugins };
};
