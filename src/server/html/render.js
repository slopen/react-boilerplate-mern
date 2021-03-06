// @flow

import config from 'config';

const {
	name,
	PRODUCTION
}: {
	name: string,
	devPort: string,
	PRODUCTION: boolean
} = config;

export default () =>
`<!doctype html>
<html>
	<head>
		<title>${name}</title>
		<meta charset="utf-8">
		<meta name="HandheldFriendly" content="True"/>
		<meta name="apple-mobile-web-app-status-bar-style" content="white-translucent"/>
		<meta name="viewport" content="initial-scale=1.0,width=device-width,user-scalable=0,user-scalable=no"/>

		${PRODUCTION ? '<link rel="stylesheet" href="/styles.css">' : ''}
	</head>
	<body>
		<div id="root"></div>
		<script src="/bundle.js"></script>
	</body>
<html>`;
