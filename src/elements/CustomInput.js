import styled from 'styled-components';

export default styled.input`
		background-color: ${(props) => props.theme.alert};
		padding: ${(props) => props.theme.customInputTheme.inputPadding};
		margin: ${(props) => props.theme.customInputTheme.inputMargin};
		border: ${(props) => props.theme.customInputTheme.inputBorder};
	`;
;
