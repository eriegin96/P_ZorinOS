import {
	blueDarkFolder,
	blueDarkDocumenstFolder,
	blueDarkHomeFolder,
	blueDarkMusicFolder,
	blueDarkPicturesFolder,
	blueDarkUserFolder,
	blueDarkVideosFolder,
	blueLightFolder,
	blueLightDocumenstFolder,
	blueLightHomeFolder,
	blueLightMusicFolder,
	blueLightPicturesFolder,
	blueLightUserFolder,
	blueLightVideosFolder,
	greenDarkFolder,
	greenDarkDocumenstFolder,
	greenDarkHomeFolder,
	greenDarkMusicFolder,
	greenDarkPicturesFolder,
	greenDarkUserFolder,
	greenDarkVideosFolder,
	greenLightFolder,
	greenLightDocumenstFolder,
	greenLightHomeFolder,
	greenLightMusicFolder,
	greenLightPicturesFolder,
	greenLightUserFolder,
	greenLightVideosFolder,
	orangeDarkFolder,
	orangeDarkDocumenstFolder,
	orangeDarkHomeFolder,
	orangeDarkMusicFolder,
	orangeDarkPicturesFolder,
	orangeDarkUserFolder,
	orangeDarkVideosFolder,
	orangeLightFolder,
	orangeLightDocumenstFolder,
	orangeLightHomeFolder,
	orangeLightMusicFolder,
	orangeLightPicturesFolder,
	orangeLightUserFolder,
	orangeLightVideosFolder,
	purpleDarkFolder,
	purpleDarkDocumenstFolder,
	purpleDarkHomeFolder,
	purpleDarkMusicFolder,
	purpleDarkPicturesFolder,
	purpleDarkUserFolder,
	purpleDarkVideosFolder,
	purpleLightFolder,
	purpleLightDocumenstFolder,
	purpleLightHomeFolder,
	purpleLightMusicFolder,
	purpleLightPicturesFolder,
	purpleLightUserFolder,
	purpleLightVideosFolder,
	redDarkFolder,
	redDarkDocumenstFolder,
	redDarkHomeFolder,
	redDarkMusicFolder,
	redDarkPicturesFolder,
	redDarkUserFolder,
	redDarkVideosFolder,
	redLightFolder,
	redLightDocumenstFolder,
	redLightHomeFolder,
	redLightMusicFolder,
	redLightPicturesFolder,
	redLightUserFolder,
	redLightVideosFolder,
} from '../assets/images/folders';

export function changeColorSet(color, darkTheme) {
	return {
		text: `text-${color}-${darkTheme ? 'light' : 'dark'}`,
		bg: `bg-${color}-${darkTheme ? 'light' : 'dark'}`,
		bgImage: `bg-gradient-${color}`,
		bgImageHover: `hover:bg-gradient-${color}`,
		border: `border-${color}-${darkTheme ? 'light' : 'dark'}`,
		outline: `outline-${color}-${darkTheme ? 'light' : 'dark'}`,
	};
}

export function changeFolderIconColor(theme, color) {
	if (theme === 'dark') {
		switch (color) {
			case 'blue':
				return {
					default: blueDarkFolder,
					documents: blueDarkDocumenstFolder,
					home: blueDarkHomeFolder,
					music: blueDarkMusicFolder,
					pictures: blueDarkPicturesFolder,
					users: blueDarkUserFolder,
					videos: blueDarkVideosFolder,
				};
			case 'green':
				return {
					default: greenDarkFolder,
					documents: greenDarkDocumenstFolder,
					home: greenDarkHomeFolder,
					music: greenDarkMusicFolder,
					pictures: greenDarkPicturesFolder,
					users: greenDarkUserFolder,
					videos: greenDarkVideosFolder,
				};
			case 'orange':
				return {
					default: orangeDarkFolder,
					documents: orangeDarkDocumenstFolder,
					home: orangeDarkHomeFolder,
					music: orangeDarkMusicFolder,
					pictures: orangeDarkPicturesFolder,
					users: orangeDarkUserFolder,
					videos: orangeDarkVideosFolder,
				};
			case 'purple':
				return {
					default: purpleDarkFolder,
					documents: purpleDarkDocumenstFolder,
					home: purpleDarkHomeFolder,
					music: purpleDarkMusicFolder,
					pictures: purpleDarkPicturesFolder,
					users: purpleDarkUserFolder,
					videos: purpleDarkVideosFolder,
				};
			case 'red':
				return {
					default: redDarkFolder,
					documents: redDarkDocumenstFolder,
					home: redDarkHomeFolder,
					music: redDarkMusicFolder,
					pictures: redDarkPicturesFolder,
					users: redDarkUserFolder,
					videos: redDarkVideosFolder,
				};
			default:
				return {
					default: blueLightFolder,
					documents: blueLightDocumenstFolder,
					home: blueLightHomeFolder,
					music: blueLightMusicFolder,
					pictures: blueLightPicturesFolder,
					users: blueLightUserFolder,
					videos: blueLightVideosFolder,
				};
		}
	}

	switch (color) {
		case 'blue':
			return {
				default: blueLightFolder,
				documents: blueLightDocumenstFolder,
				home: blueLightHomeFolder,
				music: blueLightMusicFolder,
				pictures: blueLightPicturesFolder,
				users: blueLightUserFolder,
				videos: blueLightVideosFolder,
			};
		case 'green':
			return {
				default: greenLightFolder,
				documents: greenLightDocumenstFolder,
				home: greenLightHomeFolder,
				music: greenLightMusicFolder,
				pictures: greenLightPicturesFolder,
				users: greenLightUserFolder,
				videos: greenLightVideosFolder,
			};
		case 'orange':
			return {
				default: orangeLightFolder,
				documents: orangeLightDocumenstFolder,
				home: orangeLightHomeFolder,
				music: orangeLightMusicFolder,
				pictures: orangeLightPicturesFolder,
				users: orangeLightUserFolder,
				videos: orangeLightVideosFolder,
			};
		case 'purple':
			return {
				default: purpleLightFolder,
				documents: purpleLightDocumenstFolder,
				home: purpleLightHomeFolder,
				music: purpleLightMusicFolder,
				pictures: purpleLightPicturesFolder,
				users: purpleLightUserFolder,
				videos: purpleLightVideosFolder,
			};
		case 'red':
			return {
				default: redLightFolder,
				documents: redLightDocumenstFolder,
				home: redLightHomeFolder,
				music: redLightMusicFolder,
				pictures: redLightPicturesFolder,
				users: redLightUserFolder,
				videos: redLightVideosFolder,
			};
		default:
			return {
				default: blueLightFolder,
				documents: blueLightDocumenstFolder,
				home: blueLightHomeFolder,
				music: blueLightMusicFolder,
				pictures: blueLightPicturesFolder,
				users: blueLightUserFolder,
				videos: blueLightVideosFolder,
			};
	}
}
