// import original module declaration
import 'styled-components';

type Theme = {
	colors?: any;
};

// and extend it
declare module 'styled-components' {
	interface DefaultTheme extends Theme {}
}
