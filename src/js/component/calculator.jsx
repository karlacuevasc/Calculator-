import React, { useState } from "react";

export const Calculator = () => {
	const [count, setCount] = useState("");

	const calculate = () => {
		setCount(eval(count));
	};

	const clear = () => {
		setCount("");
	};

	const negativePositive = () => {
		setCount(count * -1);
	};

	return (
		<div>
			<div className="card">
				<div className="card-body">
					<div className="container mt-5">
						<div className="container">
							{count === "" ? (
								<div className="theNumberField">0</div>
							) : (
								<div className="theNumberField">{count}</div>
							)}
							<div className="row g-2">
								<div className="col-3">
									<button
										className="p-3 btn btn-info"
										value="C"
										onClick={() => clear()}>
										C
									</button>
								</div>
								<div className="col-3">
									<button
										type="button"
										className="buttonNegativePositive p-0 btn btn-info"
										value="+/-"
										onClick={(e) => negativePositive()}>
										+/-
									</button>
								</div>
								<div className="col-3">
									{count === "" ? (
										<button
											className="p-3 btn btn-info"
											value="%">
											%
										</button>
									) : (
										<button
											className="p-3 btn btn-info"
											value="%"
											onClick={(e) =>
												setCount(count + e.target.value)
											}>
											%
										</button>
									)}
								</div>
								<div className="col-3">
									{count === "" ? (
										<button
											className="buttonDivision p-3 btn btn-info"
											value="/">
											/
										</button>
									) : (
										<button
											className="buttonDivision p-3 btn btn-info"
											value="/"
											onClick={(e) =>
												setCount(count + e.target.value)
											}>
											/
										</button>
									)}
								</div>
								<div className="col-3">
									<button
										className="p-3 btn btn-dark"
										value="7"
										onClick={(e) =>
											setCount(count + e.target.value)
										}>
										7
									</button>
								</div>
								<div className="col-3">
									<button
										className="p-3 btn btn-dark"
										value="8"
										onClick={(e) =>
											setCount(count + e.target.value)
										}>
										8
									</button>
								</div>
								<div className="col-3">
									<button
										className="p-3 btn btn-dark"
										value="9"
										onClick={(e) =>
											setCount(count + e.target.value)
										}>
										9
									</button>
								</div>
								<div className="col-3">
									{count === "" ? (
										<button
											className="p-3 btn btn-info"
											value="*">
											x
										</button>
									) : (
										<button
											className="p-3 btn btn-info"
											value="*"
											onClick={(e) =>
												setCount(count + e.target.value)
											}>
											x
										</button>
									)}
								</div>
								<div className="col-3">
									<button
										className="p-3 btn btn-dark"
										value="4"
										onClick={(e) =>
											setCount(count + e.target.value)
										}>
										4
									</button>
								</div>
								<div className="col-3">
									<button
										className="p-3 btn btn-dark"
										value="5"
										onClick={(e) =>
											setCount(count + e.target.value)
										}>
										5
									</button>
								</div>
								<div className="col-3">
									<button
										className="p-3 btn btn-dark"
										value="6"
										onClick={(e) =>
											setCount(count + e.target.value)
										}>
										6
									</button>
								</div>
								<div className="col-3">
									{count === "" ? (
										<button
											className="buttonMinus p-3 btn btn-info"
											value="-">
											-
										</button>
									) : (
										<button
											className="buttonMinus p-3 btn btn-info"
											value="-"
											onClick={(e) =>
												setCount(count + e.target.value)
											}>
											-
										</button>
									)}
								</div>
								<div className="col-3">
									<button
										className="p-3 btn btn-dark"
										value="1"
										onClick={(e) =>
											setCount(count + e.target.value)
										}>
										1
									</button>
								</div>
								<div className="col-3">
									<button
										className="p-3 btn btn-dark"
										value="2"
										onClick={(e) =>
											setCount(count + e.target.value)
										}>
										2
									</button>
								</div>
								<div className="col-3">
									<button
										className="p-3 btn btn-dark"
										value="3"
										onClick={(e) =>
											setCount(count + e.target.value)
										}>
										3
									</button>
								</div>
								<div className="col-3">
									{count === "" ? (
										<button
											className="buttonPlus p-3 btn btn-info"
											value="+">
											+
										</button>
									) : (
										<button
											className="buttonPlus p-3 btn btn-info"
											value="+"
											onClick={(e) =>
												setCount(count + e.target.value)
											}>
											+
										</button>
									)}
								</div>
								<div className="col-6">
									<button
										className="button0 p-3 btn btn-dark"
										value="0"
										onClick={(e) =>
											setCount(count + e.target.value)
										}>
										0
									</button>
								</div>
								<div className="col-3">
									{count === "" ? (
										<button
											className="buttonDecimal p-3 btn btn-dark"
											value=".">
											.
										</button>
									) : (
										<button
											className="buttonDecimal p-3 btn btn-dark"
											value="."
											onClick={(e) =>
												setCount(count + e.target.value)
											}>
											.
										</button>
									)}
								</div>
								<div className="col-3">
									{count === "" ? (
										<button
											className="buttonEqual p-3 btn btn-info"
											value="=">
											=
										</button>
									) : (
										<button
											className="buttonEqual p-3 btn btn-info"
											value="="
											onClick={() => calculate()}>
											=
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
