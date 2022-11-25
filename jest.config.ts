const config = {
	preset: "ts-jest",
	testEnvironment: "node",
	extensionsToTreatAsEsm: [".ts"],
	globals: {
		"ts-jest": {
			useESM: true,
		},
	},
	moduleNameMapper: {
		"^(\\.{1,2}/.*)\\.js$": "$1",
	},
	transform: {
		"^.+\\.(t|j)sx?$": [
			"@swc/jest",
			{
				jsc: {
					parser: {
						syntax: "typescript",
						tsx: true,
						decorators: true,
					},
					keepClassNames: true,
					transform: {
						legacyDecorator: true,
						decoratorMetadata: true,
						react: {
							runtime: "automatic",
						},
					},
				},
				module: {
					type: "es6",
					noInterop: false,
				},
			},
		],
	},
};

export default config;