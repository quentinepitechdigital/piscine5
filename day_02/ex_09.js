displayThisText(`The variable value is '${input_var}.'`)

switch (typeof input_var) {
	case "string":
		displayThisText("Its type is 'String'")
		break
	case "boolean":
		displayThisText("Its type is 'Boolean'")
		break
	case "number":
		if (input_var % 1 === 0)
			displayThisText("Its type is 'Integer'")
		else
			displayThisText("Its type is 'Float'")
		break
}

if (input_var == 42)
	displayThisText("It is the meaning of life.")