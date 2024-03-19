var state = { count: 0 }
var str = "Testing"

function increment() {
    state.count = 1 + state.count
    str = str + "!"
}

function Message() {
    return (
        <div>
            <header>Hello World {state.count}</header>
            <button class="btn btn-secondary" onclick={increment()}>{str}</button>
        </div>
    );
}

export default Message;

//Create a VS Code basics tutorial