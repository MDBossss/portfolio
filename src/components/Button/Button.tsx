import { ButtonHTMLAttributes, ReactElement } from "react";

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
	text: string;
	icon?: ReactElement;
}

const Button = ({ text, icon, ...rest }: Props) => {
	return (
		<button {...rest}>
			{text}
			{icon}
		</button>
	);
};

export default Button;
