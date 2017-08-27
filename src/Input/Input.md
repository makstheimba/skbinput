oi boi

	initialState = {count: 0, value: ''};

	<div>
		<div>Imma clicked {state.count} times!</div>

		<Input onClick={() => setState({count: state.count + 1})} />
	</div>