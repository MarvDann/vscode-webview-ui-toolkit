import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';
import {heightNumber} from '../utilities/styles/index';

export const BadgeStyles = css`
	${display('inline-block')} :host {
		box-sizing: border-box;
		font-family: var(--body-font);
		font-size: var(--type-ramp-minus-1-font-size);
		line-height: var(--type-ramp-minus-1-line-height);
	}
	.control {
		border-radius: 2px;
		padding: calc(var(--design-unit) * 0.5px) calc(var(--design-unit) * 1px);
		color: #cccccc;
		font-weight: 600;
	}
	.control[style] {
		font-weight: 400;
	}
	:host([circular]) .control {
		border-radius: 100px;
		padding: 0 calc(var(--design-unit) * 1px);
		height: calc((${heightNumber} - (var(--design-unit) * 3)) * 1px);
		min-width: calc((${heightNumber} - (var(--design-unit) * 3)) * 1px);
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
	}
`;