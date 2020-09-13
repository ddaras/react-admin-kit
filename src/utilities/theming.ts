import {
	FlattenInterpolation,
	ThemeProps,
	ThemedStyledProps
} from 'styled-components';

type ThemeValueResult =
	| string
	| FlattenInterpolation<ThemeProps<any>>
	| FlattenInterpolation<ThemedStyledProps<any, any>>;
type ThemeValueFn = (props: object) => ThemeValueResult;
type ThemeValue = ThemeValueFn | ThemeValueResult;
interface ThemeMap {
	[key: string]: ThemeValue;
}
type VariantMap<TVariant extends string> = {
	[key in TVariant]: ThemeMap | string;
};

const getThemeValue = (
	name: string,
	props: any,
	values: VariantMap<any> | ThemeMap
) => {
	const themeName = props.theme && props.theme[name];

	let themeValue;

	if (typeof values === 'string') {
		themeValue = values;
	} else if (values) {
		themeValue = values[themeName];
	} else {
		themeValue = null;
	}

	return themeValue;
};

export const theming = (name: string, values: ThemeMap): any => {
	return function (props: object): any {
		return getThemeValue(name, props, values);
	};
};

export const varianting = <TProp extends string, TVariant extends string>(
	name: string,
	prop: TProp,
	values: VariantMap<TVariant> | any
): any => {
	return function (props: any) {
		const variant = values[props[prop]];
		return getThemeValue(name, props, variant);
	};
};
