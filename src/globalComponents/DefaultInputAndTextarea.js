import React from "react";

function DefaultInputAndTextarea({inputValue, inputChange, inputName, inputTitle, textarea}) {
	return (
		<div className="default-input-block">
			{inputTitle && <div className="default-input-title">{inputTitle}</div>}

			{!textarea ?
				<input type="text" value={inputValue} onChange={inputChange} name={inputName}
				       className={"default-input"}/>
				:
				<textarea value={inputValue} onChange={inputChange} name={inputName}
				          className={"default-input textarea"} cols="0" rows="0"/>
			}

		</div>
	);
}

export default DefaultInputAndTextarea;